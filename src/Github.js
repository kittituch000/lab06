import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGithub } from './App';

class Github extends Component {
 
    componentDidMount = () => {
        this.props.getGithub();
    }
 
    render() {
        // const {data} = this.props.github
        const data = this.props.github;
        if (data)
            return ( <div>{data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="50px"/> </div> )
        return (<div>.</div>);
    }
 }

 const mapStateToProps = (state) => {
    return { github: state.github }
 }
 
 const mapDispatchToProps = (dispatch) => {
    return {
        getGithub : () => dispatch(getGithub()),
    }
 }
 
 export default connect(mapStateToProps,mapDispatchToProps)(Github);