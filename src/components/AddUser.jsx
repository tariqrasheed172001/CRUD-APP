import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        "& > *":{
            marginTop:"20px"
        }
    }
});
const initialValues = {
    name:"",
    username:"",
    email:"",
    phone:""
}
const AddUser = () =>{
    const classes = useStyle();

    const [user,setUser] = useState(initialValues);
    const {name,username,email,phone} = user;

    const onValueChange=(event)=>{
        setUser({...user,[event.target.name]: event.target.value});
    }
    const navigate = useNavigate();
    const addUserDetails = async () =>{
        await addUser(user);                //API call
        navigate('/all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>    
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username" />    
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>    
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone" />    
            </FormControl>
            <Button variant="contained" onClick={addUserDetails} color="primary">Add User</Button>
        </FormGroup>
    )
}
export default AddUser;