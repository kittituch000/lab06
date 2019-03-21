import React,{Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux'
import { addtask, store } from '../App';
class TaskList extends Component {
   render() {
    console.log("in TaskList1",this.props.activite)
        // if ( this.props.activite.tasks )
           return (
           <div>
            <ListGroup > {
                //    this.props.tasks.map((item) => (
                    this.props.activite.tasks.map((item) => (
                       <ListGroupItem key={item.id}> {item.task} </ListGroupItem>
                   ))
               }
           </ListGroup>
           <button onClick={this.handleClick}>ADD</button>
           </div>
        )
   }

   handleClick = () => {
       store.dispatch({
        type :"ADDTASK",
        payload : 'value'
    });
   }
}

const mapStateToProps = (state) => {
    return {
        activite:state.taskPass
    }
}

export default connect(mapStateToProps)(TaskList)