import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Paginador from './Paginador'
import { BrowserRouter } from "react-router-dom";
import { FiltroContext } from "../../context/FiltroContext";


describe('Paginador', () => {
    let component;
    let infoPaginador = {
        page: 1,
        totalPages: 20,
        handlePage: () => {},
    }
    let contextValue = {
        hayFiltro: false,
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <FiltroContext.Provider value={contextValue}>
                    <Paginador page={infoPaginador.page} totalPages={infoPaginador.totalPages} handlePage={infoPaginador.handlePage} />
                </FiltroContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getAllByText('1')
    })
    test('next page click', () => {
        let button = component.getAllByText('1')
        fireEvent.click(button[0])
    })
})
