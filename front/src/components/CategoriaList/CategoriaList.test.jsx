import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import CategoriaList from './CategoriaList'
import { BrowserRouter } from "react-router-dom";


describe('CategoriaList', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CategoriaList title="Buscar por categoría" />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Buscar por categoría')
    })
    test('clean filter', () => {
        let button = component.getByText('Ver todo')
        fireEvent.click(button)
    })
})
