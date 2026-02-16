const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    id: {
        type: Number,
        unique: true,
        sparse: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        match: /^[a-zA-Z0-9_]+$/
    },
    password: {
        type: String,
        minlength: 6
    },
    avatar: {
        type: String
    },
    mob: {
        type: Number,
        validate: {
            validator: function(v) {
                return v ? /^\d{10}$/.test(v.toString()) : true;
            },
            message: 'Mobile number must be 10 digits'
        }
    },
    followers: {
        type: Number,
        default: 0,
        min: 0
    },
    Following: {
        type: Number,
        default: 0,
        min: 0
    },
    alltime_rank: {
        type: Number,
        default: 0,
        min: 0
    },
    monthly_rank: {
        type: Number,
        default: 0,
        min: 0
    },
    weekly_rank: {
        type: Number,
        default: 0,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    isNewUser: {
        type: Boolean,
        default: true
    },
    create_on: {
        type: Date,
        default: Date.now
    }
});

const Postschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        primary: true
    },
    image: {
        type: String,
        trim: true
    },
    Video: {
        type: String,
        trim: true
    },
    likes: {
        type: Number,
        default: 0,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    posted_on: {
        type: Date,
        default: Date.now
    },
    updated_on: {
        type: Date,
        default: Date.now
    }
});

const usermodel = mongoose.model("user", Userschema);
const postmodel = mongoose.model("post", Postschema);

module.exports = { usermodel, postmodel };