import React from 'react'
import './css/card1.css'
import img from './img/00005211.png'
export default class Card extends React.Component {

    state = {
        mob: {
            nome: "Carne de Baleia Macia",
            peso: 0.20,
        }
    }

    render() {
        return (
            <div className="body-card">
                <h1>{this.state.mob.nome}</h1>
                <div className="top">
                    <img src={img} alt="" />
                    <p>
                        Material Necessário <br />
                        Peso: {this.state.mob.peso} LT
                    </p>
                </div>
                <hr />
                <div className="middle">
                    <Stats>
                        - Descrição :
                        Um ingrediente culinário que pode ser coletado através da caça.
                    </Stats>
                    <Stats>
                        - Como obter: Pode ser obtido cortando o cadáver de uma baleia jubarte.
                        Carne fresca cortada da Baleia Jubarte. Não é como a Carne de Baleia Rei, mas também é considerada como uma carne rara.
                    </Stats>
                </div>
                <hr />
                <div className="bottom">
                    <Stats>
                        Preço de compra: 4500 <br />
                        Preço de venda: 730
                    </Stats>
                </div>
                <div className="flex">
                    <button>Modificar</button>
                    <button>Deletar</button>
                </div>

            </div>
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

class Stats extends React.Component {

    render() {
        return (
            <p className="stats">
                {this.props.children}
            </p>
        )
    }
}

export { Card, Stats }