<template>
  <!-- Start Content-->
  <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card-box" id="call-types">
            <div class="row">
            <div class="col-lg-4">
              <button id="create-type" class="btn btn-success btn-xs waves-effect waves-light float-right" data-toggle="modal" data-target=".add-new-type" data-backdrop="static" data-keyboard="false"> <i class="fas fa-plus"></i> <span class="ml-1">Create new call type</span> </button>
              <h4 class="header-title mt-0 mb-3">Call history</h4>
              <hr>
                
              <div class="treeview-animated w-100">
                <ul id="call-type-list" class="treeview-animated-list mb-3">
                  <li class="treeview-animated-items">
                    <a class="closed">
                      <i class="fas fa-caret-right mr-1 color"></i>
                      <span>New sales enquiry</span>
                    </a>
                    <ul class="nested">
                      <li class="treeview-animated-element"><span class="call-rule">Virtual reception services</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">Can you help me sing up for a paid account?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How much are your plans and packages?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How can I get a free trial of the service?</span></li>
                    </ul>
                  </li>
                  <li class="treeview-animated-items">
                    <a class="closed">
                      <i class="fas fa-caret-right mr-1 color"></i>
                      <span>Accounts payable/Receivable</span>
                    </a>
                    <ul class="nested">
                      <li class="treeview-animated-element"><span class="call-rule">How to update my credit card details?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">There is a mistake or issue with my account or invoice, can you help?</span></li>
                    </ul>
                  </li>
                  <li class="treeview-animated-items">
                    <a class="closed">
                      <i class="fas fa-caret-right mr-1 test"></i>
                      <span>Existing clients</span>
                    </a>
                    <ul class="nested">
                      <li class="treeview-animated-element"><span class="call-rule">Can I speak to my account manager?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How do I update my call instructions?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How do I fix an issue with my account?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">Integrations and features</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">Technical support issues</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">Update account details</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How do I make a complaint?</span></li>
                      <li class="treeview-animated-element"><span class="call-rule">How do I close my account?</span></li>
                    </ul>
                  </li>
                  <li class="treeview-animated-items">
                    <a class="closed">
                      <i class="fas fa-caret-right mr-1 color-green"></i>
                      <span>Telemarketing/Cold calls</span>
                    </a>
                    <ul class="nested">
                      <li class="treeview-animated-element"><span class="call-rule">Can I speak to the owner of the business?</span></li>
                      </ul>
                    </li>
                    <li class="treeview-animated-items">
                      <a class="closed">
                        <i class="fas fa-caret-right mr-1 color"></i>
                        <span>Employment enquiries</span>
                      </a>
                      <ul class="nested">
                        <li class="treeview-animated-element"><span class="call-rule">Can I verify someone's employment?</span></li>
                        <li class="treeview-animated-element"><span class="call-rule">How can I apply for a job?</span></li>
                      </ul>
                    </li>
                  </ul> <!-- treeview animated -->
                </div>
            </div> <!-- col-lg-4 -->
            <div class="col-lg-8">
              <hr class="pt-3">
              <div class="rule-item">
                <h5 class="float-left">Your caller is likely to say...</h5>
                <div class="box-icons">
                  <div class="box-icon">
                  <i class="fa fa-plus"></i></div>
                </div>
              <input type="text" id="rule" name="rule" class="form-control form-control-sm" value="Can you help me sing up for a paid account?">
            </div>
            <div class="row">
              <div class="rule-item col-lg-12 mt-2">
                <h5 class="float-left">Assigned users</h5>
                <div class="box-icons">
                <div class="box-icon mr-2"><i class="fas fa-share-alt-square"></i></div><div class="box-icon mr-2"><i class="fas fa-microphone-slash"></i></div><div class="box-icon"><i class="fas fa-list"></i></div></div></div>
              </div>
              <div id="assign-users">
                <div class="assign-user d-inline-block">
                  <div id="test" class="float-right delete-user-btn"><i class="fas fa-trash"></i></div>
                  <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"><span>Transfer online</span> </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn"><i class="fas fa-trash"></i></div>
                  <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button class="btn btn-success btn-xs btn-block waves-effect waves-light transfer transfer-enabled"><span>Transfer online</span> </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn"><i class="fas fa-trash"></i></div>
                  <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"><span>Transfer online</span> </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn"><i class="fas fa-trash"></i></div>
                  <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button class="btn btn-success btn-xs btn-block waves-effect waves-light transfer transfer-enabled"><span>Transfer online</span> </button>
                </div>

                <div class="assign-user">
                  <div class="float-right delete-user-btn"><i class="fas fa-trash"></i></div>
                  <img src="assets/images/users/user-2.jpg" class="contact-image img-center text-center d-block rounded-circle avatar-md" alt="profile-image">
                  <div class="contact-name text-center">
                    <h5>Stephen Meritt</h5>
                  </div>
                  <button class="btn btn-success btn-xs btn-block waves-effect waves-light transfer-enabled"><span>Transfer online</span> </button>
                </div>

                <a href="#" class="assign-user add-user">
                <div class="d-flex flex-column h-100">
                  <div class="m-auto">
                    <i class="fas fa-plus"></i>
                    <p class="font-16">Assign new user</p>
                  </div>
                </div>
                </a>

              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="rule-item d-flex flex-column">
                    <h5 class="float-left">Calendar Management</h5>
                    <button type="button" class="google-button form-control form-control-sm"><img class="google-logo" src="assets/images/google-logo.png"><span class="google-button__text">Sign in with Google</span></button>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="rule-item">
                  <h5 class="float-left">FAQs</h5>
                  <select class="select2 select2-multiple form-control form-control-sm" id="faq-select" multiple="multiple" data-placeholder="Choose ...">
                          <option value="faq1">How long is the free trial?</option>
                          <option>What are the package costs?</option>
                          <option>Are there any additional charges?</option>
                          <option>Where can I get more information?</option>
                          <option>Are operators/receptionsts local?</option>
                          <option>How do I get intergrated with my other cloud based applications?</option>
                          <option>What is a trial phone number?</option>
                  </select>
              </div>
            </div><!-- col-lg-6-->

          </div><!-- row-->
          <div class="row">
            <div class="col-lg-6">
              <div class="rule-item">
                <h5 class="float-left">Zapier integration</h5>
                <select class="form-control form-control-sm">
                  <option value="none">None</option>
                  <option disabled="disabled">Events (Option not enabled when calendar is connected)</option>
                </select>
              </div>
            </div><!-- col-lg-6-->

            <div class="col-lg-6">
              <div class="rule-item">
                <h5 class="float-left">Payments integration</h5>
                <input type="text" id="payments-integration" name="payments-integration" class="form-control form-control-sm" placeholder="Enter your payment form url here">
              </div>
            </div><!-- col-lg-6-->
            </div><!-- row-->
            <div class="row">
              <div class="col-lg-6">
                <div class="rule-item">
                  <h5>Form data</h5>
                  <div id="custom-form">
                    <div id="custom-form-header">
                      <h5 class="ml-1 float-left">Custom form</h5>
                      <div class="custom-form-button float-right">
                        <i class="fa fa-plus tltp mt-2 mr-2" id="add-custom-field-btn" data-tippy-content="Add field" data-toggle="modal" data-target=".add-new-field" data-backdrop="static" data-keyboard="false"></i>
                      </div>
                    </div>
                    <div id="custom-form-body">
                    <div class="row">
                      <div class="col-12 col-sm-6 col-lg-12 col-xl-6">
                        <div class="field">
                        <div class="label">Name<span class="label-additional">(Default)</span></div>
                        <input type="text" class="form-control form-control-sm">
                      </div>
                    </div>
                      <div class="col-12 col-sm-6 col-lg-12 col-xl-6">
                        <div class="field">
                        <div class="label">Phone<span class="label-additional">(Default)</span></div>
                        <input type="tel" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="field">
                      <div class="label">Message<span class="label-additional">(Default)</span></div>
                      <textarea type="textarea" style="height: 75px;" class="form-control form-control-sm"> </textarea>
                    </div>
                  </div>
                </div>

                  </div>
                  </div>
                  </div>
                  <!-- col-lg-6-->
              </div><!-- col-lg-6-->

              <div class="col-lg-6">
                <div class="rule-item">
                  <h5>Call taker instructions</h5>
                  <!-- <div id="snow-editor"> -->
                  <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
                  <!-- </div> -->
                   <!-- end Snow-editor-->
                  
                </div>
              </div><!-- col-lg-6-->
              </div><!-- row-->
            </div> <!-- col-lg-8 -->
            </div> <!-- end row -->
          </div>
        </div>
      </div> <!-- end row -->

 

  </div> <!-- container-fluid -->
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
    data: () => ({
      content: "",
        customToolbar: [["bold", "italic", "underline","strike"], [{ list: "ordered" },{ list: "bullet" }, {indent:"-1"},{indent:"+1"}], ["image", "code-block"]],
      // content: {
      //       ops: [],
      //   },
      config: {
          readOnly: true,
          placeholder: 'Compose an epic...',
      },

    }),
    methods: {
      onEditorBlur(quill) {
        console.log("editor blur!", quill);
      },

      onEditorFocus(quill) {
        console.log("editor focus!", quill);
      },

      onSelectionChange(range) {
        console.log("selection change!", range);
      }
    }
}
</script>
