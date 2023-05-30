import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoPoliticas from './NuevoProductoPoliticas'
import { BrowserRouter } from "react-router-dom";


describe('NuevoProductoPoliticas', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <NuevoProductoPoliticas />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Políticas del producto')
    })
})
