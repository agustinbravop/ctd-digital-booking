import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Buscador from './Buscador'
import { BrowserRouter } from "react-router-dom";


describe('Buscador', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Buscador />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Buscá ofertas en casas, departamentos y mucho más')
    })
    test('Button buscar', () => {
       let button = component.getByText('Buscar')
       fireEvent.click(button)
    })
    test('Select ciudades', () => {
        let select = document.querySelector('#ciudad')
        fireEvent.change(select, {target: {value: 'Buenos Aires'}})
     })
     test('Cambiar fechas', () => {
        let input = component.getByPlaceholderText('Check in - Check out')
        fireEvent.change(input, {target: {value: '01/01/2020'}}) 
     })
})
