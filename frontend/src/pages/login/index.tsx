import Button from "../../components/buton";
import Input from "../../components/input";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-gray-500">
        <h1 className="text-center mb-10">Login</h1>

        <div className="flex mb-5 items-center">
          <label>Email: </label>
          <Input styles="w-64" type="text" placeholderName="Digite seu email"/>
        </div>

        <div className="flex mb-5 items-center">
          <label>Senha: </label>
          <Input styles="w-64" type="password" placeholderName="Digite sua senha"/>
        </div>
        <Button styles="bg-green-600 w-full p-2 rounded-lg" contentValue="enviar"/>
      </div>
    </div>
  );
}

export default Login;
