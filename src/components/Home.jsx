import { Box,makeStyles, Typography } from "@material-ui/core";
import landing1 from "../assets/images/CRUD.png";
const useStyle = makeStyles({
    image:{
        width:"100%",
        height:"50%"
    },
    components:{
        margin:50,

    }
});
const CodeForInterview = () =>{
    const classes = useStyle();
    return (    
        <Box className={classes.components}>
            <Typography variant="h4" style={{marginBottom:50}}>Welcome to the CRUD app</Typography>
            <Box style={{display:"flex"}}>
                <img className={classes.image} src={landing1} alt=""/>
                {/* <img className={classes.image} src={landing1} alt=""/> */}
            </Box>
        </Box>
    )
}
export default CodeForInterview;