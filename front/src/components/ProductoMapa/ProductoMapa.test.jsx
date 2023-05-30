import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoMapa from './ProductoMapa'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "../../context/ProdContext";


describe('ProductoMapa', () => {
    let component;
    let contextValue = {
        prod: {
            latitud: 4, 
            longitud: 72,
            nombre: "Bogotá", 
            ciudad: "Bogotá"
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <ProductoMapa />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('¿Dónde vas a estar?')
    })
})
