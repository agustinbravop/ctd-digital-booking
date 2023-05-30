import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoImagenes from './ProductoImagenes'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";


describe('ProductoImagenes', () => {
    let component;
    let contextValue = {
        prod: {
            imagenes: [
                {
                    urlImagen: '',
                    titulo: 'Imagen 3 de prueba',
                    img: ''
                },
                {
                    urlImagen: '',
                    titulo: 'Imagen 4 de prueba',
                    img: ''
                },
                {
                    urlImagen: '',
                    titulo: 'Imagen 5 de prueba',
                    img: ''
                },
                {
                    urlImagen: '',
                    titulo: 'Imagen 6 de prueba',
                    img: ''
                },
                {
                    urlImagen: '',
                    titulo: 'Imagen 7 de prueba',
                    img: ''
                },
        ]
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={contextValue}>
                    <ProductoImagenes />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByAltText('Imagen 3 de prueba')
    })
    /*test('media query', () => {
        
        browser.setWindowWidth(700)
        component.getByAltText('Imagen 4 de prueba')
        component.getByText('Ver más')
    })*/
})
