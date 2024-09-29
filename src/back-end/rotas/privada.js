import { PrismaClient } from "@prisma/client"; 
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/lista", async (req,res) => {
    const produtos = await prisma.item.findMany({
        where:{id_usuario:req.body.id_usuario}
    });
    res.status(200).json(produtos);
})

export default router;