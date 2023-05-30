import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NotFoundPage from './NotFoundPage'
import { BrowserRouter } from "react-router-dom";


describe('NotFoundPage', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <NotFoundPage />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Ups! Parece que esta página no existe!')
    })
})
