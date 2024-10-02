import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/lista", async (req, res) => {
  try{
    const produtos = await prisma.usuario.findUnique({
    where: { id: req.body.id_usuario },
    include: { itens: true }
  });
  res.status(200).json(produtos);
}catch(error){
    res.status(500).json({ message: error});
}
});

router.post("/novoItem" , async(req,res) => {
    try{
    const produtoNovo = await prisma.item.create({
        data: {
          id_usuario:req.body.id_usuario,
          produto:req.body.produto,
          qtd:req.body.qtd,
          data: new Date(),
          lista:req.body.lista
        }
      });
      res.status(200).json(produtoNovo);
    }catch(error){
        res.status(500).json({ message: error});
    }
})

export default router;
