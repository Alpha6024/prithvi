const imagekit=require("@imagekit/nodejs")
require("dotenv").config();

const image = new imagekit({
    privateKey: process.env.PRIVATE_KEY,
});

async function uploadbuffer(buffer){
    const result=await image.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result;

}

module.exports = uploadbuffer;