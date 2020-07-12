import React from 'react'
import './card.css'
export default class Card extends React.Component {

   

    render() {
        return (
            <BodyCard>
                <h1>{this.props.mob.nome}</h1>
                <TopCard>
                    <img src={this.props.mob.url} alt="" />
                    <p>
                        Nivel: {this.props.mob.nivel}<br />
                    </p>
                </TopCard>
                <MiddleCard>
                    <Stats>
                        {this.props.mob.descricao}
                    </Stats>
                    <Stats>
                        HP: {this.props.mob.hp} <br/>
                        Defesa: {this.props.mob.defesa} <br/>
                        Evasão: {this.props.mob.evasao} <br/>
                        Redução dano: {this.props.mob.reducaodano} <br/>
                        Xp: {this.props.mob.xp} <br/>
                        Skill Xp: {this.props.mob.skillxp} <br/>
                        Karma: {this.props.mob.karma} <br/>
                        Conhecimento: {this.props.mob.percentConhecimento}% <br/>
                    </Stats>
                </MiddleCard>
                <div className="bottom">
                    <div className="flex">
                        <button>Modificar</button>
                        <button>Deletar</button>
                    </div>
                </div>
            </BodyCard>
        )
    }
}
class ClasseCard extends React.Component {

  
    handleSubmit = () =>{
        this.props.handleDelete(this.props.classe._id)
    }
    render() {
        return (
            <BodyCard>
                <h1>{this.props.classe.nome}</h1>
                <p>Nivel: {this.props.classe.nivel}</p>
                <MiddleCard>
                    <img src={this.props.classe.url} alt=""/>
                </MiddleCard>
                <div className="bottom">
                    <div className="flex">
                        <button>Modificar</button>
                        <button onClick={this.handleSubmit} >Deletar</button>
                    </div>
                </div>
            </BodyCard>
        )
    }
}
class TopCard extends React.Component {

    render() {
        return (
            <>
                <div className="top">
                    {this.props.children}
                </div>
                <hr />
            </>
        )
    }
}
class MiddleCard extends React.Component {

    render() {
        return (
            <>
                <div className="middle">
                    {this.props.children}
                </div>
                <hr />
            </>
        )
    }
}
class BodyCard extends React.Component {

    render() {
        return (
            <>
            <div className="body-card">
                {this.props.children}
            </div>
            </>
        )
    }
}
class Stats extends React.Component {

    render() {
        return (
            <p className="stats">
                {this.props.children}
            </p>
        )
    }
}

export { Card, Stats, ClasseCard }