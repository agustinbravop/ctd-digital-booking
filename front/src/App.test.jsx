import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import App from './App'
import { BrowserRouter } from "react-router-dom";


describe('RegistroPage', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
        component.getAllByText('Crear cuenta')
        component.getAllByText('Iniciar sesión')
        component.getByText('MENÚ')
        component.getByText('Buscá ofertas en casas, departamentos y mucho más')
        component.getByText('©2021 Digital Booking')
    })
})
