<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Shop;
use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
class CategorieController extends BaseController
{

    //-------------- Get All Categories ---------------\\

    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', Category::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers();
        

        $shops = Shop::where('deleted_at', '=', null)->get(['id', 'ar_name' , 'en_name']);

     

        if( $helpers->IsMerchant()){

           $shop_id = $helpers->ShopID();
           
           $categories = Category::where('deleted_at', '=', null)->where('shop_id' ,  $shop_id)->where(function ($query) use ($request) {
            return $query->when($request->filled('search'), function ($query) use ($request) {
                return $query->where('name', 'LIKE', "%{$request->search}%")
                    ->orWhere('code', 'LIKE', "%{$request->search}%");
            });
        });

        }else{

            $categories = Category::where('deleted_at', '=', null)->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%");
                });
            });
        }


        $totalRows = $categories->count();
        $categories = $categories->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        return response()->json([
            'categories' => $categories,
            'shops' =>  $shops,
            'totalRows' => $totalRows,
        ]);
    }

    //-------------- Store New Category ---------------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', Category::class);

        request()->validate([
            'name' => 'required',
            'code' => 'required',
        ]);

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            // $image_resize->resize(200, 200);
            $image_resize->save(public_path('/images/category/' . $filename));

        } else {
            $filename = 'no-image.png';
        }

        $helpers = new helpers();
        $obj = $helpers->GetUserInfo();

        if( $obj['role'] == 2){

           $shop_id =  $obj['shop']->id;
        }else{
            $shop_id =  $request['shop_id'];
        } 

        
        Category::create([
            'main_section' => $request['main_section'],
            'code' => $request['code'],
            'shop_id' => $shop_id ,
            'name' => $request['name'],
            'en_name' => $request['en_name'],
            'image' =>  $filename,
        ]);
        return response()->json(['success' => true]);
    }

     //------------ function show -----------\\

    public function show($id){
        //
    
    }

    //-------------- Update Category ---------------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', Category::class);

        // request()->validate([
        //     'name' => 'required',
        //     'code' => 'required',
        // ]);
        $cate = Category::findOrFail($id);
    
        $currentImage = $cate->image;
 
        // dd($request->image);
        if ($currentImage && $request->image != $currentImage) {
            $image = $request->file('image');
            $path = public_path() . '/images/category';
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            // $image_resize->resize(200, 200);
            $image_resize->save(public_path('/images/category/' . $filename));

            $BrandImage = $path . '/' . $currentImage;
            if (file_exists($BrandImage)) {
                if ($currentImage != 'no-image.png') {
                    @unlink($BrandImage);
                }
            }
        } else if (!$currentImage && $request->image !='null'){
            $image = $request->file('image');
            $path = public_path() . '/images/category';
            $filename = rand(11111111, 99999999) . $image->getClientOriginalName();

            $image_resize = Image::make($image->getRealPath());
            // $image_resize->resize(200, 200);
            $image_resize->save(public_path('/images/category/' . $filename));
        }

        else {
            $filename = $currentImage?$currentImage:'no-image.png';
        }

        $helpers = new helpers();
        $obj = $helpers->GetUserInfo();

        if( $obj['role'] == 2){

           $shop_id =  $obj['shop']->id;

           
        Category::whereId($id)->where('shop_id' ,  $shop_id )->update([
            'code' => $request['code'],
            'name' => $request['name'],
            'en_name' => $request['en_name'],
            'image' => $filename,
            'main_section' => $request['main_section'],
        ]);
        

        }else{
            Category::whereId($id)->update([
                'code' => $request['code'],
                'name' => $request['name'],
                'en_name' => $request['en_name'],
                'image' => $filename,
                'main_section' => $request['main_section'],
            ]);
        }



        return response()->json(['success' => true]);

    }

    //-------------- Remove Category ---------------\\

    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Category::class);

        Category::whereId($id)->update([
            'deleted_at' => Carbon::now(),
        ]);
        return response()->json(['success' => true]);
    }

    //-------------- Delete by selection  ---------------\\

    public function delete_by_selection(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'delete', Category::class);
        $selectedIds = $request->selectedIds;

        foreach ($selectedIds as $category_id) {
            Category::whereId($category_id)->update([
                'deleted_at' => Carbon::now(),
            ]);
        }

        return response()->json(['success' => true]);
    }

}
