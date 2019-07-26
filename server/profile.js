const s3 = new aws.S3({
  accessKeyId: AMAZONID,
  secretAccessKey: AMAZONSECRET,
  Bucket: 'simplejoys'
})

const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: '',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: {fileSize: 20000000}, // In bytes: 20000000 bytes = 20 MB
  fileFilter: function(req, file, cb){
    checkFileType(file, cb)
  } 
}).single('profileImage')

function checkFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if(mimetype && extname){
    return cb(null, true)
  } else {
    cb('Error: Images Only!')
  }
}

router.post('/profile-img-upload', (req, res) => {
  profileImgUpload(req, res, (error) => {
    if (error) {
      console.log('errors:', error)
      res.json({error: error})
    } else {
      if (req.file === undefined){
        console.log('Error: No File Selected')
        res.json('Error: No File Selected')
      } else {
        const imageName = req.file.key
        const imageLocation = req.file.location
        res.json({
          image: imageName,
          location: imageLocation
        })
      }
    }
  })
})