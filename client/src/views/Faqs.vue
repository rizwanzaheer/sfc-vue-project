<template>
  <!-- Start Content-->
  <div class="container-fluid">
    <div class="row">
        <div class="col-xl-4">
          <button class="btn btn-success waves-effect waves-light mb-3" data-toggle="modal" data-target=".add-faq" data-backdrop="static" data-keyboard="false"><i class="fas fa-plus mr-2"></i>Add new questions</button>
        </div><!-- end col -->
    </div>
    <!-- end row -->

      <div class="row">
          <div class="col-lg-12">
            <div class="card-box">
              <h4 class="header-title mb-2">FAQs</h4>
              <div class="table-responsive">
                  <table class="table table-striped table-links mb-0">
                      <tbody>
                          <tr>
                              <td><a href="#">How long is the free trial?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">What are the package costs?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">Are there any additional charges?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">Where can I get more information?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">Are operators/receptionists local?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">How do I get intergrated with my other cloud based applications?</a></td>
                          </tr>
                          <tr>
                              <td><a href="#">What is a trial phone number?</a></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
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
