import "./App.css";
import Header from "./components/layouts/Header";
import Airdrop from "./pages/Airdrop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <div className="bg-black/55 w-full h-full">
        <Header />

        <Airdrop />

        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}

export default App;
