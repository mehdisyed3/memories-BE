import express from 'express'

const router = express.Router()

router.get('/',(req, res)=>{
  res.send("THis WORKSSs")
})

export default router