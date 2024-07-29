import { useState } from "react";
import Input from "../input";

import { CiSearch } from "react-icons/ci";
import Modal from "../modal";

function Header() {
  const [click, setClick] = useState<boolean>(true);

  console.log(click);
  return (
    <div className="flex justify-between p-4 items-center relative z-1">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.g5AKW21APdv9ToQ-pwgo9AHaGK?rs=1&pid=ImgDetMain"
          alt=""
          className="h-10"
        />
      </div>
      <div className="flex w-1/2 rounded-lg border-black border-y-2 border-x-2 p-1">
        <Input
          type="text"
          styles="w-full bg-transparent border-none outline-none"
          placeholderName="Digite o nome de um perfil, postagens..."
        />
        <button className="w-10 flex justify-center items-center">
          <CiSearch />
        </button>
      </div>
      <div>
        <div
          className="w-9 h-9 rounded-full bg-black cursor-pointer"
          onClick={(): void => setClick(!click)}
        >
          <img className="w-full h-full" src="" alt="" />
        </div>
        {
          click && <Modal />
        }
      </div>
    </div>
  );
}

export default Header;
