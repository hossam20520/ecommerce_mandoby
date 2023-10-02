@extends('front.base.layout')

@section('content')
<div id="app">

	<section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>@{{ $t('productDetail') }}</h1>
	 
				</div>
			</div>
		</div>
	</section>
	<!-- End Banner Area -->

	
	<!--================Single Product Area =================-->
	<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
 
					<div class="s_Product_carousel">
 
						<div v-for="item in product.images"  class="single-prd-item">
							<img class="img-fluid" :src="productImage + item " alt="">
						</div>
  
					</div>
 
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						<h3> @{{ product.name }}</h3>
						<h2> @{{ product.symbol }} @{{ product.price }}</h2>
						<ul class="list">
							<li><a class="active" href="#"><span>Category</span> :  @{{ product.category }}</a></li>
							<li>
                                <a href="#" v-if="product.qty > 0" ><span>Availibility</span> : In Stock</a>  
                            
                                <a href="#" v-else ><span>Availibility</span> : Out Stock</a>
                            </li>
	 
                        </ul>
						<p v-if="local == 'ar'"> @{{ product.ar_description }}</p>
                        {{-- <p v-else> @{{ product.en_description }}</p> --}}

						<div class="product_count">
							<label for="qty">@{{ $t('Quantity') }}:</label>
							<input type="text" name="qty" id="sst" maxlength="12" :value="qty" title="Quantity:" class="input-text qty">
							<button  v-on:click="increase" 
							 class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
							<button   v-on:click="decrese" 
							 class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
						</div>
						<div class="card_area d-flex align-items-center">
							<a class="primary-btn"  style="color: #F2BE22 "  v-on:click="addToCart(product.id,qty)" >@{{ $t('AddtoCart') }}</a>
							<a class="icon_btn" style="background-color:rgb(242, 190, 34)"  :href="'/profile?vendor='+product.user_id"><img  width="20px" src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"></a>
						 
							<a class="icon_btn" style="color: #F2BE22 "  v-on:click="AddToWishlist(product.id)"     ><i class="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--================End Single Product Area =================-->



 	<!--================Product Description Area =================-->
     <section class="product_description_area">
		<div class="container">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">@{{ $t('Description') }}</a>
				</li>
	 
	 
				<li class="nav-item">
					<a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">@{{ $t('Reviews') }}</a>
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					
                    
                    
                    <p v-if="local ==  'ar' "> @{{ product.ar_description }} </p>
					<p v-if="local ==  'en' "> @{{ product.en_description }} </p>
                    {{-- <p v-else> @{{ product.en_description }} </p> --}}
				
                
                
                    </div>
	 
		 
				<div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div class="row">
						<div class="col-lg-6">
							<div class="row total_rate">
								<div class="col-6">
									<div class="box_total">
										<h5>@{{ $t('Overall') }}</h5>
								 
										{{-- <h6>(03 Reviews)</h6> --}}
									</div>
								</div>
								<div class="col-6">
									<div class="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul class="list">
											<li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
											<li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
													 class="fa fa-star"></i><i class="fa fa-star"></i> 01</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div class="review_list">



								<div v-for="item in reviews" class="review_item">
									<div class="media">
										<div class="d-flex">
											<img src="img/product/review-1.png" alt="">
										</div>
										<div class="media-body">
											<h4> @{{ item.user.firstname }}  @{{ item.user.lastname }}</h4>
											
                                            {{-- <i  v-for="index in item.count" :key="index" class="fa fa-star"></i> --}}
                                            <span v-for="index in parseInt(item.count)" :key="index">
                                                <i class="fa fa-star"></i>
                                              </span>
                                            
										</div>
									</div>
									<p>@{{ item.review }}</p>
								</div>




				
                                
						
                                


							</div>
						</div>
						<div class="col-lg-6">
							<div class="review_box">
								<h4>@{{ $t('AddaReview') }}</h4>
								<p>Your Rating:</p>
								<ul class="list">
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
									<li><a href="#"><i class="fa fa-star"></i></a></li>
								</ul>
								<p>Outstanding</p>
								<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div class="col-md-12">
										<div class="form-group">


                                            <select class="form-control" v-model="rate"  >
                                                <option value="0" > Enter Rate</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        
                                        </div>
									</div>
								 
							 
									<div class="col-md-12">
										<div class="form-group">
											<textarea class="form-control" v-model="review" name="message" id="message" rows="1" placeholder="Review" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea></textarea>
										</div>
									</div>
									<div class="col-md-12 text-right">
										<button type="button" value="submit" v-on:click="SubmitReview" style="background-color: #0B2B40; color:#F2BE22" class="primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--================End Product Description Area =================-->

	<!-- Start related-product Area -->
 
	<!-- End related-product Area -->
 
</div> 
 @endsection


 


@push('scripts')
<script src="{{ asset('js/front/vue/product.js') }}"></script>
@endpush
