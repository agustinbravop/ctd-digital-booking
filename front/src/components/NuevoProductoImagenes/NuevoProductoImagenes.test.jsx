import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoImagenes from './NuevoProductoImagenes'
import { BrowserRouter } from "react-router-dom";


describe('NuevoProductoImagenes', () => {
    let component;
    let imagenes = [{
        titulo: 'Imagen 1',
        urlImagen: ''
    }]
    let setImagenes = () => { }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <NuevoProductoImagenes imagenes={imagenes}
              setImagenes={setImagenes}/>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('URL de la imagen')
    })

    test('onSubmit form', () => {
        let button = component.queryAllByTitle('Agregar nuevo')
        fireEvent.click(button[button.length - 1])
    })
})
