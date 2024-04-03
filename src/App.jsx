import { Route, Routes } from 'react-router-dom';
import CharacterList from "./components/CharacterList";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <main className="bg-black text-white ">

     <Routes>
     <Route path="/" element={<WelcomeBanner/>} />
     <Route path="/home" element={<CharacterList/>} />
     </Routes>

    </main>
  );
}

export default App;
