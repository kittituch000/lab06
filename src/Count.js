
import React, {Component} from 'react';
import { add,minus, store} from './App'
import { connect } from 'react-redux'

class Count extends Component {
   render() {
       return (
               <div style={{margin: '20px'}}>
                   Counter: {this.props.number} <br/> 
                   <button onClick={ this.props.add}>+</button>
                   <button onClick={ this.props.minus}>-</button>
               </div>
       );
   }
}

const mapStateToProps = (state) => {
   return { number: state.number }
}

const mapDispatchToProps = (dispatch) => {
   return {
       add : ()=>dispatch(add()),
       minus: ()=> dispatch(minus())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count);
