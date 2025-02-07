

export const fetchItens = async (token, listaId) => { // Agora aceita listaId como argumento
  try {
    const response = await fetch(`http://144.22.200.113:3000/lista-pessoal/${listaId}`, { // Passa listaId na URL
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


export const fetchAllItens = async (token, idLista) => {
  try {
    const response = await fetch(`http://144.22.200.113:3000/lista-geral/${idLista}`, {
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
      
    }
  } catch (error) {
    console.error("Erro na requisição", error);
  }
};

export const updateItem = async (token, id) => {
  try {
    const response = await fetch(`http://144.22.200.113:3000/itens/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Passa o token JWT no cabeçalho
      },
    });
    if(response.status(200)){
      const data = await response.json();
      return data;
    }
  }
  catch (error) {
    console.error("Erro ao buscar produtos a", response.status);
  }
}