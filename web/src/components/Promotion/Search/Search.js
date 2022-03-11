import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import PromotionCard from "../Card/Card";
import PromotionList from "../List/List";
import {Link} from 'react-router-dom';
import './Search.css';


const PromotionSearch = () => {

    // useState é uma lista vazia que vai receber as promocoes.
    const [promotions, setPromotions] = useState( [] );
    const [search, setSearch] = useState('');

    // Usando o 'useEffect' com uma lista vazia, só sera carregado 1 vez.
    useEffect( () =>{
    
    const params = {};
    // verifica se o serch tem valor no input
    if(search){
        params.title_like = search;
    }

    axios.get('http://localhost:5000/promotions?_embed=comments',{params})
    .then( (response) =>{

        setPromotions(response.data)
        console.log(response.data);
    } );  
    }, [search]);
      
    return(
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1> Promo Show </h1>
                <Link to="/create"> Nova Promoção </Link>                
            </header>
            <input type="search" className="promotion-search__input" placeholder="Buscar" value={search} onChange={ (ev)=> setSearch(ev.target.value) }></input>

            <PromotionList promotions={promotions} loading={!promotions.length} />
        </div>
    )
}
// value={search} onChange={ (ev)=> setSearch(ev.target.value) }
export default PromotionSearch;