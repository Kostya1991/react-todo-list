import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {getTodoAll} from "../../store/todo/selectors/getTodoAll.selector";
import {Todo} from "../../common/interfaces/Todo.interface";
import {TodoCard} from "../todoCard/TodoCard";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

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
          padding: "12px 0x 24px 0",
          overflow: "hidden",
          overflowY: "auto",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {!!todos.length && (
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
        )}

        {!todos.length && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="h3">Нет активных задач</Typography>
            <AccessibilityIcon color="success" sx={{fontSize: "256px"}} />
          </Box>
        )}
      </Box>
    </>
  );
};
