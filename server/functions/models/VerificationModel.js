const db = require('../db');
const util = require('../utils/response');
const message = require('../utils/messages.json');

var VerificationModel = function () {};

VerificationModel.prototype.addVerification = function (data, callback) {
  db.query('INSERT INTO verifications (type, address, code) VALUES (?, ?, ?)', [
    data.type,
    data.address,
    data.code
  ], function (err, result, fields) {
    if (err) { return callback(err); }

    callback(null, result);
  });
}

VerificationModel.prototype.getCodeById = function (id, callback) {
  db.query('SELECT * FROM verifications WHERE id=?', [id], function (err, result, fields) {
    if (err) { return callback(err); }

    if (!result.length) {
      return callback(message.common_messages_record_not_available);
    }
    callback(null, result[0]);
  });
}

module.exports = new VerificationModel();
