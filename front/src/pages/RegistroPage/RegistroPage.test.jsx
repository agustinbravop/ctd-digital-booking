import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import RegistroPage from './RegistroPage'
import { BrowserRouter } from "react-router-dom";


describe('RegistroPage', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <RegistroPage />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
        component.getAllByText('Crear cuenta')
        component.getAllByText('Iniciar sesión')
        component.getAllByText('Contraseña')
        component.getAllByText('¿Ya tienes una cuenta?')
    })
})
