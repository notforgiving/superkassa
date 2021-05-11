const { Schema, model } = require("mongoose");

const Status = new Schema({
  status: { type: Boolean, required: true },
});

module.exports = model('Status',Status)
