import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Producto from './Producto'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "../../context/ProdContext";

describe('Producto', () => {
    let component;
    let contextValue = {
        prod: {
            categoria: 'Casas',
            nombre: 'Casa Villa flor',
        },
        newProd: () => {}
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <Producto />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('©2021 Digital Booking')
    })
})
