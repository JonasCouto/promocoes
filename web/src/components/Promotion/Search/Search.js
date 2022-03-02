import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import {Link} from 'react-router-dom';


const PromotionSearch = () => {

    // useState é uma lista vazia que vai receber as promocoes.
    const [promotions, setPromotions] = useState( [] );

    // Usando o 'useEffect' com uma lista vazia, só sera carregado 1 vez.
    useEffect( () =>{
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then( (response) =>{

        setPromotions(response.data)
        console.log(response.data);
    } );  
    }, []);
      
    return(
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1> Promo Show </h1>
                <Link to="/create"> Nova Promoção </Link>
            </header>
            {promotions.map( (promotion) =>(
                <PromotionCard promotion={promotion} />
            ))}
        </div>

    )
}
export default PromotionSearch;