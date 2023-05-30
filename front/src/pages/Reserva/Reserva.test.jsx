import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Reserva from './Reserva'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";


describe('Reserva', () => {
    let component;
    beforeEach(() => {
        const authContext = {
            auth: {
                jwt: "Aaaaaaaaaaaaaaaaaa",
                roles: 'ROLE_USER'
            }
        }
        
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={authContext}>
                    <Reserva />
                </AuthContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getAllByText('Mis reservas');
        component.getAllByText('Mis Favoritos');
        component.getAllByText('cerrar sesión');
        component.getByText('©2021 Digital Booking');    
    })
})
