import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotionForm = () => {
    
    const { id } = useParams();

    return( 

        <div>
            <h1> Hello World! </h1>
        </div>

        )
}

export default PagesPromotionForm;