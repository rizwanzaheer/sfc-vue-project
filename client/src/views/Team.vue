<template>
  <div class="container-fluid">
    <ul class="list-unstyled list-inline d-flex flex-wrap">
      <li class="list-inline-item mr-3">
        <form class="app-search pb-2">
          <div class="app-search-box">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search by name, type or company" />
              <div class="input-group-append">
                <button class="btn" type="submit">
                  <i class="fe-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </li>
      <li class="list-inline-item font-16 color-dark font-weight-bold pt-1">View:</li>
      <li class="list-inline-item view-icon">
        <input
          type="radio"
          name="view-filter"
          id="grid-view"
          class="view-button grid-view-radio"
          checked
        />
        <label title="Grid view" for="grid-view">
          <i class="mdi mdi-view-module"></i>
        </label>
        <input type="radio" name="view-filter" id="list-view" class="view-button list-view-radio" />
        <label title="List view" for="list-view">
          <i class="mdi mdi-view-list"></i>
        </label>
      </li>
    </ul>
    <div class="teams">
      <div class="contacts contacts-grid">
        <div class="card contact-card">
          <div class="status-online"></div>
          <img
            src="assets/images/users/user-2.jpg"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          />
          <div class="contact-name">
            <h4>Stephen Meritt</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">+1 202 555 0128</span>
            <span class="contact-email">stephen@magnetic.com</span>
          </div>
        </div>
        <!-- contact card-->

        <div class="card contact-card">
          <div class="status-online"></div>
          <img
            src="assets/images/users/user-2.jpg"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          />
          <div class="contact-name">
            <h4>Stephen Meritt</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">+1 202 555 0128</span>
            <span class="contact-email">stephen@magnetic.com</span>
          </div>
        </div>
        <!-- contact card-->

        <div class="card contact-card">
          <div class="status-online"></div>
          <img
            src="assets/images/users/user-2.jpg"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          />
          <div class="contact-name">
            <h4>Stephen Meritt</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">+1 202 555 0128</span>
            <span class="contact-email">stephen@magnetic.com</span>
          </div>
        </div>
        <!-- contact card-->

        <div class="card contact-card">
          <div class="status-online"></div>
          <img
            src="assets/images/users/user-2.jpg"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          />
          <div class="contact-name">
            <h4>Stephen Meritt</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">+1 202 555 0128</span>
            <span class="contact-email">stephen@magnetic.com</span>
          </div>
        </div>
        <!-- contact card-->

        <div class="card contact-card">
          <div class="status-online"></div>
          <img
            src="assets/images/users/user-2.jpg"
            class="contact-image rounded-circle avatar-xl"
            alt="profile-image"
          />
          <div class="contact-name">
            <h4>Stephen Meritt</h4>
          </div>
          <div class="contact-info">
            <span class="contact-phone">+1 202 555 0128</span>
            <span class="contact-email">stephen@magnetic.com</span>
          </div>
        </div>
        <!-- contact card-->
      </div>
      <!-- end contacts -->
    </div>
    <!-- teams -->
  </div>
  <!-- container-fluid -->
</template>

<script>
import $ from 'jquery';

export default {
  data: () => ({}),
  methods: {},
  mounted() {
    $("input").on("click", function(e) {
      if ($(this).hasClass("list-view-radio")) {
        $(".contacts")
          .removeClass("contacts-grid")
          .addClass("contacts-list");
      } else if ($(this).hasClass("grid-view-radio")) {
        $(".contacts")
          .removeClass("contacts-list")
          .addClass("contacts-grid");
      }
    });
  }
};
</script>
