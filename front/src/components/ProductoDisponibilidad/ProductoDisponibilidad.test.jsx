import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoDisponibilidad from './ProductoDisponibilidad'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "../../context/ProdContext";
import { AuthContext } from "./../../context/AuthContext";

describe('ProductoDisponibilidad', () => {
    let component;
    let infoContext = {
        reservas: []
    }
    let authContext = {
        auth: {
            isAuth: true,
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={authContext}>
                    <ProdContext.Provider value={infoContext}>
                        <ProductoDisponibilidad />
                    </ProdContext.Provider>
                </AuthContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Iniciar reserva')
    })
})
