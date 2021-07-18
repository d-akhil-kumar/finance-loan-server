const mongoose = require('../connection/mongoose')

const schema = mongoose.Schema(
    {
        type: {
            type: String,
        },
        code: {
            type: String,
        },
        description: {
            type: String,
        },
        imgUrl: {
            type: String,
        },
        detail: {
            type: Array
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
)


const model = mongoose.model('services', schema)
module.exports = model