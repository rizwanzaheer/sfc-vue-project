<template>
  <div class="col-md-7 col-lg-8">
    <div id="credit-cards" class="card-box">
      <h4 class="header-title mb-2">Credit cards</h4>
      <div class="credit-cards row flex-wrap justify-content-md-center justify-content-lg-start">
        <div id="primary-card-container" class="credit-card-container">
          <a href="#">
            <div class="credit-card d-flex flex-column">
              <div class="float-right"/>
              <div class="m-auto">
                xxxx-xxxx-xxxx-4652
              </div>
              <img src="assets/images/credit-card-logo-visa.png">
            </div>
          </a>
          <p class="text-center h4 mt-3 mb-2">Primary card</p>
        </div> <!-- credit-card -->
        <div class="credit-card-container">
          <a href="#">
            <div class="credit-card d-flex flex-column">
              <div class="m-auto">
                xxxx-xxxx-xxxx-7891
              </div>
              <img src="assets/images/credit-card-logo-mastercard.png">
            </div>
          </a>
          <p class="text-center h4 mt-3 mb-2">Secondary card</p>
        </div> <!-- credit-card -->
        <div class="credit-card-container">
          <a href="#" @click.prevent="modalShow = true">
            <div class="add-new-card d-flex flex-column">
              <div class="m-auto">
                <i class="fas fa-plus"/>
                <p class="font-16">Add new card</p>
              </div>
            </div>
          </a>
        </div> <!-- credit-card -->
      </div> <!-- credit-cards-row -->
    </div> <!-- card-box -->
    <b-modal v-model="modalShow">Hello From Modal!</b-modal>
  </div> <!-- col-->
</template>

<script>
export default {
  name: 'CreditCards',
  props: {
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
  }
}
</script>
