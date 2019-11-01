<template>
  <div id="latest-calls" class="card-box">
    <h4 class="header-title mt-0 mb-3">Latest calls</h4>
    <div class="call-item clearfix">
      <ul class="list-unstyled list-inline mb-0 float-md-left">
        <li class="list-inline-item pt-2"><img src="assets/images/users/user-3.jpg" class="rounded-circle avatar-sm" alt="profile-image"></li>
        <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">Nick Cave</span> - <span class="color-light-blue">Support Call</span><br><span class="color-grey">+61 1900 654 321</span></li>
      </ul>
      <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
        <li class="list-inline-item caller-timestamp pb-2">01:15 PM</li>
        <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-green"><i class="fas fas fa-phone"/><div class="indicator"/></li>
      </ul>
    </div><!-- call-item -->
    <div class="call-item clearfix">
      <ul class="list-unstyled list-inline mb-0 float-md-left">
        <li class="list-inline-item pt-2"><img src="assets/images/users/user-4.jpg" class="rounded-circle avatar-sm" alt="profile-image"></li>
        <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">Leonard Cohen</span> - <span class="color-light-blue">Support Call</span><br><span class="color-grey">+1 613 555 0181</span></li>
      </ul>
      <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
        <li class="list-inline-item caller-timestamp pb-2">11:23 PM</li>
        <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-green"><i class="fas fas fa-phone"/><div class="indicator-none"/></li>
      </ul>
    </div><!-- call-item -->

    <div class="call-item clearfix">
      <ul class="list-unstyled list-inline mb-0 float-md-left">
        <li class="list-inline-item pt-2"><img src="assets/images/users/user-5.jpg" class="rounded-circle avatar-sm" alt="profile-image"></li>
        <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">Michelle Gurevich</span> - <span class="color-light-blue">Caller wanting a free trial</span><br><span class="color-grey">+1 623 731 2618</span></li>
      </ul>
      <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
        <li class="list-inline-item caller-timestamp pb-2">08:43 PM</li>
        <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator-none"/></li>
        <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator-none"/></li>
        <li class="list-inline-item action-icon color-green"><i class="fas fas fa-phone"/><div class="indicator-none"/></li>
      </ul>
    </div><!-- call-item -->

    <p>Yesterday</p>

    <div class="call-item clearfix">
      <ul class="list-unstyled list-inline mb-0 float-md-left">
        <li class="list-inline-item pt-2"><img src="assets/images/users/user-2.jpg" class="rounded-circle avatar-sm" alt="profile-image"></li>
        <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">Stephen Merrit</span> - <span class="color-light-blue">Payment</span><br><span class="color-grey">+1 202 555 0128</span></li>
      </ul>
      <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
        <li class="list-inline-item caller-timestamp pb-2">08:24 PM</li>
        <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator-none"/></li>
        <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-green"><i class="fas fas fa-phone"/><div class="indicator"/></li>
      </ul>
    </div><!-- call-item -->
    <div class="call-item clearfix">
      <ul class="list-unstyled list-inline mb-0 float-md-left">
        <li class="list-inline-item pt-2"><img src="assets/images/users/unknown.png" class="rounded-circle avatar-sm" alt="profile-image"></li>
        <li class="list-inline-item caller-info"><span class="font-weight-bold color-dark">Joshua Tillman</span> - <span class="color-light-blue">Sales call</span><br><span class="color-grey">+1 315 545 0036</span></li>
      </ul>
      <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right">
        <li class="list-inline-item caller-timestamp pb-2">05:36 PM</li>
        <li class="list-inline-item action-icon color-light-blue"><i class="fas fa-calendar-alt"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-blue"><i class="fas fa-tasks"/><div class="indicator"/></li>
        <li class="list-inline-item action-icon color-green"><i class="fas fas fa-phone"/><div class="indicator-none"/></li>
      </ul>
    </div><!-- call-item -->
  </div> <!--cardbox-->
</template>

<script>
export default {
  name: 'LatestCalls',
  props: {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
