import React from 'react'
import axios from 'axios'
import './mob.css'
import { Form1 } from '../../components/Form/form'
import Card from '../../components/Card/card'

export default class mobs extends React.Component {


    state = {
        mobs: []
    }

    componentDidMount = () => {
        this.handleGet()
    }


    handleGet = () => {
        axios.get("http://localhost:9090/api/mob").then(res => {
            this.setState({ mobs: res.data })
        })
    }
    handlePost = (mob) => {
        axios.post("http://localhost:9090/api/mob", mob);
        alert("salvo!")
    }

    render() {
        
        
        return (

            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <Form1 handlePost={this.handlePost}></Form1>
                    </div>
                    <div className="card">
                        {
                            this.state.mobs.map(mob=>{
                                return <Card mob={mob}></Card>
                            })
                        }
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}