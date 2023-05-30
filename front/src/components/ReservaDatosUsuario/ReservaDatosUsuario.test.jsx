import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ReservaDatosUsuario from './ReservaDatosUsuario'
import { BrowserRouter } from "react-router-dom";


describe('ReservaDatosUsuario', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ReservaDatosUsuario />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByPlaceholderText('¿Querés dejarle un comentario al propietario?')
    })
})
