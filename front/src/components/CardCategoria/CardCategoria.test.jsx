import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import CardCategoria from './CardCategoria'
import { BrowserRouter } from "react-router-dom";


describe('CardCategoria', () => {
    let component;
    let info = {
        idCategoria: "apartamento", 
        titulo:"Apartamentos" ,
        urlImagen:"", 
        descripcion:"Apartamento nuevo"
    }
    let handleFiltrar = () => {}
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CardCategoria categoria={info} handleFiltrar={handleFiltrar} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Apartamentos')
    })
    test('Click categoria', () => {
        let article = document.querySelector('#apartamento');
        fireEvent.click(article);
    })
})
