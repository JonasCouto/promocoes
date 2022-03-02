import React from 'react';
// import PromotionCard from 'components/Promotion/Card/Card';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import PromotionSearch from 'components/Promotion/Search/Search';
import UIContainer from 'components/UI/Container/Container';

// const promotion = { 
//         "id": 1,
//         "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
//         "price": 1799,
//         "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/9c4b176eb52bb4877e853cf36393d8fc.jpg",
//         "comments": [
//           {
//             "id": 1,
//             "comment": "TELA HD",
//             "promotionId": 1
//           }
//         ]
      
//       };

const PagesPromotionSearch = () => {

    //   // useState é uma lista vazia que vai receber as promocoes.
    // const [promotions, setPromotions] = useState( [] );

    // // Usando o 'useEffect' com uma lista vazia, só sera carregado 1 vez.
    // useEffect( () =>{
    //   axios.get('http://localhost:5000/promotions?_embed=comments')
    //   .then( (response) =>{

    //     setPromotions(response.data)
    //     console.log(response.data);
    //   } );  
    // }, []);

    return(
      
//         <div style={{ maxWidth: 800, margin: '30px auto'}} >
// {/* 
//           {promotions.map( (promotion)=>(

//             <PromotionCard promotion={promotion}/>
            
//           ))}      */}
//             <PromotionSearch/>
//         </div>
      <UIContainer>
        <PromotionSearch/>
      </UIContainer>
    )
}

export default PagesPromotionSearch;