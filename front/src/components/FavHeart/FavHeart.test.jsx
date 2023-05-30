import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import FavHeart from "./FavHeart";
import { BrowserRouter } from "react-router-dom";
import { FavsContext } from "../../context/FavsContext";


describe('FavHeart', () => {
    let component;
    let contextValue = {
        favs: ["11"],
        addNewFav: () => {}, 
        removeFav: () => {}
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FavsContext.Provider value={contextValue}>
                <FavHeart />
                </FavsContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByTitle('Añadir a favoritos')
    })

    test('click fav', () => {
        let button=  component.getByTitle('Añadir a favoritos')
        fireEvent.click(button)
    })
})
