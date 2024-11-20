import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {Todo} from "../../common/interfaces/Todo.interface";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todo/actions/addTodo.action";

interface ValidationState {
  description: boolean;
  title: boolean;
}

const INITIAL_VALUE: Todo = {
  id: "",
  completed: false,
  createdDate: new Date(),
  description: "",
  title: "",
};

const INITIAL_INVALID_STATE: ValidationState = {
  title: false,
  description: false,
};

export const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>(INITIAL_VALUE);
  const [validation, setValidation] = useState<ValidationState>(INITIAL_INVALID_STATE);

  const dispatch = useDispatch();

  const handleChangeTitle = (title: string) => {
    setTodo((prev) => ({
      ...prev,
      title,
    }));
  };

  const handleChangeDescription = (description: string) => {
    setTodo((prev) => ({
      ...prev,
      description,
    }));
  };

  const handleChangeSubmit = () => {
    const resultValidation = {
      title: !todo.title.trim(),
      description: !todo.description.trim(),
    };

    if (resultValidation.title || resultValidation.description) {
      setValidation(resultValidation);
      return;
    }

    const result: Todo = {
      id: Math.random().toString(),
      completed: false,
      createdDate: new Date(),
      description: todo.description,
      title: todo.title,
    };

    dispatch(addTodo(result));
    setTodo(INITIAL_VALUE);
    setValidation(INITIAL_INVALID_STATE);
  };

  return (
    <>
      <Box marginBottom="12px">
        <TextField
          fullWidth
          id="standard-basic"
          label="Тема"
          variant="standard"
          value={todo.title}
          error={validation.title}
          onChange={(event) => handleChangeTitle(event.target.value)}
        />
      </Box>
      <Box marginBottom="36px">
        <TextField
          multiline
          maxRows={4}
          fullWidth
          id="standard-basic"
          label="Задача"
          variant="standard"
          value={todo.description}
          error={validation.description}
          onChange={(event) => handleChangeDescription(event.target.value)}
        />
      </Box>

      <Box display="flex" justifyContent="end">
        <Button variant="contained" onClick={handleChangeSubmit}>
          Создать
        </Button>
      </Box>
    </>
  );
};
