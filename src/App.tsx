import { Routers } from "./router";
import * as C from "./style/GlobalStyle";

function App() {
  return (
    <C.Container>
      <C.GlobalStyle/>
      <Routers/>
    </C.Container>
  );
}

export default App;
