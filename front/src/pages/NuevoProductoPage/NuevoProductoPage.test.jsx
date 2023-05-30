import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoPage from './NuevoProductoPage'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe('NuevoProductoPage', () => {
    let component;
    let infoContext = {
        auth: {
            roles: 'ROLE_ADMIN'
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={infoContext}>
                    <NuevoProductoPage />
                </AuthContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Administración de productos')
    })

    test('Submit form', () => {
        let button = component.getByText('Crear')
        fireEvent.click(button)
    })

    test('Submit form', () => {
        let selectCategoria = component.getByText('Elegir categoría')
        selectCategoria.value = 'Casa'
        let selectCiudad = component.getByText('Elegir ciudad')
        selectCiudad.value = 'Bogotá'
        let inputAlt = component.getByPlaceholderText('Foto casa');
        inputAlt.value = 'Foto casa'
        let inputUrl = component.getByPlaceholderText('Insertar https://');
        inputUrl.value = 'https://www.google.com'
        let buttonImage = component.getAllByTitle('Agregar nuevo')
        fireEvent.click(buttonImage[buttonImage.length - 1])
        let button = component.getByText('Crear')
        fireEvent.click(button)

    })
})
