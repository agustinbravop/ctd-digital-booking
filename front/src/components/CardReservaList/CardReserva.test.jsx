import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import CardReserva from './CardReserva'
import { BrowserRouter } from "react-router-dom";


describe('CardReserva', () => {
    let component;
    let res = {
        fechaInicio : '2021-09-28',
        fechaFin :    '2021-09-28',
        producto: { 
            idProducto : 1, 
            categoria:{
                titulo: 'Casa',
            },  
            nombre : 'Casa Bonita', 
            imagenes: [], 
            ciudad: 'Bogotá' 
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CardReserva reserva={res} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Casa Bonita')
    })
    test('Click star', () => {
        fireEvent.click(component.getByTestId('puntuacion4'))
    })
})
