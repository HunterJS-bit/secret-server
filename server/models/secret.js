const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
    secret: { type: String, default: '', required: true },
    remainingViews: { type: Number, default: 0 },
    expireTime: { type: Number, default: 0 }
},
{ timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model('Secret', SecretSchema);