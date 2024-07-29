import Input from "../input";

function Header() {
  return (
    <div className="flex justify-between p-4 items-center">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.g5AKW21APdv9ToQ-pwgo9AHaGK?rs=1&pid=ImgDetMain"
          alt=""
          className="h-10"
        />
      </div>
      <div className="flex w-1/2 border-black border-y-2 border-x-2 p-1">
      <Input
          type="text"
          styles="w-full bg-transparent border-none outline-none"
          placeholderName="Digite o nome de um perfil, postagens..."
        />
        <button>pesquisar</button>
      </div>
      <div>
        <div className="rounded-full bg-black">Foto de perfil</div>
      </div>
    </div>
  );
}

export default Header;
