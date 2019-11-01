<template>
  <div>
    <h4 class="header-title mb-2">Choose your plan</h4>
    <div class="table-responsive">
        <table class="table table-striped mb-0 plans">
            <thead>
            <tr class="tbl-b no-border">
                <th></th>
                <th>OE-20</th>
                <th>OE-50</th>
                <th>OE-100</th>
                <th>OE-300</th>
                <th>OE-650</th>
                <th>OE-1000</th>
                <th>OE-1500</th>
                <th>OE-2500</th>
                <th>OE-5000</th>
            </tr>
            </thead>
            <tbody>
            <tr  class="tbl-b">
                <th scope="row" class="tbl-0">Package cost<br>per month</th>
                <td>$59</td>
                <td>$95</td>
                <td>$149</td>
                <td>$285</td>
                <td>$599</td>
                <td>$899</td>
                <td>$1299</td>
                <td>$2175</td>
                <td>$4299</td>
            </tr>
            <tr>
                <th scope="row" class="tbl-0">Cost per minute</th>
                <td>$2.90</td>
                <td>$1.90</td>
                <td>$1.50</td>
                <td>$0.95</td>
                <td>$0.92</td>
                <td>$0.90</td>
                <td>$0.88</td>
                <td>$0.87</td>
                <td>$0.86</td>
            </tr>
            <tr>
                <th scope="row" class="tbl-0">SMS cost</th>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
                <td>$0.11</td>
            </tr>
            <tr>
                <th scope="row" class="tbl-0">Transfer cost<br>(untimed)</th>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
                <td>$0.90</td>
            </tr>
            <tr>
                <th scope="row" class="tbl-0">Users included</th>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
            </tr>
            <tr class="success">
                <th scope="row" rowspan="2" class="tbl-0">Package fee*<br><span class="text-xs">(Package cost minus credit for previous package)</span></th>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-check"></i></td>
            </tr>
            <tr>
                <td><button type="button" id="plan1" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan2" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan3" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan4" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan5" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan6" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan7" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan8" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
                <td><button type="button" id="plan9" class="btn btn-success waves-effect width-sm waves-light">Select</button></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChoosePlan',
  props: {
  },
  methods: {
  }
}
</script>
