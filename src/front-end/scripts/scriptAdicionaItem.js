export async function adicionaItem(item){
    try{
        const response = await fetch("http://localhost:3000/novoItem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login),
          });
    }catch(error){
        
    }
}