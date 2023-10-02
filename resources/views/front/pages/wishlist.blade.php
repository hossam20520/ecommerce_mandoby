
@extends('front.layout')

@section('content')



<section class="wishlist-section section-b-space">
    <div class="container-fluid-lg">
        <div class="row g-sm-3 g-2">


           @foreach ($fav as $item)
           @include('front.componenets.cards.product_wishlist_card')   
           @endforeach    
         

         
        </div>
    </div>
</section>


@endsection


@push('scripts')
 
{{-- <script src="{{ asset('js/front/vue/login.js') }}"></script> --}}
<script src="{{ asset('js/front/vue/cart_vue.js') }}"></script>
@endpush