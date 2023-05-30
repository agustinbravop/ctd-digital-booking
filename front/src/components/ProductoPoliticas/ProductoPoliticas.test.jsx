import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoPoliticas from './ProductoPoliticas'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";


describe('ProductoPoliticas', () => {
    let component;
    let contextValue = {
        prod: {
            politicas: [
                {
                    titulo: "Política de devolución",
                    descripcion: "Política de devolución descripción "
                }
            ]
            
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <ProductoPoliticas />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Política de devolución')
    })
})
