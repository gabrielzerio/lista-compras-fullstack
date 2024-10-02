import { useRef } from "react";
import handleLogin from '../scripts/scriptLogin.js';
import { LoginModel } from "../objetos/itemModel.js";
function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e){
    e.preventDefault();
    const userLogin = new LoginModel(emailRef.current.value, passwordRef.current.value);
    handleLogin(userLogin);
   }
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4"> {/*flex flex-wrap flex-col*/}
            <input ref={emailRef} placeholder="Usuario" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
            <input ref={passwordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
            <button type="submit" className="w-full bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-300 font-medium">Login</button>
        </form>      
    </div>
  );
}

export default LoginPage;
