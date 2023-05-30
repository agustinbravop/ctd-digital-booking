import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";


describe('LoginPage', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByLabelText('Correo Electrónico')
        component.getByLabelText('Contraseña')
        component.getByPlaceholderText('Ingrese su correo electrónico')
    })
})
