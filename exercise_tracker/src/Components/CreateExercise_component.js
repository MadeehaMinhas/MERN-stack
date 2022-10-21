import React,{Component} from "react";
import {Form,Button,Label,Row,Col,FormGroup,Input} from 'reactstrap';
import  DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
class CreateExercise extends Component{
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
        this.onChangedesc=this.onChangedesc.bind(this);
        this.onChangeduration=this.onChangeduration.bind(this);
        this.onChangedate=this.onChangedate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

       
        
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/')
        .then(res=>{
            this.setState({
                users:res.data.map(user=>user.username),
                username:res.data[0].username
            })
            //console.log(res.data);

        });
        
    }
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangedesc(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeduration(e){
        this.setState({
            duration: e.target.value
        });
    }

    onChangedate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add/',exercise)
        .then(res=>{
            console.log(res.data);
        });
    }

  
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-4 offset-1">
                        <h3>Add a new Exercise</h3>
                    </div>
                    <div className="col-10 col-md-9 mt-3 offset-1">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row>

                    
                        <select className="user_select" required value={this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map((user)=>{
                                   return <option key={user} value={user}>{user}</option>
                                })
                            }
                        </select>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor ='description' md={2}>Description</Label>
                        <Col md={10}>
                            <Input type='text' id='description' value={this.state.description} onChange={this.onChangedesc} />
                        </Col>
                    </FormGroup>



                    <FormGroup row>
                        <Label htmlFor ='duration' md={2}>Duration</Label>
                        <Col md={10}>
                            <Input type='number' id='duration' value={this.state.duration} onChange={this.onChangeduration} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor ='date' md={2}>Date</Label>
                        <Col >
                           <DatePicker 
                           selected={this.state.date}
                           onChange={this.onChangedate}
                           />
                        </Col>
                    </FormGroup>
                    <Button type='submit' className="btn btn-danger">Create Exercise Log</Button>




                </Form>
                </div>
                </div>
                
            </div>
        );
    }
}
export default CreateExercise;