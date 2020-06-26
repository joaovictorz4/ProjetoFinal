import React from 'react'
import '../components/css/container.css'
import { Form } from './form'
import Card from './card1'
import { Model1 } from './header'

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <Model1 />
                <div className="section">
                    <div className="formulario">
                        <Form />
                    </div>
                    <div className="card">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}