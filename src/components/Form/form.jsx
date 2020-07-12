import React from 'react'

import './form.css'

class Form1 extends React.Component {

    state = {
        id: "",
        nome: "",
        nivel: "",
        hp: "",
        dp: "",
        evasao: "",
        reducao: "",
        xp: "",
        skillxp: "",
        karma: "",
        conhecimento: ""
    }

    handleSubmit = () =>{
        const mob = {
            id: this.state.id,
            nome: this.state.nome,
            nivel: this.state.nivel,
            hp: this.state.hp,
            dp: this.state.dp,
            evasao: this.state.evasao,
            reducao: this.state.reducao,
            xp: this.state.xp,
            skillxp: this.state.skillxp,
            karma: this.state.karma,
            conhecimento: this.state.conhecimento
        }
        console.log("teste")
        console.log(mob)
        this.props.handlePost(mob)
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render() {
        return (
            <div class="form-body">
                <h1>Registrar</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Id</label>
                        <input id="id" type="text" value={this.state.id} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Nome</label>
                        <input id="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Nivel</label>
                        <input id="nivel" type="text" value={this.state.nivel} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>HP</label>
                        <input id="hp" type="text" value={this.state.hp} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>DP</label>
                        <input id="dp" type="text" value={this.state.dp} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Evasao</label>
                        <input id="evasao" type="text" value={this.state.evasao} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Redução</label>
                        <input id="reducao" type="text" value={this.state.reducao} onChange={this.handleChange}/> 
                    </p>
                    <p>
                        <label>Xp</label>
                        <input id="xp" type="text" value={this.state.xp} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Skill Xp</label>
                        <input id="skillxp" type="text" value={this.state.skillxp} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Karma</label>
                        <input id="karma" type="text" value={this.state.karma} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Conhecimento</label>
                        <input id="conhecimento" type="text" value={this.state.conhecimento} onChange={this.handleChange}/>
                    </p>
                    <p className="large">
                        <label>Descrição</label>
                        <textarea rows="5"></textarea>
                    </p>
                    <p className="large">
                        <button type="submit">Enviar</button>
                    </p>
                </form>
            </div >
        )
    }
}
class FormClasse extends React.Component {

    state = {
        nome: "",
        nivel: "",
        url: ""
    }

    handleSubmit = () =>{
        const classe = {
            nome: this.state.nome,
            nivel: this.state.nivel,
            url: this.state.url
        }
        this.props.handlePost(classe)
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render() {
        return (
            <div class="form-body">
                <h1>Registrar</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Nome</label>
                        <input id="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Nivel</label>
                        <input id="nivel" type="text" value={this.state.nivel} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label>Img Link</label>
                        <input id="url" type="text" value={this.state.url} onChange={this.handleChange}/>
                    </p>
                    <p className="large">
                        <button type="submit">Enviar</button>
                    </p>
                </form>
            </div >
        )
    }
}

export { FormClasse, Form1 }