import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';


//Configurando a sessão de navegação entre as rotas da aplicação com o react-router-dom
const Routes = () => (
    //O Browser Router, é para identificar que a navegaão está sendo realizada em um browser;
    //O Switch é para podermos alternar entre as rotas que a aplicação possui
    //O Route é quem faz esse papel de informar para URL o que deve ser renderizado no path específco
    <BrowserRouter> 
        <Switch>
            <Route exact path = "/" component = {Main} />
            <Route path = "/products/:id" component = {Product} />
        </Switch>
    </BrowserRouter> 
);

export default Routes;