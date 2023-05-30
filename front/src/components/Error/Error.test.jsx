import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Error from './Error'
import { BrowserRouter } from "react-router-dom";


describe('Error', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Error info="Error al cargar los productos" />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Error al cargar los productos')
    })
})
