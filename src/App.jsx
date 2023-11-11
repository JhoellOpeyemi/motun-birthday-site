import { useState } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Words from "./components/Words";
import GlobalStyles from "./styles/Global";

function App() {
  const [item, setItem] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Words item={item} />
      <Slider setItem={setItem} item={item} />
    </>
  );
}

export default App;
