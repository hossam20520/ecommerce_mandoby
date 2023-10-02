 
@extends('front.layout')

@section('content')

<section class="contact-box-section">
    <div class="container-fluid-lg">
        <div class="row g-lg-5 g-3">
            <div class="col-lg-6">
                <div class="left-sidebar-box">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="contact-image">
                                <img src="{{ asset('css/assets/images/inner-page/contact-us.png') }}"
                                    class="img-fluid blur-up lazyloaded" alt="">
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <div class="contact-title">
                                <h3>{{ trans('lang.GetInTouch') }}</h3>
                            </div>

                            <div class="contact-detail">
                                <div class="row g-4">
                                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                                        <div class="contact-detail-box">
                                            <div class="contact-icon">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                            <div class="contact-detail-title">
                                                <h4>{{ trans('lang.phone') }}</h4>
                                            </div>

                                            <div class="contact-detail-contain">
                                                <p>(+1) 618 190 496</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                                        <div class="contact-detail-box">
                                            <div class="contact-icon">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>
                                            <div class="contact-detail-title">
                                                <h4>{{ trans('lang.email') }}</h4>
                                            </div>

                                            <div class="contact-detail-contain">
                                                <p>support@dhofar.online</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                                        <div class="contact-detail-box">
                                            <div class="contact-icon">
                                                <i class="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div class="contact-detail-title">
                                                <h4>Oman Office</h4>
                                            </div>

                                            <div class="contact-detail-contain">
                                                <p>Cruce Casa de Postas 29</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xxl-6 col-lg-12 col-sm-6">
                                        <div class="contact-detail-box">
                                            <div class="contact-icon">
                                                <i class="fa-solid fa-building"></i>
                                            </div>
                                            <div class="contact-detail-title">
                                                <h4>Bournemouth Office</h4>
                                            </div>

                                            <div class="contact-detail-contain">
                                                <p>Visitación de la Encina 22</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="title d-xxl-none d-block">
                    <h2>Contact Us</h2>
                </div>
                <div class="right-sidebar-box">
                    <div class="row">
                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                            <div class="mb-md-4 mb-3 custom-form">
                                <label for="exampleFormControlInput" class="form-label">{{ trans('lang.Firstname') }}  </label>
                                <div class="custom-input">
                                    <input type="text" class="form-control" id="exampleFormControlInput"
                                        placeholder="{{ trans('lang.Firstname') }} ">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                            <div class="mb-md-4 mb-3 custom-form">
                                <label for="exampleFormControlInput1" class="form-label">{{ trans('lang.Lastname') }} </label>
                                <div class="custom-input">
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="{{ trans('lang.Lastname') }}">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                            <div class="mb-md-4 mb-3 custom-form">
                                <label for="exampleFormControlInput2" class="form-label">{{ trans('lang.email') }}  </label>
                                <div class="custom-input">
                                    <input type="email" class="form-control" id="exampleFormControlInput2"
                                        placeholder="{{ trans('lang.email') }}">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-6 col-lg-12 col-sm-6">
                            <div class="mb-md-4 mb-3 custom-form">
                                <label for="exampleFormControlInput3" class="form-label">{{ trans('lang.phone') }} </label>
                                <div class="custom-input">
                                    <input type="tel" class="form-control" id="exampleFormControlInput3"
                                        placeholder="{{ trans('lang.phone') }}" maxlength="10" oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                        this.value.slice(0, this.maxLength);">
                                    <i class="fa-solid fa-mobile-screen-button"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mb-md-4 mb-3 custom-form">
                                <label for="exampleFormControlTextarea" class="form-label">{{ trans('lang.Message') }} </label>
                                <div class="custom-textarea">
                                    <textarea class="form-control" id="exampleFormControlTextarea"
                                        placeholder="{{ trans('lang.Message') }}" rows="6"></textarea>
                                    <i class="fa-solid fa-message"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-animation btn-md fw-bold ms-auto">{{ trans('lang.Send') }}  </button>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Contact Box Section End -->

<!-- Map Section Start -->
<section class="map-section">
    <div class="container-fluid p-0">
        <div class="map-box">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2994.3803116994895!2d55.29773782339708!3d25.222534631321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!3m2!1d25.2048493!2d55.2707828!4m0!5e1!3m2!1sen!2sin!4v1652217109535!5m2!1sen!2sin"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>



@endsection

@push('scripts')
 
<script src="{{ asset('js/front/vue/cart.js') }}"></script>

@endpush