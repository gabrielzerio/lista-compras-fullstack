export const fetchItens = async (token, listaId) => { // Agora aceita listaId como argumento
  try {
    const response = await fetch(`http://localhost:3000/lista-pessoal/${listaId}`, { // Passa listaId na URL
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Passa o token JWT no cabeçalho
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Erro ao buscar produtos", response.status);
    }
  } catch (error) {
    console.error("Erro na requisição", error);
  }
};


export const fetchAllItens = async(token,idLista) => {
try {
  const response = await fetch(`http://localhost:3000/lista-geral/${idLista}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Passa o token JWT no cabeçalho
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Erro ao buscar produtos a", response.status);
  }
} catch (error) {
  console.error("Erro na requisição", error);
}
};