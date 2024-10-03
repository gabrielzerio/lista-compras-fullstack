export const fetchItens = async (token) => {
    let itensNome=[];
  try {
    const response = await fetch("http://localhost:3000/lista", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Passa o token JWT no cabeçalho
      },
    });

    if (response.ok) {
      const data = await response.json();
      itensNome['solicitante'] = [data.nome, data.id, data.email];
      itensNome['itens'] = data.itens;
    //   console.log(itensNome)
      return itensNome;
    } else {
      console.error("Erro ao buscar produtos", response.status);
    }
  } catch (error) {
    console.error("Erro na requisição", error);
  }
};
