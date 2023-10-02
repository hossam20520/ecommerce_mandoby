<div class="profile-about dashboard-bg-box">
    <div class="row">
        <div class="col-xxl-7">
            <div class="dashboard-title mb-3">
                <h3>{{ trans('lang.Profile') }} </h3>
            </div>

            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>{{ trans('lang.Firstname') }} :</td>
                            <td>{{   \App\utils\helpers::UserInfoData()['firstname']   }}</td>


                        </tr>
                        <tr>
                            <td>{{ trans('lang.Lastname') }} :</td>
                            <td>{{   \App\utils\helpers::UserInfoData()['lastname']   }}</td>
                        </tr>
                        <tr>
                            <td>{{ trans('lang.phone') }}:</td>
                            <td>
                                <a href="javascript:void(0)"> {{   \App\utils\helpers::UserInfoData()['phone']   }}</a>
                            </td>
                        </tr>
                        {{-- <tr>
                            <td>Address :</td>
                            <td>549 Sulphur Springs Road, Downers, IL</td>
                        </tr> --}}
                    </tbody>
                </table>
            </div>

            <div class="dashboard-title mb-3">
                <h3>{{ trans('lang.LoginDetails') }}</h3>
            </div>

            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>{{ trans('lang.email') }} :</td>
                            <td>
                                <a href="javascript:void(0)">{{   \App\utils\helpers::UserInfoData()['email']   }}
                                    <span data-bs-toggle="modal"
                                        data-bs-target="#editProfile">{{ trans('lang.edit') }}</span></a>
                            </td>
                        </tr>
                        <tr>
                            <td>{{ trans('lang.password') }} :</td>
                            <td>
                                <a href="javascript:void(0)">●●●●●●
                                    <span data-bs-toggle="modal"
                                        data-bs-target="#editpassword">{{ trans('lang.edit') }}</span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-xxl-5">
            <div class="profile-image">
                <img src="../assets/images/inner-page/dashboard-profile.png"
                    class="img-fluid blur-up lazyload" alt="">
            </div>
        </div>
    </div>

</div>