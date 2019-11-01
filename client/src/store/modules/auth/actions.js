// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'
// import Account from '../../../utils/killbill/resources/Account'
// import uuidv1 from 'uuid/v1'
let config = require('@/environment/' + process.env.NODE_ENV + '.json')

export default {
  login({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: config.apiURL + '/auth/login', data: data, method: 'POST' })
        .then(resp => {
          if (!resp.data.success) {
              commit('auth_error', resp.data.message)
              localStorage.removeItem('token')
              reject(resp.data.message)
          }
          const token = resp.data.result.token
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', resp.data.result)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
  },
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: config.apiURL + '/auth/register', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
            commit('auth_error', resp.data.message)
            localStorage.removeItem('token')
            reject(resp.data.message)
        }
        const token = resp.data.result.token
        // const user = resp.data.result.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        // Account.create({
        //   'accountId': uuidv1(),
        //   'name': user.first_name + ' ' + user.last_name,
        //   'firstNameLength': user.first_name.length,
        //   'externalKey': user.email,
        //   'email': user.email,
        //   'billCycleDayLocal': 0,
        //   'currency': 'AED',
        //   'phone': user.phone_number,
        //   'isMigrated': true,
        //   'accountBalance': 0,
        //   'accountCBA': 0
        // }, 'admin', 'CreateAccount', 'Create new account', (err, data, attrib) => {
        //   if (err) {
        //     commit('auth_error', err)
        //     localStorage.removeItem('token')
        //     reject(err)
        //   }
        // })
        commit('auth_success', resp.data.result)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  sendVerificationEmail({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/sendVerificationEmail', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
            reject(resp.data.message)
        }
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  sendVerificationSms({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/sendVerificationSms', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
            reject(resp.data.message)
        }
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  verifyCode({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios({ url: config.apiURL + '/auth/verifyCode', data: data, method: 'POST' })
      .then(resp => {
        if (!resp.data.success) {
            reject(resp.data.message)
        }
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}
