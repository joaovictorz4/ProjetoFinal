import React from 'react'
import axios from 'axios'
import '../layout.css'
import { FormLifeSkill } from '../../components/Form/form'
import {LifeskillCard} from '../../components/Card/card'

export default class mobs extends React.Component {


    state = {
        lifeskills: []
    }

    componentDidMount = () => {
        this.handleGet()
    }


    handleGet = () => {
        axios.get("http://localhost:9090/api/lifeskill").then(res => {
            this.setState({ lifeskills: res.data })
        })
    }
    handlePost = (lifeskill) => {
        axios.post("http://localhost:9090/api/lifeskill", lifeskill);
        alert("salvo com Sucesso!")
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:9090/api/lifeskill/${id}`)
        this.handleGet();
    }

    render() {
        
        
        return (

            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <FormLifeSkill handlePost={this.handlePost}></FormLifeSkill>
                    </div>
                    <div className="card">
                        {
                            this.state.lifeskills.map((lifeskill)=>{
                                return <LifeskillCard handleDelete={this.handleDelete} lifeskill={lifeskill}></LifeskillCard>
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