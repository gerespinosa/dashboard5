import {Schema, model, models} from 'mongoose'

const TransactionSchema = new Schema ({
    desc:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    userId: {
        type: String ,
        required: true
    }
}, {
    timestamps: true
})

const Transaction = models.Transaction || model('Transaction', TransactionSchema);
export default Transaction;