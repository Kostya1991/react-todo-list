import {Container} from "@mui/material";
import {Header} from "./components/header/Header";
import {TodoForm} from "./components/todoForm/TodoForm";

function App() {
  return (
    <>
      <Header />
      <Container sx={{height: "calc(100vh - 48px)", paddingTop: "24px"}}>
        <TodoForm />
      </Container>
    </>
  );
}

export default App;
