import React from 'react'
import axios from 'axios'
import '../layout.css'
import { FormNode } from '../../components/Form/form'
import { NodeCard } from '../../components/Card/card'

export default class mobs extends React.Component {


    state = {
        nodes: []
    }

    componentDidMount = () => {
        this.handleGet()
    }

    handleGet = () => {
        axios.get("http://localhost:9090/api/node").then(res => {
            this.setState({ nodes: res.data })
        })
    }

    handlePost = (node) => {
        axios.post("http://localhost:9090/api/node", node);
        alert("salvo com Sucesso!")
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:9090/api/node/${id}`)
        this.handleGet();
    }

    render() {
        
        return (

            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <FormNode handlePost={this.handlePost}></FormNode>
                    </div>
                    <div className="card">
                        {
                            this.state.nodes.map((node)=>{
                                return <NodeCard handleDelete={this.handleDelete} node={node}></NodeCard>
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