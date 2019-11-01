<template>
  <!-- Start Content-->
  <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
            <div class="card-box">
                <ChoosePlan />
                  <h4 class="header-title mb-2 mt-3 pb-2">Payment details</h4>
                  <div class="row">
                  <div class="col-lg-9">
                    <div class="credit-cards row flex-wrap">
                      <div class="credit-card">
                        <a data-toggle="modal" href=".add-cc" data-backdrop="static" data-keyboard="false">
                          <div class="add-new-card d-flex flex-column">
                            <div class="m-auto">
                              <i class="fas fa-plus"/>
                              <p class="font-16">Add new card</p>
                            </div>
                          </div>
                        </a>
                        <h5 class="text-center mb-2">Primary card</h5>
                      </div> <!-- credit-card -->
                    </div> <!-- credit-cards-row -->
                  </div>
                  <div class="col-lg-3 pt-4 pt-lg-0">
                    <p>The initial charge*:</p>
                      <p id="initial-charge" class="text-center amount">$111.83</p>
                      <button id="proceed-btn" type="button" class="btn btn-success waves-effect btn-block waves-light mb-2">Proceed</button>
                      <p class="text-sm">*Includes a credit balance of $50 and CC fees</p>
                </div>
                </div>
            </div>
          </div>
        </div> <!-- end row -->
  </div> <!-- container-fluid -->
</template>

<script>
import ChoosePlan from '../components/Plans/ChoosePlan'
export default {
    components: {
      ChoosePlan
    },
    data: () => ({

    }),
    methods: {

    }
}
</script>
