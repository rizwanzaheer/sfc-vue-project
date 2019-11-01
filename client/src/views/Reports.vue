<template>
  <!-- Start Content-->
  <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="card-box">
            <div class="dropdown float-right">
                <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                    <i class="mdi mdi-dots-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Another action</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Something else</a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item">Separated link</a>
                </div>
            </div>
            <h4 class="header-title mt-0 mb-3">Calls in the last 7 days</h4>
            <div class="text-center">
              <ul class="list-inline pt-2 pb-2">
                <li class="list-inline-item pr-2">
                  <h5 style="color: #85b1fb;"><i class="fa fa-circle mr-1"></i>Operator</h5>
                </li>
                <li class="list-inline-item pr-2">
                  <h5 style="color: #10c469;"><i class="fa fa-circle mr-1"></i>User</h5>
                </li>
                <li class="list-inline-item pr-2">
                  <h5 style="color: #ff5b5b;"><i class="fa fa-circle mr-1"></i>Missed</h5>
                </li>
                </ul>
              </div>
              <div id="sparkline1"></div>

          </div>
        </div> <!-- Col-lg-8 -->
        <div class="col-lg-4">
          <div class="card-box">
            <h4 class="header-title mb-2">Billing</h4>
            <div class="table-responsive">
                <table class="table table-striped table-sp color-dark mb-0">
                    <tbody>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Recharged this month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Spent this month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Package cost per month</td>
                    </tr>
                    <tr>
                        <td><span class="color-green">$0.00</span> - Average call cost</td>
                    </tr>
                    </tbody>
                </table>
              </div>
          </div>
        </div> <!-- Col-lg-4 -->
        </div> <!-- end row -->

          <div class="row">
            <div class="col-lg-8">
              <div class="card-box">
                <h4 class="header-title mt-0 mb-3">Statistics</h4>
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-operator">9.68s</div>
                    <p>Average answer time</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-user">11.12s</div>
                    <p>Average answer time</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-missed">3</div>
                    <p>Missed calls</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-today">18</div>
                    <p>Calls today</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-this-month">24</div>
                    <p>Calls this month</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-last-month">67</div>
                    <p>Calls last month</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-costs-this-month">655.00</div>
                    <p>Costs this month ($)</p>
                  </div>
                  <div class="statistics-item d-flex flex-column align-items-center">
                    <div class="circle mb-2 d-flex justify-content-center align-items-center" id="statistics-costs-last-month">3456.00</div>
                    <p>Costs last month ($)</p>
                  </div>
                </div>
              </div>
            </div> <!-- Col-lg-8 -->
              </div> <!-- end row -->


  </div> <!-- container-fluid -->
</template>

<script>
export default {
    data: () => ({

    }),
    methods: {

    }
}
</script>
