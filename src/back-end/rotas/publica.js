import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
    

    return res.status(400).json({message:"tudo ok"});
    
})

export default router;
