import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Titulo from './Titulo'
import { BrowserRouter } from "react-router-dom";


describe('Titulo', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <Titulo titulo="Mis favoritos"/>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Mis favoritos')
    })
    test('click volver', () => {
        const button = component.getByTitle('Volver')
        fireEvent.click(button)
    })
})
