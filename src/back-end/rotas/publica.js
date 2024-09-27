import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
    

    return res.status(200).json({message:" ok ok"});
    
})

export default router;
