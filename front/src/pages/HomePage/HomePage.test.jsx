import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { FiltroContext } from "../../context/FiltroContext";


describe('Buscador', () => {
    let component;
    let infoContext = {
        filtros: { porCategoria: "Casa" }, 
        hayFiltros: true,
        resultados: [], 
        newResultados: () => {},
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FiltroContext.Provider value={infoContext}>
                    <HomePage />
                </FiltroContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Buscar por categoría')
    })
})
