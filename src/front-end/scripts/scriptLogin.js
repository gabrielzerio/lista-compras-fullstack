
async function handleLogin(login) {
 
    try {
      
      const response = await fetch(`http://136.248.79.174:3000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });
      if(response.status != 200){ //tratar os responses de forma correta
        return null;
      }
      const token = await response.json(); // Extrai o JSON da resposta
      return token;
    } catch (error) {
      return error;
    }
  }

export default handleLogin;