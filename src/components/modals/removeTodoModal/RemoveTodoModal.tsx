import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {FC} from "react";
import {getDeletedTodo} from "../../../store/todo/selectors/getDeletedTodo.selector";
import {changeRemoveModal} from "../../../store/main/actions/removeTodoToogle.action";
import {removeTodo} from "../../../store/main/actions/removeTodo.action";

interface RemoveTodoModalProps {
  open: boolean;
}

export const RemoveTodoModal: FC<RemoveTodoModalProps> = ({open}) => {
  const dispatch = useDispatch();
  const todo = useSelector(getDeletedTodo);

  const handleClose = () => {
    dispatch(
      changeRemoveModal({
        id: todo.id,
        remove: false,
      }),
    );
  };

  if (!open) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Удаление задачи"}</DialogTitle>
      <DialogContent sx={{width: "400px"}}>
        <DialogContentText id="alert-dialog-description">Удалить задачу {todo.title}?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={() => dispatch(removeTodo(todo.id))} color="error">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
