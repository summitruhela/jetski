
const cloudinary = require('cloudinary');

const cloud_const = require('../config/config')();
//==========================  Configuring Cloudinary Here =====================

cloudinary.config({
	cloud_name   : cloud_const.cloudinary.CLOUD_NAME,
	api_key      : cloud_const.cloudinary.API_KEY,
	api_secret   : cloud_const.cloudinary.API_SECRET
})
//==========================  Function declartion =====================


function uploadImage(image_data, callback){
  console.log("in fun")
  cloudinary.uploader.upload(image_data, function(result){
   if(result){
     console.log("profile pic result-==========================>"+result.url)
     callback(null,result.url);
    }
  })
}
//========================== Export module start =======================

module.exports = {
  uploadImage
};