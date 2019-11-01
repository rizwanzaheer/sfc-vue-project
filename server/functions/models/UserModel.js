const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var UserModel = function () {};

UserModel.prototype.getUserByEmail = function (email, callback) {
  db.query('SELECT * FROM users WHERE email=?', [email], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

UserModel.prototype.createUser = function (data, callback) {
  db.query('INSERT INTO users (first_name, last_name, email, phone_number, killbill_account_id, password_hash, created_at, last_updated, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [
    data.first_name,
    data.last_name,
    data.email,
    data.phone_number,
    data.killbill_account_id,
    data.password_hash,
    data.created_at,
    data.last_updated,
    data.active,
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

module.exports = new UserModel();
