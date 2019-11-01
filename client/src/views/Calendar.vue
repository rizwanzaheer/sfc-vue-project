<template>
<div class="row">
  <div class="col-lg-12">
    <div class="row">
      <div class="col-lg-2">
        <div class="widget">
          <div class="widget-body">
            <a href="#" data-toggle="modal" data-target="#add-category" class="btn btn-lg btn-success font-16 btn-block waves-effect waves-light">
              <i class="fa fa-plus mr-1"/> Create New
            </a>
            <div id="external-events" class="mt-3">
              <p>Drag and drop your event or click in the calendar</p>
            </div>
            <!-- checkbox -->
            <div class="custom-control custom-checkbox mt-3">
              <input id="drop-remove" type="checkbox" class="custom-control-input">
              <label class="custom-control-label" for="drop-remove">Remove after drop</label>
            </div>
          </div>
        </div>
      </div> <!-- end col-->
      <div class="col-lg-10">
        <div class="card-box">
          <div id="calendar"/>
        </div>
      </div> <!-- end col -->
    </div>  <!-- end row -->

    <!-- BEGIN MODAL -->
    <div id="event-modal" class="modal fade none-border">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title mt-0"><strong>Add New Event</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
            <div class="modal-body"/>
            <div class="modal-footer">
              <button type="button" class="btn btn-light waves-effect" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success save-event waves-effect waves-light">Create event</button>
              <button type="button" class="btn btn-danger delete-event waves-effect waves-light" data-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
    </div>

    <!-- Modal Add Category -->
    <div id="add-category" class="modal fade none-border">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title mt-0"><strong>Add a category </strong></h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="row">
                <div class="col-md-6">
                  <label class="control-label">Category Name</label>
                  <input class="form-control form-white" placeholder="Enter name" type="text" name="category-name">
                </div>
                <div class="col-md-6">
                  <label class="control-label">Choose Category Color</label>
                  <select class="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                    <option value="success">Success</option>
                    <option value="danger">Danger</option>
                    <option value="info">Info</option>
                    <option value="pink">Pink</option>
                    <option value="primary">Primary</option>
                    <option value="warning">Warning</option>
                    <option value="inverse">Inverse</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary waves-effect waves-light save-category" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  <!-- END MODAL -->
  </div>
    <!-- end col-12 -->
</div> <!-- end row -->
</template>

<script>
export default {
    data: () => ({
        password: '',
        email: '',
        errorMsg: ''
    }),
    methods: {
        login () {
            const {
                email,
                password
            } = this
            let that = this
            this.$store.dispatch('auth/login', { email, password })
                   .then(() => {
                     that.$router.push('/dashboard')
                   })
                   .catch(err => console.log(err))
        },
        handleSignup (event) {
          this.$router.push('/signup')
        }
    }
}
</script>
