
export async function adicionaItem(item, token) {
    try {
    
    const response = await fetch(`http://localhost:3000/novoItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // passagem do token
      },
      
      body: JSON.stringify(item),
    });
    return await response.json();
  } catch (error) {
    return response.status;
  }
}
