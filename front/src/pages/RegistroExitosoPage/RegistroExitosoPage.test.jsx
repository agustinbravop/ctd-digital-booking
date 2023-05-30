import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import RegistroExitosoPage from './RegistroExitosoPage'
import { MemoryRouter, Route } from "react-router-dom";


describe('RegistroExitosoPage', () => {
    let component;
    beforeEach(() => {
        component = ({ token }) => (
            render(
                <MemoryRouter initialEntries={[`/auth/confirm-account/${token}`]}>
                    <Route path="/auth/confirm-account/:token">
                        <RegistroExitosoPage />
                    </Route>
                </MemoryRouter>
            ));
    });

    test('renders content', () => {
        component('fhdasjkfh-fasdf').getByText('Sentite como en tu hogar')
    })
})
