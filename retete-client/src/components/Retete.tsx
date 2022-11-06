import React, { useState, useEffect } from "react";
import "./Retete.scss";
import List, { IReteta } from "./List"
import { v4 as uuidv4 } from "uuid";

const createRetete = (name: string, description: string,  ingredients: string[] = ["test"]): IReteta => ({
    id: uuidv4(),
    name,
    description,
    ingredients
});


const RETETE_DEMO: IReteta[] = [
    createRetete("Reteta cafea cu mere", "O faci asa si asa si pui 200 de grame de dragoste cu putin usturoi"),
    createRetete("pizza", "rotunda si gustoasa"),
    createRetete("pizza a doua metodata", "rotunda si gustoasa , rotunda si gustoasa si grasa si cu carne si cu gelatina"),
    createRetete("Tocanita cu ceva", "rotunda si gustoasa, rotunda si gustoasa si grasa si cu carne si cu gelatina"),
    createRetete("Piftie de piftie ", "rotunda si gustoasa si grasa si cu carne si cu gelatina")
];

const Retete = () => {

    const [retete, setRetete] = useState<IReteta[]>([]);

    useEffect(()=> {
        // Check if we have any item in storage
        let itemsInStorage: string | null = localStorage.getItem('retete');
        let itemsToSave: IReteta[] = [];

        if (!itemsInStorage || JSON.parse(itemsInStorage).length === 0)  {
            itemsToSave = RETETE_DEMO; 
            localStorage.setItem('retete', JSON.stringify(itemsToSave));
        } else {
            itemsToSave = JSON.parse(itemsInStorage);   
        }

        setRetete(itemsToSave);
    }, []);

    const onEdit = (id: string) => {
        console.log("on edit was clicked", id);
    }

    const onDelete = (id: string) => {
        const newList = retete.filter((el) => {
                return el.id !== id;
        });
        setRetete(newList)
        localStorage.setItem('retete',JSON.stringify(newList));
    }

    return(<div className="container">
        <h1 style={{textAlign: "center"}} >Retete app</h1>

        { retete.length === 0 
        ? <h2> No items found. Use the form to add one</h2>
        : 
        <List onDelete={onDelete} onEdit={onEdit} items={retete} /> 
        }
        
    </div>)
};

export default Retete;
