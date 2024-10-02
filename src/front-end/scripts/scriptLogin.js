async function handleLogin(login){
try{
    const response = await fetch("http://localhost:3000/login");
    const teste = await response.json();
console.log(response);
}
catch(error){
    console.log(error);
}
}

export default handleLogin;