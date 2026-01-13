import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./component/home";
import Moments from "./component/moments";
import Letter from "./component/letter";
import Final from "./component/final";
import { MusicProvider,useMusic } from "./component/MusicContext";

// const MusicStarter = ({ children }) => {
//   const { startMusic } = useMusic();

//   return (
//     <div onClick={startMusic} onTouchStart={startMusic}>
//       {children}
//     </div>
//   );
// };

export default function App() {
  const { startMusic } = useMusic();

  return (
    <>
      <MusicProvider>
        <div onClick={startMusic} onTouchStart={startMusic} tabIndex={0}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/moments" element={<Moments />}></Route>
            <Route path="/Letter" element={<Letter />}></Route>
            <Route path="/final" element={<Final />}></Route>
          </Routes>
        </div>
      </MusicProvider>
    </>
  );
}
