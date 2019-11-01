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
        <div v-show="data.idType == 'passport'" id="upload-passport" class="mt-3 form-group text-center">
          <label for="upl-passport" class="mt-2 mb-2 h5 ">Upload the first two pages of your passport</label>
          <VueDropzone id="dzPassport" ref="dzPassport" :options="dropzoneOption" @vdropzone-file-added="uploadPassport"/>
        </div>
        <div v-show="data.idType == 'id'" id="upload-national-id" class="mt-3 form-group text-center">
          <label for="upl-id1" class="mt-2 mb-2 h5">Upload the the front side of your national ID</label>
          <VueDropzone id="dzId1" ref="dzId1" :options="dropzoneOption"  @vdropzone-file-added="uploadId1"/>
          <label for="upl-id2" class="mt-4 mb-2 h5">Upload the the back side of your national ID</label>
          <VueDropzone id="dzId2" ref="dzId2" :options="dropzoneOption"  @vdropzone-file-added="uploadId2"/>
        </div>
        <div v-show="data.idType == 'driverLicence'" id="upload-drivers-licence" class="mt-3 form-group text-center">
          <label for="upl-dl" class="mt-2 mb-2 h5">Upload the the front side of your driver's licence</label>
          <VueDropzone id="dzDl1" ref="dzDl1" :options="dropzoneOption"  @vdropzone-file-added="uploadDl1"/>
          <label for="upl-id2" class="mt-4 mb-2 h5">Upload the the back side of your driver's licence</label>
          <VueDropzone id="dzDl2" ref="dzDl2" :options="dropzoneOption"  @vdropzone-file-added="uploadDl2"/>
        </div>
      </tab-content>

      <tab-content title="Step 3"
                   icon="ti-user">
        <h5>Selfie with a document</h5>
        <p>Please upload your selfie holding the document you have provided:</p>
        <VueDropzone id="dzSelfie" ref="dzSelfie" :options="dropzoneOption"  @vdropzone-file-added="uploadSelfie"/>
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

      <tab-content :before-change="() => validate('form4')"
                   title="Step 4"
                   icon="ti-comment-alt">
        <v-form ref="form4" v-model="valid">
        <h5>Personal information</h5>
        <p>Please provide the following information:</p>
        <div class="form-row">
          <div class="col-md-4">
            <v-text-field v-model="data.personalInfo.firstName" :rules="[(v) => Boolean(v) || 'This field is required']" label="First name" required />
          </div>
          <div class="col-md-4">
            <v-text-field v-model="data.personalInfo.middleName" :rules="[(v) => Boolean(v) || 'This field is required']" label="Middle name" required />
          </div>
          <div class="col-md-4">
            <v-text-field v-model="data.personalInfo.lastName" :rules="[(v) => Boolean(v) || 'This field is required']" label="Last name" required />
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-4">
            <v-text-field v-model="data.personalInfo.nationality" :rules="[(v) => Boolean(v) || 'This field is required']" label="Nationality" required />
          </div>
          <div class="col-md-3">
            <v-select v-model="data.personalInfo.gender" :items="genderList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Gender" required />
          </div>
          <div class="col-md-5">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateFormatted"
                  :rules="[(v) => Boolean(v) || 'This field is required']"
                  label="Date"
                  required
                  v-on="on"
                  @blur="data.personalInfo.countryOfBirth = dateFormatted"
                />
              </template>
              <v-date-picker v-model="date" no-title @input="menu = false"/>
            </v-menu>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6">
            <v-text-field v-model="data.personalInfo.cityOfBirth" :rules="[(v) => Boolean(v) || 'This field is required']" label="City of birth" required />
          </div>
          <div class="col-md-6">
            <v-text-field v-model="data.personalInfo.stateOfBirth" :rules="[(v) => Boolean(v) || 'This field is required']" label="State of birth" required />
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3">
            <v-text-field v-model="data.personalInfo.zipCode" :rules="[(v) => Boolean(v) || 'This field is required']" label="ZIP code" required />
          </div>
          <div class="col-md-9">
            <v-select v-model="data.personalInfo.countryOfBirth" :items="countryList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Country of birth" required />
          </div>
        </div>
      </v-form>
      </tab-content>
      <tab-content :before-change="() => validate('form5')"
                    title="Step 5"
                   icon="ti-credit-card">
        <v-form ref="form5" v-model="valid">
        <h5>Identity document details</h5>
        <p>Please provide the following information from your identity document:</p>
        <div class="form-row">
          <div class="col-md-6">
            <v-text-field v-model="data.idDetails.serialNumber" :rules="[(v) => Boolean(v) || 'This field is required']" label="Serial number" required />
          </div>
          <div class="col-md-6">
            <v-menu
              ref="menu"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateFormatted1"
                  :rules="[(v) => Boolean(v) || 'This field is required']"
                  label="Date of issue"
                  required
                  v-on="on"
                  @blur="data.idDetails.dateOfIssue = dateFormatted1"
                />
              </template>
              <v-date-picker v-model="date1" no-title @input="menu1 = false"/>
            </v-menu>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6">
            <v-select v-model="data.idDetails.issuingCountry" :items="countryList" :rules="[(v) => Boolean(v) || 'This field is required']" label="Select a country" required />
          </div>
          <div class="col-md-6">
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateFormatted2"
                  :rules="[(v) => Boolean(v) || 'This field is required']"
                  label="Expiry date (If applicable)"
                  required
                  v-on="on"
                  @blur="data.idDetails.expiryDate = dateFormatted2"
                />
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"/>
            </v-menu>
          </div>
        </div>
      </v-form>
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
        <VueDropzone id="dzDl1" ref="dzAddressDocument" :options="dropzoneOption"  @vdropzone-file-added="uploadAddressDocument"/>
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
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import firebase from 'firebase'
import JQuery from 'jquery'
import {
    mapState
} from 'vuex'
let $ = JQuery

export default {
  name: 'VerifyIdentity',
  components: {
    VueDropzone: vue2Dropzone
  },
  props: {
    balance: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  data: (vm) => ({
    loadingWizard: false,
    valid: false,
    dropzoneOption: {
      url: '/',
      addRemoveLinks: true,
      method: 'put',
      chunking: true,
      forceChunking: true,
      autoQueue: false,
      autoProcessQueue: false,
      dictDefaultMessage: "<i class='mdi mdi-cloud-upload'></i>Click or drag and drop image",
      acceptedFiles: 'image/*',
      maxFiles: 1
    },
    countryList: [
      'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Ter', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands', 'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote DIvoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Hawaii', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'Indonesia', 'India', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands (Holland, Europe)', 'Nevis', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius', 'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'St Pierre & Miquelon', 'St Vincent & Grenadines', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Is', 'Tuvalu', 'Uganda', 'United Kingdom', 'Ukraine', 'United Arab Emirates', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virgin Islands (Brit)', 'Virgin Islands (USA)', 'Wake Island', 'Wallis & Futana Is', 'Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
    ],
    genderList: [
      'Male',
      'Female',
      'Other'
    ],
    passport: null,
    id1: null,
    id2: null,
    dl1: null,
    dl2: null,
    selfie: null,
    addressDocument: null,
    menu: false,
    menu1: false,
    menu2: false,
    dateFormatted: '',
    dateFormatted1: '',
    dateFormatted2: '',
    date: null,
    date1: null,
    date2: null,
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
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
    ...mapState('auth', {
      currentUser: (state) => state.user
    })
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    date1 (val) {
      this.dateFormatted1 = this.formatDate(this.date1)
    },
    date2 (val) {
      this.dateFormatted2 = this.formatDate(this.date2)
    }
  },
  methods: {
    onComplete () {
      this.$bvModal.hide('verify-identity-modal')
    },
    setLoading (value) {
      this.loadingWizard = value
    },
    validate (el) {
      return this.$refs[el].validate()
    },
    storage_upload (filedata, filehandle, dropzoneId, cb) {
      // Getting Handle of the progressbar element of current file //
      let progressBar = $('#' + dropzoneId + ' .dz-progress')[0]
      console.log(progressBar)

      // Firestore storage task
      let task
          // uuid for file being uploaded
      let uuidString = this.uuidv4()

      // Getting Storeage referance for file
      let storageRef = firebase.storage().ref(this.currentUser.user_id + '/' + uuidString)

      // Because I am uploading file in base64 data_url //
      task = storageRef.putString(filedata, 'data_url')

      // Making progress bar of current file preview element visible
      progressBar.opacity = 1

      task
          .on(firebase.storage.TaskEvent.STATE_CHANGED,
              // Trakcing progress of upload
              function progress(snapshot) {
                  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                  // Updating progressbar width - to make it look like filling
                  progressBar.children[0].style.width = progress + '%'
              },
              function(error) {
                  // Hanlde your way
                  // A full list of error codes is available at
                  // https://firebase.google.com/docs/storage/web/handle-errors
                  console.log(error)
              },
              // Finishing process and returing data
              // Returning file-meta and  url
              // and hiding progress bar
              function() {
                  // Upload completed successfully, now we can get the meta data of file
                  task.snapshot.ref.getMetadata().then(function(meta) {
                      // Getting download url of file
                      task.snapshot.ref.getDownloadURL().then(function(downloadUrl) {
                          // storing meta data and download url in object and returning
                          // it to callign function ...
                          var response = {
                              object_info: {
                                  publicURL: downloadUrl,
                                  metainfo: meta
                              }
                          }
                          filehandle.fullPath = meta.fullPath
                          return cb(response)
                      })
                  })

                  // Hiding progress bar for current file
                  progressBar.style.opacity = 0
              }
          )
    },
    uploadPassport (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzPassport', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadId1 (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzId1', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadId2 (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzId2', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadDl1 (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzDl1', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadDl2 (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzDl2', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadAddressDocument (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzAddressDocument', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    uploadSelfie (file) {
      let reader = new FileReader()
      let that = this
      reader.onload = function(event) {
          // event.target.result contains base64 encoded image
          that.storage_upload(event.target.result, file, 'dzSelfie', (r) => {
              console.log('Storage upload response')
              console.log(r)
          })
      }
      reader.readAsDataURL(file)
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
  }
}
</script>
