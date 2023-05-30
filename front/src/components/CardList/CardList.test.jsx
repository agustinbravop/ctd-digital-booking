import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import CardList from './CardList'
import { BrowserRouter } from "react-router-dom";


describe('CardList', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CardList productos={[{
                    idProducto: 1 ,
                    imagenes: [] ,
                    categoria: {
                        titulo: 'Casa'
                     } ,
                    nombre: 'Casa bonita' ,
                    ciudad: 'Bogota' ,
                    descripcion: 'Casa a las afueras de la ciudad',
                    caracteristicas: [],
                    latitud: 4,
                    longitud: 72,
                    direccion: 'Calle falsa 123',
                }]}
                titulo={"Recomendaciones"} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Recomendaciones')
    })
})
