import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//Rotas
import Index from './pages/Index/index'
import Classe from './pages/Classe/classe'
import Item from './pages/Item/item'
import Lifeskill from './pages/Lifeskill/lifeskill'
import Mob from './pages/Mob/mob'
import Node from './pages/Node/node'
import {Header1} from './components/Header/header'


export default ()=>{
    return(
        <BrowserRouter>
            <Header1></Header1>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/classe" component={Classe}/>
                <Route path="/item" component={Item}/>
                <Route path="/lifeskill" component={Lifeskill}/>
                <Route path="/mob" component={Mob}/>
                <Route path="/node" component={Node}/>
            </Switch>
        </BrowserRouter>
    )
}