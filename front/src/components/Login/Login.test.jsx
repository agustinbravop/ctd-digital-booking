import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent, act} from '@testing-library/react'
import Login from './Login'
import { BrowserRouter } from "react-router-dom";


describe('Login', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByLabelText('Correo Electrónico')
        component.getByLabelText('Contraseña')
        component.getByPlaceholderText('Ingrese su correo electrónico')
    })
    
    test('clicking button login', () => {
        let inputEmail = component.getByPlaceholderText('Ingrese su correo electrónico')
        inputEmail.value = 'bruno@gmail.com'
        let inputPassword = component.getByPlaceholderText('Ingrese su contraseña')
        inputPassword.value = '12345678'
        const botonIngresar = component.getByText('Ingresar')
        fireEvent.click(botonIngresar)    
    })

    test('clicking show password', () => {
        const botonIngresar = component.getByTitle('Mostrar contraseña')
        fireEvent.click(botonIngresar)    
    })
})
