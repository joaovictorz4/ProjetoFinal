import React from 'react'

import './css/form.css'


class Button extends React.Component {
    render() {
        return (
            <p className={this.props.class}>
                <button type={this.props.type}>{this.props.children}</button>
            </p>
        )
    }
}
class Form extends React.Component {
    render() {
        return (
            <div class="form-body">
                <h1>Registrar</h1>
                <form>
                    <Text>ID</Text>
                    <Text class="medium">Nome</Text>
                    <Text>Nivel</Text>
                    <Text>HP</Text>
                    <Text>DP</Text>
                    <Text>Evasão</Text>
                    <Text>Redução de Dano</Text>
                    <Text>XP</Text>
                    <Text>Skill XP</Text>
                    <Text>Karma</Text>
                    <Text>Conhecimento</Text>
                    <TextArea class="large" row="5">Descrição</TextArea>
                    <Button class="large">Salvar</Button>
                </form>
            </div >
        )
    }
}
class Text extends React.Component {
    render() {
        return (
            <p className={this.props.class}>
                <label>{this.props.children}</label>
                <input type="password"></input>
            </p>
        )
    }
}
class TextArea extends React.Component {
    render() {
        return (
            <p className={this.props.class}>
                <label>{this.props.children}</label>
                <textarea rows={this.props.row}></textarea>
            </p>
        )
    }
}

export { Text, TextArea, Form, Button }