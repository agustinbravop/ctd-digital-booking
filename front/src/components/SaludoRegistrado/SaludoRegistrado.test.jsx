import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import SaludoRegistrado from './SaludoRegistrado'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";


describe('SaludoRegistrado', () => {
    let component;
    let contextValue = {
        auth: {
            firstName: 'Juan',
            lastName: 'Perez',
        }, 
        logout: null
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={contextValue}>
                    <SaludoRegistrado />
                </AuthContext.Provider>
            </BrowserRouter>

        );
    });

    test('renders content', () => {
        component.getByText('Hola,')
    })
})
