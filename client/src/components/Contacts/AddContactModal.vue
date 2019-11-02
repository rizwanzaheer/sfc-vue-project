<template>
  <div
    class="modal fade add-new-contact"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Add-new-contact"
    aria-hidden="true"
    style="display: none;"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="Add-new-contact">Add a new contact</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" role="form">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="name">Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Enter contact's name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="telephone">Number</label>
              <div class="col-sm-10">
                <input
                  type="tel"
                  id="telephone"
                  class="form-control"
                  placeholder="Enter contact's phone number"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="email">Email</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Enter contact's email address"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="company">Company</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="company"
                  class="form-control"
                  placeholder="Enter contact's company name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="type">Type</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="type"
                  class="form-control"
                  placeholder="Enter contact's type"
                />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label" for="simpleinput">Contact image</label>
              <div class="col-sm-12">
                <input type="file" class="dropify" />
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddContactModal"
};
</script>