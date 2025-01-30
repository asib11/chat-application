const uploader = require('../../utils/singleUplad')

function avatarUpload(req, res, next){
    const upload = uploader(
        'avatars',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        'Only .jpeg, .jpg or .png format allowed!'
    );

    //call the middleware function
upload.any()(req, res, (err)=>{
    if(err){
        req.status(500).json({
            error :{
                avatar : {
                    msg : err.message
                }
            }
        })
    }else {
        next()
    }
});
}


module.exports = avatarUpload