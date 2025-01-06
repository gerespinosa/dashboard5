import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const User = models.User || model('User', UserSchema);
export default User;
