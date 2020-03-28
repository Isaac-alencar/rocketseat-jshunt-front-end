import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {

    state = {
        products: []
    };

    componentDidMount() {//Método executado assim que o comp. é exibido em tela!
        this.loadProducts(); //método próprio que será implementado apra exibir prod.
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    };

    render() {
        return <h1>Hello Rocketseat</h1>;
    }
}