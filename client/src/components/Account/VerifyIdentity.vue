<template>
  <b-modal id="verify-identity-modal" class="verify-identity" hide-footer>
    <template v-slot:modal-title>
      <h4 id="verify-email" class="modal-title">Verify your identity</h4>
    </template>
    <form-wizard shape="square"
                  color="green"
                  title=""
                  subtitle=""
                  backButtonText="Previous"
                  @on-complete="onComplete"
                  @on-loading="setLoading">
      <tab-content :before-change="() => validate('form1')"
                    title="Step 1"
                   icon="ti-world">
        <v-form ref="form1" v-model="valid">
          <h5>Country of residence</h5>

          <p>Please select your country of residence from a dropdown menu below:</p>
          <v-select v-model="data.countryOfResidence" :items="countryList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Select a country" required />
        </v-form>
      </tab-content>
      <tab-content title="Step 2"
                   icon="ti-id-badge">
        <h5>Identity document</h5>
        <p>Please select what type of document you will be providing:</p>
        <div class="d-flex align-items-center justify-content-center text-center">
           <div id="select-passport" class="document-type d-flex align-items-center justify-content-center" @click="data.idType='passport'">
             International<br>passport
           </div>
           <div id="select-id-card" class="document-type d-flex align-items-center justify-content-center" @click="data.idType='id'">
             National <br>ID card
           </div>
           <div id="select-drivers-licence" class="document-type d-flex align-items-center justify-content-center" @click="data.idType='driverLicence'">
             Driver's <br>licence
           </div>
        </div>
        <div v-if="data.idType == 'passport'" id="upload-passport" class="mt-3 form-group text-center">
          <label for="upl-passport" class="mt-2 mb-2 h5 ">Upload the first two pages of your passport</label>
          <VueDropify accept="image/*" @upload="uploadPassport"/>
        </div>
        <div v-if="data.idType == 'id'" id="upload-national-id" class="mt-3 form-group text-center">
          <label for="upl-id1" class="mt-2 mb-2 h5">Upload the the front side of your national ID</label>
          <VueDropify accept="image/*" @upload="uploadId1"/>
          <label for="upl-id2" class="mt-4 mb-2 h5">Upload the the back side of your national ID</label>
          <VueDropify accept="image/*" @upload="uploadId2"/>
        </div>
        <div v-if="data.idType == 'driverLicence'" id="upload-drivers-licence" class="mt-3 form-group text-center">
          <label for="upl-dl" class="mt-2 mb-2 h5">Upload the the front side of your driver's licence</label>
          <VueDropify accept="image/*" @upload="uploadDl1"/>
          <label for="upl-id2" class="mt-4 mb-2 h5">Upload the the back side of your driver's licence</label>
          <VueDropify accept="image/*" @upload="uploadDl2"/>
        </div>
      </tab-content>
      <tab-content title="Step 3"
                   icon="ti-user">
        <h5>Selfie with a document</h5>
        <p>Please upload your selfie holding the document you have provided:</p>
        <input id="upl-id-selfie" type="file" name="upl-id-selfie" accept=".jpeg, .pdf,.gif" class="dropify" required>
        <h5 class="pt-1">Photo requirements</h5>
        <ul>
          <li>Look straight at the camera.</li>
          <li>Background colour should be light and neutral.</li>
          <li>Photo of you should be in <strong>colour.</strong></li>
          <li>Your face must be clearly <strong>visible</strong>. Please <strong>do not</strong> wear sunglasses, a hat, or a headband.</li>
          <li>Information in your document must be easily readable.</li>
          <li>In case of a low-quality photo or scan, the Compliance Officer may ask you to upload it again.</li>
        </ul>
      </tab-content>

      <tab-content title="Step 4"
                   icon="ti-comment-alt">
        <h5>Personal information</h5>
        <p>Please provide the following information:</p>
        <div class="form-row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="verification-fname">First name</label>
              <input id="verification-fname" class="form-control" name="verification-fname" required>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="verification-mname">Middle name</label>
              <input id="verification-mname" class="form-control" name="verification-mname">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="verification-lname">Last name</label>
              <input id="verification-lname" class="form-control" name="verification-lname" required>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="verification-nationality">Nationality</label>
              <input id="verification-nationality" class="form-control" name="verification-nationality" required>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="verification-gender">Gender</label>
              <select name="verification-gender" class="form-control"><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>
            </div>
          </div>
          <div class="col-md-5">
           <div class="form-group">
             <label for="verification-date">Date of birth</label>
             <input id="verification-date" class="form-control" type="date" name="verification-date" required>
           </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6">
           <div class="form-group">
             <label for="verification-city">City of birth</label>
             <input id="verification-city" class="form-control" type="text" name="verification-city" required>
           </div>
          </div>
          <div class="col-md-6">
           <div class="form-group">
             <label for="verification-state">State of birth</label>
             <input id="verification-state" class="form-control" type="text" name="verification-state">
           </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3">
           <div class="form-group">
             <label for="verification-zip">ZIP code</label>
             <input id="verification-zip" class="form-control" type="number" name="verification-zip" required>
           </div>
          </div>
          <div class="col-md-9">
            <div class="form-group">
             <label for="verification-birth-country">Country of birth</label>
             <v-select v-model="data.personalInfo.countryOfBirth" :items="countryList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Select a country" required />
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="Step 5"
                   icon="ti-credit-card">
        <h5>Identity document details</h5>
        <p>Please provide the following information from your identity document:</p>
        <div class="form-row">
         <div class="col-md-6">
           <div class="form-group">
             <label for="verification-serial">Serial number</label>
             <input id="verification-serial" class="form-control" type="number" name="verification-serial" required>
           </div>
         </div>
         <div class="col-md-6">
           <div class="form-group">
             <label for="verification-issue-date">Date of issue</label>
             <input id="verification-issue-date" class="form-control" type="date" name="verification-issue-date" required>
           </div>
         </div>
        </div>
        <div class="form-row">
         <div class="col-md-6">
           <div class="form-group">
             <label for="verification-issuing-country">Issuing country</label>
             <v-select v-model="data.idDetails.issuingCountry" :items="countryList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Select a country" required />
           </div>
         </div>
         <div class="col-md-6">
           <div class="form-group">
             <label for="verification-expiry-date">Expiry date (If applicable)</label>
             <input id="verification-expiry-date" class="form-control" type="date" name="verification-expiry-date" required>
           </div>
         </div>
        </div>
      </tab-content>
      <tab-content title="Step 6"
                   icon="ti-check">
        <h5>Address document</h5>
        <p>Please provide a photo of a document that confirms your current adress. Following documents are accepted:</p>
        <ul>
          <li>Utility and electricity bills</li>
          <li>Bank statements</li>
          <li>Tax reutrn documents</li>
          <li>Any other documents with your address as well as your first and last name</li>
        </ul>
        <input id="upl-passport" type="file" name="upl-adress-document" accept=".jpeg, .pdf,.gif" class="dropify" required>
        <h5 class="pt-1" >Document requirements:</h5>
        <ul>
          <li>The document must have been issued within the last three months</li>
          <li>The document must be in Latin characters or have Latin transliteration</li>
          <li>The document must contain the credentials of the institution (e.g. logo), your first and last name, and your residential address on one page.</li>
        </ul>
      </tab-content>
      <div v-if="loadingWizard" class="loader"/>
    </form-wizard>
  </b-modal>
</template>

<script>
import 'jquery-validation'
import VueDropify from 'vue-dropify'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'VerifyIdentity',
  components: {
    VueDropify
  },
  props: {
    balance: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  data: () => ({
      loadingWizard: false,
      valid: false,
      countryList: [
        'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Ter', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands', 'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote DIvoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Hawaii', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'Indonesia', 'India', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands (Holland, Europe)', 'Nevis', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius', 'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'St Pierre & Miquelon', 'St Vincent & Grenadines', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda', 'United Kingdom', 'Ukraine', 'United Arab Emirates', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virgin Islands (Brit)', 'Virgin Islands (USA)', 'Wake Island', 'Wallis & Futana Is', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
      ],
      passport: null,
      id1: null,
      id2: null,
      dl1: null,
      dl2: null,
      data: {
        countryOfResidence: '',
        idImages: {},
        idType: 'passport',
        selfieImage: '',
        personalInfo: {
          firstName: '',
          middleName: '',
          lastName: '',
          nationality: '',
          gender: '',
          dateOfBirth: '',
          cityOfBirth: '',
          stateOfBirth: '',
          zipCode: '',
          countryOfBirth: ''
        },
        idDetails: {
          serialNumber: '',
          dateOfIssue: '',
          issuingCountry: '',
          expiryDate: ''
        },
        addressDocument: ''
      }
  }),
  methods: {
    onComplete () {
      console.log('a')
    },
    setLoading (value) {
      this.loadingWizard = value
    },
    validate (el) {
      return this.$refs[el].validate()
    },
    uploadPassport (files) {
      this.passport = files[0]
    },
    uploadId1 (files) {
      this.id1 = files[0]
    },
    uploadId2 (files) {
      this.id2 = files[0]
    },
    uploadDl1 (files) {
      this.dl1 = files[0]
    },
    uploadDl2 (files) {
      this.dl2 = files[0]
    }
  }
}
</script>
