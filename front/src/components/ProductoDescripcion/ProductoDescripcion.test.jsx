import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoDescripcion from './ProductoDescripcion'
import { BrowserRouter } from "react-router-dom";


describe('ProductoDescripcion', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProductoDescripcion />
            </BrowserRouter>
        );
    });
    test('renders content', () => {
        component.getAllByText('')
    })
})
