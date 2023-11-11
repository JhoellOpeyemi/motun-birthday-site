import { useState } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Words from "./components/Words";
import GlobalStyles from "./styles/Global";
import { Container, DesktopNotif } from "./styles/Container.styled";

function App() {
  const [item, setItem] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Words item={item} />
        <Slider setItem={setItem} item={item} />
      </Container>
      <DesktopNotif>Only mobile view available!</DesktopNotif>
    </>
  );
}

export default App;
