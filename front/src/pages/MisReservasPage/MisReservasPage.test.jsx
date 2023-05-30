import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import MisReservasPage from './MisReservasPage'
import { MemoryRouter, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


describe('MisReservasPage', () => {
    let component;
    const authContext = {
        auth: {
            idUsuario: 1,
        }
    }
    beforeEach(() => {
        component = ({ userId }) => (
            render(
                <MemoryRouter initialEntries={[`/usuario/${userId}/reservas`]}>
                    <AuthContext.Provider value={authContext}>
                        <Route path="/usuario/:id_usuario/reservas">
                            <MisReservasPage reservas={[]} />
                        </Route>
                    </AuthContext.Provider>
                </MemoryRouter>
            ));
    });

    test('renders content', () => {
        component({ userId: 1 }).getByText('Sentite como en tu hogar');
    })
})
