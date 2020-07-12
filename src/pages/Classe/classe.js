import React from 'react'
import axios from 'axios'
import './classe.css'
import { FormClasse } from '../../components/Form/form'
import {ClasseCard} from '../../components/Card/card'

export default class mobs extends React.Component {


    state = {
        classes: []
    }

    componentDidMount = () => {
        this.handleGet()
    }


    handleGet = () => {
        axios.get("http://localhost:9090/api/classe").then(res => {
            this.setState({ classes: res.data })
        })
    }
    handlePost = (classe) => {
        axios.post("http://localhost:9090/api/classe", classe);
        alert("salvo com Sucesso!")
    }
    handleDelete = (id) => {
        axios.delete(`http://localhost:9090/api/classe/${id}`)
        this.handleGet();
    }

    render() {
        
        
        return (

            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <FormClasse handlePost={this.handlePost}></FormClasse>
                    </div>
                    <div className="card">
                        {
                            this.state.classes.map((classe)=>{
                                return <ClasseCard handleDelete={this.handleDelete} classe={classe}></ClasseCard>
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