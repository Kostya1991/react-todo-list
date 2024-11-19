import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import {useDispatch, useSelector} from "react-redux";
import {THEME_CHANGE} from "../../store/theme/actions/themeChange.action";
import {themeSelector} from "../../store/theme/selectors/theme.selector";

export const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(themeSelector);

    return (
        <AppBar position="static" color="success">
            <Toolbar variant="dense" sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h6" color="inherit" component="div">
                    ToDo List
                </Typography>

                {theme === "light" && (
                    <IconButton
                        onClick={() => dispatch(THEME_CHANGE("dark"))}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <BedtimeOutlinedIcon />
                    </IconButton>
                )}
                {theme === "dark" && (
                    <IconButton
                        onClick={() => dispatch(THEME_CHANGE("light"))}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <WbSunnyOutlinedIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};
