import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';


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

        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => {
                    return (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>

                            <a href="">Acessar</a>
                        </article>
                    )
                })}
            </div>
        )
    }
}