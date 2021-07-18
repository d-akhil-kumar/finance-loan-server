const mongoose = require('../connection/mongoose')

const schema = mongoose.Schema(
    {
        mobile: {
            type: Number,
        },
        email: {
            type: String,
        },
        amt: {
            type: Number,
        },
        type: {
            type: String,
        },
        msg: {
            type: String
        },
        code: {
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


const model = mongoose.model('requests', schema)
module.exports = model