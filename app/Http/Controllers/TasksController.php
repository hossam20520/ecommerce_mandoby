<?php
namespace App\Http\Controllers;

use App\Models\Task;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class TasksController extends Controller
{

    //------------ GET ALL Tasks -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Task::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $id = $request->id;

        $helpers = new helpers();

        $tasks = Task::with('Shop')->where('deleted_at', '=', null)->where('user_id' , $id)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $tasks->count();
        $tasks = $tasks->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'tasks' => $tasks,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Task -------------\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Task::class);

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/tasks/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $Task = new Task;

            $Task->en_name = $request['en_name'];
            $Task->ar_name = $request['ar_name'];
            $Task->image = $filename;
            $Task->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function getDetail(Request $request, $id){
         
        $data_surv = Survey::where('deleted_at' , '=' , null)->where('task_id' , $id )->first();
        
        $item['survey'] = $data_surv;
 
 

        
        $data[] = $item;

        return response()->json($data[0]);
    }

     //---------------- UPDATE Task -------------\

     public function update(Request $request, $id)
     {
 
         $this->authorizeForUser($request->user('api'), 'update', Task::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Task = Task::findOrFail($id);
             $currentImage = $Task->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/tasks';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/tasks/' . $filename));
 
                 $TaskImage = $path . '/' . $currentImage;
                 if (file_exists($TaskImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($TaskImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/tasks';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/tasks/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Task::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Task -----------\

    public function destroy(Request $request, $id)
    {
        // $this->authorizeForUser($request->user('api'), 'delete', Task::class);

        Task::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'delete', Task::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $task_id) {
            Task::whereId($task_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

