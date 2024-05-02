<?php
namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\User;
use Carbon\Carbon;
use App\utils\helpers;
 
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class AttendancesController extends Controller
{

    //------------ GET ALL Attendances -----------\

    public function index(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'view', Attendance::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

       $user_id = $request->user_id;


       $columns = array(0 => 'user_id', 1 => 'date', 2 => 'time' , 3 => 'status' , 4 => 'type'    );
       $param = array(0 => '=', 1 => '=', 2 => '=' , 3 => '=' , 4 => '=' );

        $daat = Attendance::with('user')->where('deleted_at', '=', null);
        // $date = Carbon::createFromFormat('Y-m-d', '2024-05-01')->format('j-n-Y');


        $attendances =  $helpers->filter($daat, $columns, $param, $request)->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('user_id', 'LIKE', "%{$request->search}%") 
                    ->orWhere('date', 'LIKE', "%{$request->search}%")
                    ->orWhere('time', 'LIKE', "%{$request->search}%") 
                    ->orWhere('status', 'LIKE', "%{$request->search}%") 
                    ->orWhere('type', 'LIKE', "%{$request->search}%");
                });
            });



        $totalRows = $attendances->count();
        $attendances = $attendances->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

         
        $users = User::where('deleted_at' , '=' , null)->whereIn('role_id', [3, 4 , 5])->get();
        return response()->json([
           
            'users'=> $users,
            'attendances' => $attendances,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW Attendance -------------\

    public function store(Request $request)
    {
        // $this->authorizeForUser($request->user('api'), 'create', Attendance::class);

        // request()->validate([
        //     'ar_name' => 'required',
        // ]);

        \DB::transaction(function () use ($request) {

            // if ($request->hasFile('image')) {
            //     $image = $request->file('image');
            //     $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            //     $image_resize = Image::make($image->getRealPath());
            //     $image_resize->resize(200, 200);
            //     $image_resize->save(public_path('/images/attendances/' . $filename));

            // } else {
            //     $filename = 'no-image.png';
            // }
            // 'user_id', 'location_lat'  , 'location_lng' , 'time' , 'date',  'type' ,  'status'  , 
            // $Attendance = new Attendance;
            // $Attendance->en_name = $request['en_name'];
            // $Attendance->ar_name = $request['ar_name'];
            // $Attendance->ar_name = $request['ar_name'];
            // $Attendance->ar_name = $request['ar_name'];
            // $Attendance->ar_name = $request['ar_name'];

            $Attendance->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE Attendance -------------\

     public function update(Request $request, $id)
     {
 
         $this->authorizeForUser($request->user('api'), 'update', Attendance::class);
 
         request()->validate([
             'ar_name' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $Attendance = Attendance::findOrFail($id);
             $currentImage = $Attendance->image;
 
             // dd($request->image);
             if ($currentImage && $request->image != $currentImage) {
                 $image = $request->file('image');
                 $path = public_path() . '/images/attendances';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/attendances/' . $filename));
 
                 $AttendanceImage = $path . '/' . $currentImage;
                 if (file_exists($AttendanceImage)) {
                     if ($currentImage != 'no-image.png') {
                         @unlink($AttendanceImage);
                     }
                 }
             } else if (!$currentImage && $request->image !='null'){
                 $image = $request->file('image');
                 $path = public_path() . '/images/attendances';
                 $filename = rand(11111111, 99999999) . $image->getClientOriginalName();
 
                 $image_resize = Image::make($image->getRealPath());
                 $image_resize->resize(200, 200);
                 $image_resize->save(public_path('/images/attendances/' . $filename));
             }
 
             else {
                 $filename = $currentImage?$currentImage:'no-image.png';
             }
 
             Attendance::whereId($id)->update([
                 'ar_name' => $request['ar_name'],
                 'description' => $request['en_name'],
                 'image' => $filename,
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete Attendance -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Attendance::class);

        Attendance::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', Attendance::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $attendance_id) {
            Attendance::whereId($attendance_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

