import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoSocials from './ProductoSocials'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "../../context/ProdContext";
import { FavsContext } from "../../context/FavsContext";


describe('ProductoSocials', () => {
    let component;
    let contextValue = {
        prod:{
            idProducto: 1,
            imagenes: [{
                urlImage: ''
            }],
        }
    }
    let contextValueFavs = {
        favs: ["11"],
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FavsContext.Provider value={contextValueFavs}>
                    <ProdContext.Provider value={contextValue}>
                        <ProductoSocials />
                    </ProdContext.Provider>
                </FavsContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByAltText('Compartir')
    })
    test('click Image', () => {
        let image = component.getByAltText('Compartir')
        fireEvent.click(image)
    })
})
