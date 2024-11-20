import {Box, Card, CardContent, Checkbox, FormControlLabel, IconButton, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {FC} from "react";
import {Todo} from "../../common/interfaces/Todo.interface";

interface TodoCardProps {
  todo: Todo;
}

export const TodoCard: FC<TodoCardProps> = ({todo}) => {
  return (
    <Card sx={{width: "100%"}}>
      <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
        <Box sx={{flex: 1}}>
          <Typography variant="h5" component="div" mb="12px">
            {todo.title}
          </Typography>
          <Typography gutterBottom sx={{color: "text.secondary", fontSize: 16}}>
            Описание задачи: {todo.description}
          </Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Typography gutterBottom sx={{color: "text.secondary", fontSize: 16}}>
            Задача создана: {todo.createdDate.toLocaleString()}
          </Typography>
          <Box>
            <FormControlLabel
              control={<Checkbox checked={todo.completed} onChange={(event) => console.log(event.target.checked)} />}
              label="Задача выполнена"
              labelPlacement="start"
              sx={{margin: 0}}
            />
          </Box>
        </Box>
        <Box sx={{marginLeft: 8}}>
          <IconButton onClick={() => console.log("clicked")} color="error" size="large" sx={{padding: 0}}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
