<template>
<div class="container-fluid">
  <div class="row">
     <div class="col-lg-12">
       <div id="calls-accordion" class="card-box accordion">
         <h4 class="header-title mt-0 mb-3">Call history</h4>
         <div id="call-1" class="call-item">
           <div id="call-header-1" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-1" aria-expanded="true" aria-controls="call-body-1">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/user-3.jpg" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Nick Cave</span> - <span class="caller-intent">Support Call</span><br><span class="caller-number">+61 1900 654 321</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
               <li class="list-inline-item calendar-badge invisible"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
               <li class="list-inline-item calendar-phone"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
               <li class="list-inline-item contacts-badge invisible"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
               <li class="list-inline-item email-badge"><img src="assets/images/badge-email.png" alt="Email badge"></li>
               <li class="list-inline-item caller-timestamp"><span>Jun 13</span><br><span class="font-weight-bold">05:15 PM</span></li>
             </ul>
           </div> <!--call-header -->
           <div id="call-body-1" class="call-body collapse color-grey" aria-labelledby="call-header-1" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">JCP IT</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$2.55</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">Urgent!!<br>Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.<br>Transfer Unavailable<br>Regards,<br>Donna</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->

         <div id="call-2" class="call-item">
           <div id="call-header-2" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-2" aria-expanded="true" aria-controls="call-body-2">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/user-4.jpg" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Leonard Cohen</span> - <span class="caller-intent">Support Call</span><br><span class="caller-number">+1 613 555 0181</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
                 <li class="list-inline-item calendar-badge"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
                 <li class="list-inline-item calendar-phone invisible"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
                 <li class="list-inline-item contacts-badge invisible"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
                 <li class="list-inline-item email-badge"><img src="assets/images/badge-email.png" alt="Email badge"></li>
                 <li class="list-inline-item caller-timestamp"><span>Jun 13</span><br><span class="font-weight-bold">11:42 AM</span></li>
               </ul>
           </div> <!--call-header -->
           <div id="call-body-2" class="call-body collapse color-grey" aria-labelledby="call-header-2" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">JCP IT</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$2.55</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">Urgent!!<br>Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.<br>Transfer Unavailable<br>Regards,<br>Donna</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->

         <div id="call-3" class="call-item">
           <div id="call-header-3" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-3" aria-expanded="true" aria-controls="call-body-3">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/user-5.jpg" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Michelle Gurevich</span> - <span class="caller-intent">Free trial</span><br><span class="caller-number">+1 623 731 2618</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
                 <li class="list-inline-item calendar-badge invisible"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
                 <li class="list-inline-item calendar-phone"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
                 <li class="list-inline-item contacts-badge"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
                 <li class="list-inline-item email-badge invisible"><img src="assets/images/badge-email.png" alt="Email badge"></li>
                 <li class="list-inline-item caller-timestamp"><span>Jun 13</span><br><span class="font-weight-bold">08:15 AM</span></li>
               </ul>
           </div> <!--call-header -->
           <div id="call-body-3" class="call-body collapse color-grey" aria-labelledby="call-header-3" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">JCP IT</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$2.55</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">Urgent!!<br>Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.<br>Transfer Unavailable<br>Regards,<br>Donna</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->

         <div id="call-4" class="call-item">
           <div id="call-header-4" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-4" aria-expanded="true" aria-controls="call-body-4">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/user-2.jpg" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Stephen Meritt</span> - <span class="caller-intent">Payment</span><br><span class="caller-number">+1 202 555 0128</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
               <li class="list-inline-item calendar-badge invisible"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
               <li class="list-inline-item calendar-phone invisible"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
               <li class="list-inline-item contacts-badge invisible"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
               <li class="list-inline-item email-badge invisible"><img src="assets/images/badge-email.png" alt="Email badge"></li>
               <li class="list-inline-item caller-timestamp"><span>Jun 12</span><br><span class="font-weight-bold">09:07 PM</span></li>
             </ul>
           </div> <!--call-header -->
           <div id="call-body-4" class="call-body collapse show color-grey" aria-labelledby="call-header-4" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">JCP IT</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$2.55</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">Urgent!!<br>Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.<br>Transfer Unavailable<br>Regards,<br>Donna</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->

         <div id="call-5" class="call-item">
           <div id="call-header-5" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-5" aria-expanded="true" aria-controls="call-body-5">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/unknown.png" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Joshua Tillman</span> - <span class="caller-intent">Sales call</span><br><span class="caller-number">+1 315 545 0036</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
               <li class="list-inline-item calendar-badge invisible"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
               <li class="list-inline-item calendar-phone invisible"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
               <li class="list-inline-item contacts-badge"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
               <li class="list-inline-item email-badge"><img src="assets/images/badge-email.png" alt="Email badge"></li>
               <li class="list-inline-item caller-timestamp"><span>Jun 12</span><br><span class="font-weight-bold">08:45 PM</span></li>
             </ul>
           </div> <!--call-header -->
           <div id="call-body-5" class="call-body collapse color-grey" aria-labelledby="call-header-5" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">JCP IT</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$2.55</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">Urgent!!<br>Please return Jake’s call, he cancelled his account in April, but payment is still being charged to his account.<br>Transfer Unavailable<br>Regards,<br>Donna</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->

         <div id="call-6" class="call-item">
           <div id="call-header-6" class="call-header clearfix" data-toggle="collapse" data-target="#call-body-6" aria-expanded="true" aria-controls="call-body-6">
             <ul class="list-unstyled list-inline mb-0 float-md-left float-sm-none">
               <li class="list-inline-item pt-2"><img src="assets/images/users/unknown.png" class="rounded-circle avatar-md caller-image" alt="Caller-image"></li>
               <li class="list-inline-item caller-info"><span class="font-weight-bold caller-name">Damien Rice</span> - <span class="caller-intent">Information</span><br><span class="caller-number">+353 73 518 6729</span></li>
             </ul>
             <ul class="list-unstyled list-inline badge-list mb-0 pt-2 pb-2 float-md-right float-sm-none">
               <li class="list-inline-item calendar-badge invisible"><img src="assets/images/badge-calendar.png" alt="Calendar badge"></li>
               <li class="list-inline-item calendar-phone"><img src="assets/images/badge-phone.png" alt="Phone badge"></li>
               <li class="list-inline-item contacts-badge invisible"><img src="assets/images/badge-contacts.png" alt="Contacts badge"></li>
               <li class="list-inline-item email-badge invisible"><img src="assets/images/badge-email.png" alt="Email badge"></li>
               <li class="list-inline-item caller-timestamp"><span>Jun 12</span><br><span class="font-weight-bold">06:15 PM</span></li>
             </ul>
           </div> <!--call-header -->
           <div id="call-body-6" class="call-body collapse color-grey" aria-labelledby="call-header-6" data-parent="#calls-accordion">
             <ul class="list-unstyled list-inline mb-0">
               <li class="list-inline-item pr-3">Company name:<span class="call-company-name pl-1">TMF</span></li>
               <li class="list-inline-item pr-3">Call Duration:<span class="call-duration pl-1">3 minutes</span></li>
               <li class="list-inline-item pr-3">Cost:<span class="call-cost pl-1">$1.85</span><a href="#" class="pl-1 font-weight-bold color-blue">View Transaction</a></li>
               <li class="list-inline-item pr-3">Audio:<span class="call-audio pl-1"><i class="fas fa-play"/></span></li>
               <li class="list-inline-item"><button class="btn btn-success waves-effect waves-light btn-xs"> <i class="fas fa-plus mr-1"/> <span>Add contact</span> </button></li>
             </ul>
             <ul class="list-unstyled list-inline mb-0 mt-2 pb-2">
               <li class="list-inline-item align-top pr-3">Message:</li>
               <li class="list-inline-item call-message">John is running a small business. <br>He is wanting to speak with someone on the phone. <br>There will be up to 12 people using the service as the business grows. <br>John would like to know what calendar support you have.</li>
             </ul>
           </div> <!-- call-body -->
         </div><!-- call-item -->
       </div> <!--cardbox-->
     </div> <!-- col-lg-12 -->
   </div> <!-- end row -->
 </div>
</template>

<script>
export default {
    data: () => ({

    }),
    methods: {

    }
}
</script>
