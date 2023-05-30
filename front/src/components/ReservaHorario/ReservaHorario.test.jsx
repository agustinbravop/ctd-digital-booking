import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ReservaHorario from './ReservaHorario'
import { BrowserRouter } from "react-router-dom";


describe('ReservaHorario', () => {
    let component;
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ReservaHorario />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM')
    })
})
