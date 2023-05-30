import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent, } from '@testing-library/react'
import NuevoProductoCaracteristicas from './NuevoProductoCaracteristicas'
import { BrowserRouter } from "react-router-dom";


describe('NuevoProductoCaracteristicas', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <NuevoProductoCaracteristicas />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Agregar atributos')
        component.getByText('Crear un atributo nuevo:')
    })

    test('click agregar Nuevo', () => {
        let button = component.getByTitle('Agregar nuevo')
        fireEvent.click(button)
    })
    test('click agregar Nuevo', () => {
        let input = component.getByPlaceholderText('Wifi')
        input.value = 'Wifi'
        let inputIcono = component.getByPlaceholderText('fas fa-wifi')
        inputIcono.value = 'fas fa-wifi'
        let button = component.getByTitle('Agregar nuevo')
        fireEvent.click(button)
    })
})
