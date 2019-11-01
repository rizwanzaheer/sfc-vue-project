<template>
  <div id="statistics" class="card-box">
    <div class="dropdown float-right">
      <a href="#" class="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
        <i class="mdi mdi-dots-vertical"/>
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
    <h4 class="header-title mt-0 mb-3">Statistics</h4>
    <div class="d-flex flex-wrap justify-content-center text-center">
      <div class="statistics-item">
        <div id="statistics-operator" class="circle mb-2">{{ avgOprAnswerTime }}s</div>
        <p>Average answer time</p>
      </div>
      <div class="statistics-item">
        <div id="statistics-user" class="circle mb-2">{{ avgUserAnswerTime }}s</div>
        <p>Average answer time</p>
      </div>
      <div class="statistics-item">
        <div id="statistics-missed" class="circle mb-2">{{ missedCalls }}</div>
        <p>Missed calls</p>
      </div>
      <div class="statistics-item">
        <div id="statistics-today" class="circle mb-2">{{ callsToday }}</div>
        <p>Calls today</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    'avg-opr-answer-time': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'avg-user-answer-time': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'missed-calls': {
      type: [Number, String],
      required: false,
      default: () => 0
    },
    'calls-today': {
      type: [Number, String],
      required: false,
      default: () => 0
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.statistics-item {
  width: 150px !important;
}
</style>
