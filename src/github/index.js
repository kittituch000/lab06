import React from 'react'
import axios from 'axios'
import { Input,Button } from 'reactstrap';
class Github extends React.Component {

    state = { user: 'gitihm', data:'',tempName:''}
 
    componentDidMount = () => this.fetchUser(this.state.user)
 
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }
    handleChagne = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    } 
 
    render() {
        console.log(this.state.tempName)
        const {data} = this.state
        if (data)
            return ( 
            <div>
                <h2>User</h2>
                <Input name="tempName" onChange={this.handleChagne}/>
                <Button color="danger" onClick={() => this.fetchUser(this.state.tempName)}>Send</Button><br/>
                {data.id}: {data.name} 
                <img src={data.avatar_url} alt="avatar" width="150px"/> 
                
            </div> 
            )
        return (<div>.</div>);
    }
 }
 
 export default Github
 