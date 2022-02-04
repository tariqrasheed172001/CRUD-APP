import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { useNavigate ,useParams} from "react-router-dom";
import { editUser } from "../Service/api";

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
const EditUser = () =>{
    const classes = useStyle();
    const {id} = useParams();
    const [user,setUser] = useState(initialValues);
    const {name,username,email,phone} = user;

    useEffect(()=>{
        loaduserData();
    },[])

    const loaduserData = async () =>{
       const response = await getUsers(id);
       setUser(response.data);
    }

    const onValueChange=(event)=>{
        setUser({...user,[event.target.name]: event.target.value});
    }
    const navigate = useNavigate();
    const editUserDetails = async () =>{
        await editUser(id,user);                //API call
        navigate('/all');
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={onValueChange} name="name" value={name} />    
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={onValueChange} name="username" value={username}/>    
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValueChange} name="email" value={email}/>    
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={onValueChange} name="phone" value={phone}/>    
            </FormControl>
            <Button variant="contained" onClick={editUserDetails} color="primary">Save</Button>
        </FormGroup>
    )
}
export default EditUser;