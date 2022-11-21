const express = require ('express')
const router = express.Router()
const multer  = require('multer')
const campaign = require('../model/campaignSchema')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + file.originalname
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
// router.post('/addimg', upload.single('productimg'), (req,res) => {
//     const profile = (req.file) ? req.file.filename : null ;
//     console.log("getimg")
// })


router.get('/', (req,res) => {
    res.send("hello world from home")
})
router.post('/zocket/api/addcampaign', async(req,res) => {
    console.log(req.body)
    // res.setHeader('Content-Type', 'application/json');
    // res.json({message : req.body})
    res.send("hello world from campaign")
   const campaigncreat = await campaign.create(req.body);
   console.log(campaigncreat, 'cam')
    //    return res.json({message : "Campaign sucessfully add"})

//    return res.status(200).json({
//     success : true,
//     campaigncreat,
//     message : 'campaign SuccessFully Added'
//    })

})
// read product
router.get('/zocket/api/getcampaign', async(req,res) => {
    const campaignlist =  await campaign.find()
    res.status(200).json({
    success : true,
    campaignlist,
    count : campaignlist.length
    // message : 'campaign SuccessFully Added'
   })
    // res.send("hello world from products")
})
// delete campaign
router.delete('/zocket/api/campaigndelete/:id', async(req,res) =>{
    const camp = await campaign.findById(req.params.id)
    if (!camp) {
        return res.status(500).json({
            success:false,
            message: "product not found"
        })
    }
    await camp.remove()
    res.status(200).json({
        success:true,
        message : "Campaign Delete SucessFully"
    })
})
// router.get('/customers', (req,res) => {
//     res.send("hello world from customers")
// })


module.exports = router


// {
//     "leadsName":"Google",
//     "productName":"Bluberry cake with raw toppings",
//      "productImg" : "productImg.png",
//      "budget" : "2000",
//      "location":"surat",
//      "location-radius" : "24km",
//      "start_date" : 22222,
//      "end_date":33333
// }