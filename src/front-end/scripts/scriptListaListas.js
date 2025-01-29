
export const fetchListas = async (token) => {

  
  const response = await fetch(`http://136.248.79.174:3000/listas`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Passa o token JWT no cabeçalho
    },
  });
  if (response.status == 200) {
    const data = await response.json();
    return data;
  }
};
