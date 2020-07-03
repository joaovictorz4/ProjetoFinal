import React from 'react'
import axios from 'axios'
import Container from '../../components/Container.jsx'
import './mob.css'

export default class mobs extends React.Component {


    state = {
        mobs: []
    }

    componentDidMount = () => {
        
        this.handleGet()
    }


    handleGet = () => {
        axios.get("http://192.168.1.104:9090/api/mob").then(res => {
            this.setState({ mobs: res.data })
        })
    }
    handlePost = (mob) => {
        console.log(mob)
        axios.post("http://192.168.1.104:9090/api/mob", mob).then(res => {
            console.log(res)
        })
    }


    render() {
        
        
        return (
            <div>
                <Container></Container>
            </div>
        )
    }
}