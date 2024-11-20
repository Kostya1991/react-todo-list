import {Container} from "@mui/material";
import {Header} from "./components/header/Header";
import {TodoForm} from "./components/todoForm/TodoForm";
import {TodoList} from "./components/todoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <Container
        sx={{
          height: "calc(100vh - 48px)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
