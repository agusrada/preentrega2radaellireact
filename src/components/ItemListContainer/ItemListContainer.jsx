import React from "react";
import ItemList from "./Itemlist";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../services";


const ItemListContainer = ({greeting},) =>{
    const [Items, setItems] = useState([])
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        getProducts().then((response) => {
           setItems(response)
        });

    }, []);
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList items={Items}/>
        </div>
        

        
    );

};
export default ItemListContainer