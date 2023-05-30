import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

describe('Header', () => {
    let component;
    let authContext = {
        auth: {
            roles: ['admin']
        }, 
        logout: () => {},
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <AuthContext.Provider value={authContext}>
                    <Header />
                </AuthContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Sentite como en tu hogar')
    })
    test('click header', () => {
        const { getByAltText } = component;
        fireEvent.click(getByAltText('Menú'))
    } )
    test('click logout', () => {
        const { getByText } = component;
        fireEvent.click(getByText('cerrar sesión'))
    })
    test('open collapse', () => {
        const { getByTestId } = component;
        fireEvent.click(getByTestId('open-collapse'))
        
    })
})
