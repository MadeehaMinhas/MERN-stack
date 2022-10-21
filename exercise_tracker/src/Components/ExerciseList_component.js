import React,{Component} from "react";
import axios from 'axios';
import {Button} from 'reactstrap';
import {Table} from 'reactstrap';


import { Link } from "react-router-dom";

function Exercise(props){
    return(
        <tr>
         <td>{props.exercise.username}</td>
         <td>{props.exercise.description}</td>
         <td>{props.exercise.duration}</td>
         <td>{props.exercise.date}</td>
         <td>
            <Link to ={'/edit/'+props.exercise._id}>
            <Button className='btn btn-danger'>edit</Button>
          
            </Link>
            {'\t'}
            
       
            <Button className='btn btn-danger' onClick={()=>{props.deleteExercise(props.exercise._id)} }>delete</Button>
          
         </td>
        </tr>

    );
}


class ExerciseList extends Component{
    constructor(props){
        super(props);
        this.state={exercises:[]};
        this.deleteExercise=this.deleteExercise.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(res=>{
            this.setState({
             exercises:res.data
                
            })
           
          
        })
        .catch(err=>{console.log(err);})
       

        
    }

    showExercises(){
        return this.state.exercises.map(
            current_exercise=>{
                return <Exercise exercise={current_exercise} deleteExercise={this.deleteExercise} key={current_exercise._id} />
            }
        );
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res=>{console.log(res.data)})
        this.setState({
            exercises:this.state.exercises.filter((el)=>el._id!==id)
        })
    }
    render(){
        return(
            <div>
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       
         {this.showExercises()}
         
       
        </tbody>
      </Table>
            </div>
        );
    }
}
export default ExerciseList;