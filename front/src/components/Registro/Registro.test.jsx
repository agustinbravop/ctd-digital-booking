import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Registro from './Registro'
import { BrowserRouter } from "react-router-dom";


describe('Registro', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Registro />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByPlaceholderText('Ingrese su nombre')
        component.getByPlaceholderText('Ingrese su apellido')
        component.getByPlaceholderText('Ingrese su correo electrónico')
        component.getByPlaceholderText('Ingrese su contraseña')
        component.getByPlaceholderText('Repita su contraseña')

    })
    test('Show password', () => {
        let button = component.getByTitle('Mostrar contraseña')
        fireEvent.click(button)
    } )
    test('Onsubmit form', () => {
        let inputNombre = component.getByPlaceholderText('Ingrese su nombre')
        inputNombre.value= 'Juan'
        let inputApellido = component.getByPlaceholderText('Ingrese su apellido')
        inputApellido.value= 'Perez'
        let inputCorreo = component.getByPlaceholderText('Ingrese su correo electrónico')
        inputCorreo.value= 'juanbuenas@gmail.com'
        let inputContraseña = component.getByPlaceholderText('Ingrese su contraseña')
        inputContraseña.value= '12345678'
        let inputContraseña2 = component.getByPlaceholderText('Repita su contraseña')
        inputContraseña2.value= '12345678'
        let button = component.getByText('Registrarse') 
        fireEvent.click(button)
    })
})
