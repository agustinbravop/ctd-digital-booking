import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import SelectCiudad from './SelectCiudad'
import { BrowserRouter } from "react-router-dom";


describe('SelectCiudad', () => {
    let component;
    let info = [{
            ciudad: 'España', 
            pais: 'Madrid',
            idCiudad: '1'
        },
        {
            ciudad: 'Paris', 
            pais: 'Francia',
            idCiudad: '2'
        }
    ];
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <SelectCiudad ciudades={info} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Select...')
    })
})
