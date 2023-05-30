import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import DeadEnd from './DeadEnd'
import { BrowserRouter } from "react-router-dom";


describe('DeadEnd', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <DeadEnd desc="Aún no tienes ninguna reserva"/>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Aún no tienes ninguna reserva')
    })
})
