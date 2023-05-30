import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import CardReservaList from './CardReservaList'
import { BrowserRouter } from "react-router-dom";


describe('CardReservaList', () => {
    let component;
    let reservas = [{
        idReserva: 1,
        fechaInicio: '2021-09-25',
        fechaFin: '2021-09-25',
        producto: {
            idProducto: 1,
            categoria: {
                titulo: 'Casa',
            },
            nombre: 'Casa Bonita',
            imagenes: [],
            ciudad: 'Bogotá'
        }
    },
    {
        idReserva: 2,
        fechaInicio: '2021-10-25',
        fechaFin: '2021-11-25',
        producto: {
            idProducto: 1,
            categoria: {
                titulo: 'Casa',
            },
            nombre: 'Casa Bonita',
            imagenes: [],
            ciudad: 'Bogotá'
        }
    },
    {
        idReserva: 3,
        fechaInicio: '2021-10-25',
        fechaFin: '2021-11-25',
        producto: {
            idProducto: 1,
            categoria: {
                titulo: 'Casa',
            },
            nombre: 'Casa Bonita',
            imagenes: [],
            ciudad: 'Bogotá'
        }
    },
    ]
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CardReservaList titulo='Mis reservas' reservas={reservas} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Mis reservas')
    })
})
