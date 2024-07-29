import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import CriarConta from "./pages/criarConta";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/logar" element={<Login />} />
          <Route path="/cadastrar" element={<CriarConta />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
