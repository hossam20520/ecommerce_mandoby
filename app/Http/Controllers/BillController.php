<?php
namespace App\Http\Controllers;

use App\Models\Shop;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use App\Models\User;


class BillController extends Controller
{

    //------------ GET ALL Abouts -----------\



    public function GetBill(Request $request){

 
 
    //   return 556;

  


            // How many items do you want to display.
            $perPage = $request->limit;
            $pageStart = \Request::get('page', 1);
            // Start displaying items from this number;
            $offSet = ($pageStart * $perPage) - $perPage;
            $order = $request->SortField;
            $dir = $request->SortType;
            $helpers = new helpers();
    
            $shops = Shop::with('vendor')->where('deleted_at', '=', null)->where(function ($query) use ($request) {
                    return $query->when($request->filled('search'), function ($query) use ($request) {
                        return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                            ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                    });
                });
            $totalRows = $shops->count();
            $shops = $shops->offset($offSet)
                ->limit($perPage)
                ->orderBy($order, $dir)
                ->get();
    
            return response()->json([
                'shops' =>  $shops,
                'totalRows' => $totalRows,
            ]);




    }
    public function index(Request $request)
    {
 
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();

        $abouts = About::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('ar_name', 'LIKE', "%{$request->search}%")
                        ->orWhere('en_name', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $abouts->count();
        $abouts = $abouts->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'abouts' => $abouts,
            'totalRows' => $totalRows,
        ]);

    }

    //---------------- STORE NEW About -------------\

    public function store(Request $request)
    {
      

        request()->validate([
            'ar_name' => 'required',
        ]);

        \DB::transaction(function () use ($request) {

            if ($request->hasFile('image')) {

                $image = $request->file('image');
                $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

                $image_resize = Image::make($image->getRealPath());
                $image_resize->resize(200, 200);
                $image_resize->save(public_path('/images/abouts/' . $filename));

            } else {
                $filename = 'no-image.png';
            }

            $About = new About;

            $About->en_name = $request['en_name'];
            $About->ar_name = $request['ar_name'];
            $About->image = $filename;
            $About->save();

        }, 10);

        return response()->json(['success' => true]);

    }

     //------------ function show -----------\

     public function show($id){
        //
    
    }

     //---------------- UPDATE About -------------\

     public function update(Request $request, $id)
     {
 
       
 
         request()->validate([
             'ar_about' => 'required',
         ]);
         \DB::transaction(function () use ($request, $id) {
             $About = About::findOrFail($id);
 
 
             About::whereId($id)->update([
                 'ar_about' => $request['ar_about'],
                 'en_about' => $request['en_about'],
                 'en_terms' => $request['en_terms'],
                 'ar_terms' => $request['ar_terms'],
                
             ]);
 
         }, 10);
 
         return response()->json(['success' => true]);
     }

    //------------ Delete About -----------\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', About::class);

        About::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\

    public function delete_by_selection(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'delete', About::class);

        $selectedIds = $request->selectedIds;
        foreach ($selectedIds as $about_id) {
            About::whereId($about_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }
        return response()->json(['success' => true]);

    }

}

