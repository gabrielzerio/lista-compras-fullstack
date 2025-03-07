export async function atualizaStatus(item, status, token) {
    try {
      const response = await fetch(`http://192.168.0.170:3000/item/status/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // passagem do token
        },
        body: JSON.stringify({ status }), // Envia o status como parte do corpo da requisição
      });
  
      // Se a resposta for bem-sucedida, retorna o JSON da resposta
      if (!response.ok) {
        throw new Error(`Erro na atualização: ${response.statusText}`);
      }
  
      return await response.json(); // Retorna os dados recebidos no corpo da resposta
    } catch (error) {
      // Em caso de erro, retorna o erro ou o status
      console.error(error);
      return { error: error.message || "Erro desconhecido" };
    }
  }
  