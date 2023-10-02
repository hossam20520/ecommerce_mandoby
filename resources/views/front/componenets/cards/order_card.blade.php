<div class="order-box dashboard-bg-box">
    <div class="order-container">
        <div class="order-icon">
            <i data-feather="box"></i>
        </div>

        <div class="order-detail">
            <h4>Delivere <span>{{ $item['order']['status']  }}</span></h4>
            <h6 class="text-content">{{$item['order']['ref']  }}</h6>
        </div>
    </div>

    {{-- @include('front.componenets.cards.Order_card_product')    --}}


    
</div>