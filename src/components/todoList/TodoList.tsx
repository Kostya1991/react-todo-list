import {Box, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getTodoAll} from "../../store/todo/selectors/getTodoAll.selector";
import {Todo} from "../../common/interfaces/Todo.interface";
import {TodoCard} from "../todoCard/TodoCard";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import {getFilter} from "../../store/filters/selectors/getFilter.selector";
import {filterChange} from "../../store/filters/actions/filterChange.action";

export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(getTodoAll);
  const filter = useSelector(getFilter);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "24px",
        }}
      >
        <Typography variant="h5">Список Дел</Typography>

        <RadioGroup row value={filter} onChange={(event) => dispatch(filterChange(event.target.value))}>
          <FormControlLabel value="all" control={<Radio />} label="Все" />
          <FormControlLabel value="completed" control={<Radio />} label="Выполненные" />
          <FormControlLabel value="uncompleted" control={<Radio />} label="Не выполненные" />
        </RadioGroup>
      </Box>

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
