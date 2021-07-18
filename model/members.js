const mongoose = require('../connection/mongoose')

const schema = mongoose.Schema(
    {
        mobile: {
            type: Number,
        },
        email: {
            type: String,
        },
        occupation: {
            type: String,
        },
        createPassword: {
            type: String
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
)


const model = mongoose.model('members', schema)
module.exports = model