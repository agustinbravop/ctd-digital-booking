import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoCreado from './NuevoProductoCreado'
import { BrowserRouter } from "react-router-dom";


describe('NuevoProductoCreado', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <NuevoProductoCreado />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Tu propiedad se ha creado con éxito.')
    })
})
