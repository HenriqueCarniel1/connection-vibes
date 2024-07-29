import Input from "../../components/input";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-center">Login</h1>
        
        <div className="flex">
          <label>Email:</label>
          <Input styles="w-64" type="text"/>
        </div>

        <div className="flex">
          <label>Senha:</label>
          <Input styles="w-64" type="password"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
