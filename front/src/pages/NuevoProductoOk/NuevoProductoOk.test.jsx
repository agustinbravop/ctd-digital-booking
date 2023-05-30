import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import NuevoProductoOk from './NuevoProductoOk'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


describe('NuevoProductoOk', () => {
    let component;
    let infoContext = {
        auth: {
            roles: 'ROLE_ADMIN'
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={infoContext}>
                    <NuevoProductoOk />
                </AuthContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Tu propiedad se ha creado con éxito.')
    })
})
