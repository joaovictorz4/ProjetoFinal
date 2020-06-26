import React from 'react';
import "./css/header.css"
import { Link } from 'react-router-dom'
import logo from './img/logo-bdo.png'
import procurar from './img/procurar.png'


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {this.props.children}
            </header>
        )
    }
}
class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}
class Model1 extends React.Component {
    render() {
        return (
            <Header>
                <img src={logo} alt="img"></img>
                <Nav>
                    <ItemLink to="/classe">Classe</ItemLink>
                    <ItemLink to="/lifeskill">LifeSkill</ItemLink>
                    <ItemLink to="/item">Item</ItemLink>
                    <ItemLink to="/mob">Mob</ItemLink>
                    <ItemLink to="/node">Node</ItemLink>
                </Nav>
                <Search placeholder="Search...">
                    <img src={procurar} alt="img"></img>
                </Search>
            </Header>
        )
    }
}

class ItemUl extends React.Component {
    render() {
        return (
            <li><a className="link" href={this.props.endPoint}>{this.props.children}</a></li>
        )
    }
}

class ItemLink extends React.Component {
    render() {
        return (
            <li><Link className="link" to={this.props.to}>{this.props.children}</Link></li>
        )
    }
}

class Search extends React.Component {
    render() {
        return (
            <div className="search-button">
                {this.props.children}
                <input placeholder={this.props.placeholder} type="text"></input>
            </div>
        )
    }
}

export { Header, ItemUl, Nav, ItemLink, Model1, Search }