<form action="{{ route('search' ) }}" method="GET">
 <div class="center-box">
    <div class="searchbar-box-2 input-group d-xl-flex d-none">
        <button class="btn search-icon" type="button">
            <i class="iconly-Search icli"></i>
        </button>
        <input name="search" type="text" class="form-control"
            placeholder="{{ trans('lang.searchplace') }}">
        <button class="btn search-button" type="submit">{{ trans('lang.Search') }}</button>
    </div>
</div>

</form>