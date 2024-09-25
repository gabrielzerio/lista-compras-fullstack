function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form className="flex flex-col gap-4"> {/*flex flex-wrap flex-col*/}
            <input placeholder="Usuario" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
            <input placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
            <button className="w-full bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-300 font-medium">Login</button>
        </form>      
    </div>
  );
}

export default LoginPage;
