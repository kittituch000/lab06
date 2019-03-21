import React from 'react'
import axios from 'axios'
import { Input,Button } from 'reactstrap';
class Index extends React.Component{
    state = {
        data : '',
        zipcode : 94230,
        isLoading : true
    }
    componentDidMount = () => {
        this.getWeather(this.state.zipcode)
        
    }
    getWeather =(zipcode) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},th&units=metric&APPID=1d2822a6e2fc38ebd9bb825f2dda2cca`)
        .then(response => {
            this.setState({data: response.data})
            console.log(response.data)
        }).finally(()=>{
            this.setState({isLoading:false})
        })
    }
    handleChagne = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    } 
    render(){
        const {data,isLoading} = this.state
        return(
            <div>
                {isLoading === true && (
                    <h1>กำลังดาวน์โหลด...</h1>
                )}
                {isLoading === false && (
                    <div>
                    <h2>weather input zipcode</h2>
                    <Input name="zipcode" onChange={this.handleChagne}/>
                    <Button color="info" onClick={ () =>this.getWeather(this.state.zipcode)}>Send</Button><br/>
                    <h3>City : {data.name} </h3>
                    <h4>temp : {data.main.temp}</h4>
                    <h4>Speed Wind : {data.wind.speed}</h4>
                    </div>
                )}
                
                
            </div>


        )
    }
}
export default Index