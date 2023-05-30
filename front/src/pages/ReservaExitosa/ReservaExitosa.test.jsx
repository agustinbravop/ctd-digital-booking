import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ReservaExitosa from './ReservaExitosa'
import { BrowserRouter } from "react-router-dom";


describe('ReservaExitosa', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ReservaExitosa />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Su reserva se ha realizado con éxito')
    })
})
