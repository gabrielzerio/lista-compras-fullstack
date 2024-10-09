import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/lista-pessoal", async (req, res) => {
  try{
   const produtos = await prisma.item.find({
   where: { id: req.id_usuario },
   include: { itens: true }
 });
 res.status(200).json(produtos);
}catch(error){
   res.status(500).json({ message: error});
}
});

router.get("/lista-geral", async (req, res) => {
  
  try {
    const produtos = await prisma.item.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post("/novoItem" , async(req,res) => {
  const teste = req.body;
  console.log(teste) ; 
  try{
    const produtoNovo = await prisma.item.create({
        data: {
          id_usuario:req.body.solicitante,
          produto:req.body.nome,
          qtd:req.body.qtd,
          data: new Date(),
          lista:req.body.lista
        }
      });
      res.status(200).json(produtoNovo);
    }catch(error){
      console.log(error);
        res.status(500).json({ message: error});
    }
})

export default router;
