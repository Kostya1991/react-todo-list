import {Container} from "@mui/material";
import {Header} from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{height: "calc(100vh - 48px)", paddingTop: "24px"}}>Hellow</Container>
    </>
  );
}

export default App;
