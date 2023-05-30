import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoHeader from './ProductoHeader'
import { ProdContext } from "./../../context/ProdContext";
import { BrowserRouter } from "react-router-dom";


describe('ProductoHeader', () => {
    let component;
    let contextValue = {
        prod: {
            categoria: 'Casas',
            nombre: 'Casa Villa flor',
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <ProductoHeader />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Casa Villa flor')
    })
})
