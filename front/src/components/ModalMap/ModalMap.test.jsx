import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ModalMap from './ModalMap'
import { BrowserRouter } from "react-router-dom";


describe('ModalMap', () => {
    let component;
    let nombre= 'Casa bonita' 
    let ciudad= {
       nombre: 'Medellin',
       pais: 'Colombia'
    }
    let latitud= 4.6 
    let longitud= -74.0
    let openMap= true
    let handleMap= () => {}
    
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ModalMap openMap={openMap} handleMap={handleMap} nombre={nombre} latitud={latitud} longitud={longitud} ciudad={ciudad} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Medellin, Colombia')
    })
})
