import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ReservaCalendario from './ReservaCalendario'
import { BrowserRouter } from "react-router-dom";
import { ProdContext } from "../../context/ProdContext";

describe('ReservaCalendario', () => {
    let component;
    let infoContext = {
        reservas: []
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={infoContext}>
                    <ReservaCalendario />
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Seleccioná tu fecha de reserva')
    })
})
