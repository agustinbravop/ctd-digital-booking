import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Card from './Card'
import { BrowserRouter } from "react-router-dom";
import { FavsContext } from "../../context/FavsContext";


describe('Card', () => {
    let component;
    let info = {
        idProducto: "11111", 
        imagenes: [''], 
        categoria: {
            titulo: 'Casa'
        },
        nombre: 'Casa de verano', 
        ciudad: 'Buenos Aires',
        descripcion: 'Casa de verano en el centro de la ciudad',
        caracteristicas: [{
            nombre: 'Cuartos',
            urlIcono: '',
        }]
    }

    let contextValue = {
        favs: ["11"],
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FavsContext.Provider value={contextValue}>
                <Card producto={info} />
                </FavsContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Casa de verano en el centro de la ciudad')
    })
    test('toogle', () => {
        let button = component.getByText('Ver más...')
        fireEvent.click(button)
        button = component.getByText('Ver menos...')
        fireEvent.click(button)
    })
})
