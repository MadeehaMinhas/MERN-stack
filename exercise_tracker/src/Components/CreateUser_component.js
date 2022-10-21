import React,{Component} from "react";
import {Form,Button,Label,Row,Col,FormGroup,Input} from 'reactstrap';
import axios from 'axios';

class CreateUser extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
        this.onChangeUsername=this.onChangeUsername.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);

       
        
    }
   
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
   
   

   

    onSubmit(e){
        e.preventDefault();
        const user={
            username:this.state.username,
            
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add/',user)
        .then(res=>{
            console.log(res.data);
        });
        this.setState({
            username:''
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-10 mt-4 offset-1">
                        <h3>Add a new Exercise</h3>
                    </div>
                    <div className="col-10 col-md-9 mt-3  offset-1">
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup row>
                                <Label htmlFor ='username' md={2}>Username</Label>
                                <Col md={7}>
                                    <Input type='text' id='username' value={this.state.username} onChange={this.onChangeUsername} />
                                </Col>
                            </FormGroup>
                            <Button type='submit' className="btn btn-danger">Create User</Button>
                        </Form>

                    </div>
                </div>
            </div>
        );
    }
}
export default CreateUser;