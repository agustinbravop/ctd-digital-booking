import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoUbicacion from './ProductoUbicacion'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";


describe('ProductoUbicacion', () => {
    let component;
    let contextValue = {
        prod: {
            ciudad: {
                nombre: 'Buenos Aires',
                pais: 'Argentina'
            }
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                <ProductoUbicacion />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Buenos Aires, Argentina');
    })
})
