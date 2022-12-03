"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
var IngressSchema = new mongoose_1.Schema({
    country: { type: String, required: true },
    state: { type: String, required: true },
    time: Number
});
// 3. Create a Model.
var transaction = (0, mongoose_1.model)('transaction', IngressSchema);
module.exports = { transaction: transaction };
