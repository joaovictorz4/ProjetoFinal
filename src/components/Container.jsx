import React from 'react'
import '../components/css/container.css'
import { Form } from './form'
import Card from './card1'

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="formulario">
                        <Form />
                    </div>
                    <div className="card">
                        {/*TESTE*/}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        {/*TESTE*/}
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}