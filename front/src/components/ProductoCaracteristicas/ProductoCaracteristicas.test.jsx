import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoCaracteristicas from './ProductoCaracteristicas'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";


describe('ProductoCaracteristicas', () => {
    let component;
    let contextValue = {
        prod: {
            caracteristicas: [
                {
                    urlIcono: '',
                    nombre: 'Wifi',
                },
                {
                    urlIcono: '',
                    nombre: 'Parqueadero',
                },
            ]
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <ProductoCaracteristicas />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('¿Qué ofrece este lugar?')
    })
})
