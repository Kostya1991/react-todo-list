import {Container, CssBaseline} from "@mui/material";
import {Header} from "./components/header/Header";
import {TodoForm} from "./components/todoForm/TodoForm";
import {TodoList} from "./components/todoList/TodoList";
import {RemoveTodoModal} from "./components/modals/removeTodoModal/RemoveTodoModal";
import {useSelector} from "react-redux";
import {removeTodoModal} from "./store/modal/selectors/removeTodoModal.selector";

function App() {
  const open = useSelector(removeTodoModal);

  return (
    <>
      <CssBaseline />
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

        <RemoveTodoModal open={open} />
      </Container>
    </>
  );
}

export default App;
