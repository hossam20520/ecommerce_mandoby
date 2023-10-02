<li>
    <div class="people-box">
        <div>
            <div class="people-image">
                <img src="{{ $item['Avatar']   }}"
                    class="img-fluid blur-up lazyload"
                    alt="">
            </div>
        </div>

        <div class="people-comment">
            <a class="name"
                href="javascript:void(0)">{{ $item['firstname']   }}</a>
            <div class="date-time">
                {{-- <h6 class="text-content">1 </h6> --}}

                <div class="product-rating">
                    <ul class="rating">



                        @for ($i = 0; $i < $item['rate']; $i++)
                        <li>
                            <i data-feather="star" class="fill"></i>
                        </li>
                        @endfor
                      
                        @for ($i = 0; $i < 5 - $item['rate']; $i++)
                        <li>
                            <i data-feather="star"></i>
                        </li>
                        @endfor


 
                    </ul>
                </div>
            </div>

            <div class="reply">
                <p> {{ $item['review']   }}
                </p>
            </div>
        </div>
    </div>
</li>