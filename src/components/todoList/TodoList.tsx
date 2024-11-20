import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getTodoAll} from "../../store/todo/selectors/getTodoAll.selector";
import {Todo} from "../../common/interfaces/Todo.interface";
import {TodoCard} from "../todoCard/TodoCard";

export const TodoList = () => {
  const todos = useSelector(getTodoAll);

  return (
    <>
      <Typography variant="h5" marginBottom="24px">
        Список Дел
      </Typography>

      <Box
        sx={{
          flex: "1 1 100%",
          border: "1px solid grey",
          borderTop: "none",
          padding: "12px 24px 24px 24px",
          overflow: "hidden",
          overflowY: "auto",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            flex: "1 1 100%",
          }}
        >
          {todos.map((todo: Todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
