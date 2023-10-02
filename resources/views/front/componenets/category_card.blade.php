<div>
    <div class="category-box-list">
        <a href="/shop?category={{ $item['id'] }}" class="category-name">
            <h4>{{ $item['name'] }}</h4>
            <h6>{{  $item['products_count'] }} {{ trans('lang.items') }} </h6>
        </a>
        <div class="category-box-view">
            <a href="/shop?category={{ $item['id'] }}">
                <img src="{{ $item['image'] }}"
                    class="img-fluid blur-up lazyload" alt="">
            </a>
            <button onclick="location.href = '/shop?category={{ $item['id'] }}';" class="btn shop-button">
                <span>{{ trans('lang.Shop_Now') }} </span>
                {{-- <i class="fas fa-angle-right"></i> --}}
            </button>
        </div>
    </div>
</div>