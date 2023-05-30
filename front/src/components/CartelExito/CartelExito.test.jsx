import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import CartelExito from './CartelExito'
import { BrowserRouter } from "react-router-dom";


describe('CartelExito', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <CartelExito />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Ok')
    })
})
