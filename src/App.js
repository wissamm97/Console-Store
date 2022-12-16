import Navb from "./components/Navb";

import { Routes, Route } from "react-router-dom";
import Xbox from "./components/Xbox/XboxProduct";
import Ps from "./components/PS/PsProduct";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Slider from "./components/Slider";
import Error from "./components/Error";
import Error2 from "./components/Error2";
import Xheadphonse from "./components/Xbox/X-headphones";
import XDualshock from "./components/Xbox/X-Dualshock";
import XGame from "./components/Xbox/Xbox-Game";
import XAccessor from "./components/Xbox/X-Accessor";
import PSheadphones from "./components/PS/PS-headphones";
import PsDualshock from "./components/PS/Ps-Dualshock";
import PsGame from "./components/PS/Ps-Game";
import PsAccessor from "./components/PS/Ps-Accessor";
import Contact from "./components/Contact";
import Fav from "./components/Fav";

function App() {
  return (
    <>
      <Navb />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Product />
              <Error />
              <Error2 />
              <Contact />
            </>
          }
        />
        <Route path="xbox" element={<Xbox />} />
        <Route path="xhead" element={<Xheadphonse />} />
        <Route path="XDualshock" element={<XDualshock />} />
        <Route path="XGame" element={<XGame />} />
        <Route path="XAccessor" element={<XAccessor />} />
        <Route path="ps" element={<Ps />} />
        <Route path="pshead" element={<PSheadphones />} />
        <Route path="psDualshock" element={<PsDualshock />} />
        <Route path="psGame" element={<PsGame />} />
        <Route path="psAccessor" element={<PsAccessor />} />
        <Route path="cart" element={<Cart />} />
        <Route path="fav" element={<Fav />} />
      </Routes>
    </>
  );
}

export default App;
