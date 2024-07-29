import Input from "../input";


function Header() {
  return (
    <div className="flex justify-between">
        <div>
            <img src="" alt="" />Logo
        </div>
        <div>
            <Input type="text" styles="h-6" placeholderName="Digite o nome de um perfil, postagens..." />
        </div>
        <div>
            
        </div>
    </div>
  );
}

export default Header;
