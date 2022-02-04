import { AppBar, Toolbar,makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    header:{
        background:"#111111"
    },
    tabs:{
        color:"#ffffff",
        marginRight:20,
        textDecoration:"none",
        fontSize:20
    }
})

const NavBar=() => {
    const classes = useStyle();
    return (
      <AppBar className={classes.header} position="static">
          <Toolbar>
            <Link className={classes.tabs} to="./" exact>Home</Link>
            <Link className={classes.tabs} to='all' exact>All Users Link</Link>
            <Link className={classes.tabs} to="addUser" exact>Add User</Link>
          </Toolbar>
      </AppBar>
    )
}
export default NavBar;