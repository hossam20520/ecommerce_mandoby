
@extends('front.layout')

@section('content')

<section class="section-b-space shop-section">
    <div class="container-fluid-lg">
        <div class="row">
            <div class="col-12">
                <div class="show-button">
                    <div class="top-filter-menu-2">
                        <div class="sidebar-filter-menu" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample">
                            <a href="javascript:void(0)"><i class="fa-solid fa-filter"></i> Filter Menu</a>
                        </div>

                        {{-- <div class="ms-auto d-flex align-items-center">
                            <div class="category-dropdown me-md-3">
                                <h5 class="text-content">Sort By :</h5>
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown">
                                        <span>Most Popular</span> <i class="fa-solid fa-angle-down"></i>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a class="dropdown-item" id="pop"
                                                href="javascript:void(0)">Popularity</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="low" href="javascript:void(0)">Low - High
                                                Price</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="high" href="javascript:void(0)">High - Low
                                                Price</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="rating" href="javascript:void(0)">Average
                                                Rating</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="aToz" href="javascript:void(0)">A - Z
                                                Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="zToa" href="javascript:void(0)">Z - A
                                                Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" id="off" href="javascript:void(0)">% Off -
                                                Hight To
                                                Low</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="grid-option grid-option-2">
                                <ul>
                                    <li class="three-grid">
                                        <a href="javascript:void(0)">
                                            <img src="{{ asset('css/assets/svg/grid-3.svg') }}" class="blur-up lazyload" alt="">
                                        </a>
                                    </li>
                                    <li class="grid-btn five-grid d-xxl-inline-block d-none">
                                        <a href="javascript:void(0)">
                                            <img src="{{ asset('css/assets/svg/grid-4.svg') }}"
                                                class="blur-up lazyload d-lg-inline-block d-none" alt="">
                                        </a>
                                    </li>
                                    <li class="five-grid d-xxl-inline-block d-none active">
                                        <a href="javascript:void(0)">
                                            <img src="{{ asset('css/assets/svg/grid-5.svg') }}"
                                                class="blur-up lazyload d-lg-inline-block d-none" alt="">
                                        </a>
                                    </li>
                                    <li class="list-btn">
                                        <a href="javascript:void(0)">
                                            <img src="{{ asset('css/assets/svg/list.svg') }}" class="blur-up lazyload" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> --}}





                        
                    </div>
                </div>

                <div class="top-filter-category" id="collapseExample">
                    <form  method="GET"  action="{{ route('shop') }}">
                    <div class="row g-sm-4 g-3">
              

                        <div class="col-xl-3 col-md-6">
                            <div class="category-title">
                                <h3>Price</h3>
                            </div>
                            <div class="range-slider">
                                <input type="text" name="from" class="js-range-slider" value="">
                            </div>

                            <button class="btn btn-animation w-100 justify-content-center"   type="submit"> Filter</button>

                        </div>

           

                        <div class="col-xl-3 col-md-6">
                            <div class="category-title">
                                <h3>Category</h3>
                            </div>
                            <ul class="category-list custom-padding custom-height">


                                @foreach ($categories as $item)
                                <li>
                                    <div class="form-check ps-0 m-0 category-list-box">
                                        <input class="checkbox_animated"  name="category" value="{{   $item['id'] }}" type="checkbox" id="flexCheckDefault5">
                                        <label class="form-check-label" for="flexCheckDefault5">
                                            <span class="name"> {{   $item['title'] }} </span>
                                            {{-- <span class="number">(15)</span> --}}
                                        </label>
                                    </div>
                                </li>    
                                @endforeach
                           
 
                                 
                            </ul>
                        </div>
                    </div>

                    </form>
                </div>




                <div
                    class="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                       @foreach ($shop as $item)
                       @include('front.componenets.cards.product_card_shop')   
                       @endforeach
                  
          
                </div>

                <nav class="custome-pagination">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                                <i class="fa-solid fa-angles-left"></i>
                            </a>
                        </li>

                       @for ($i = 1; $i < $pages + 1;   $i++)
                       <li class="page-item active">
                        <a class="page-link" href="shop?page={{   $i }}" >{{ $i }}</a>
                          </li> 
                       @endfor
                   
                  
                     
                       
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0)">
                                <i class="fa-solid fa-angles-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</section>


@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/shop.js') }}"></script>

@endpush