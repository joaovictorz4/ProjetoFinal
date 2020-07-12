import React from 'react'
import axios from 'axios'
import '../layout.css'
import { FormItem } from '../../components/Form/form'
import { ItemCard } from '../../components/Card/card'

export default class mobs extends React.Component {


    state = {
        items: []
    }

    componentDidMount = () => {
        this.handleGet()
    }

    handleGet = () => {
        axios.get("http://localhost:9090/api/item").then(res => {
            this.setState({ items: res.data })
        })
    }

    handlePost = (item) => {
        axios.post("http://localhost:9090/api/item", item);
        alert("salvo com Sucesso!")
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:9090/api/item/${id}`)
        this.handleGet();
    }

    render() {
        
        return (

            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <FormItem handlePost={this.handlePost}></FormItem>
                    </div>
                    <div className="card">
                        {
                            this.state.items.map((item)=>{
                                return <ItemCard handleDelete={this.handleDelete} item={item}></ItemCard>
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