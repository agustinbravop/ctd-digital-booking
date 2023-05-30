import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import MisFavoritosPage from './MisFavoritosPage'
import { MemoryRouter, Route } from "react-router-dom";
import { FavsContext } from "../../context/FavsContext";
import { AuthContext } from "../../context/AuthContext";


describe('FavoritosPage', () => {
    let component;
    let infoContext = {
        favs: []
    }
    let authContext = {
        auth: {
            idUsuario: 1,
        }
    }
    beforeEach(() => {
        component = ({ userId }) => (
            render(
                <MemoryRouter initialEntries={[`/usuario/${userId}/favoritos`]}>
                    <AuthContext.Provider value={authContext}>
                        <FavsContext.Provider value={infoContext}>
                            <Route path="/usuario/:id_usuario/favoritos">
                                <MisFavoritosPage />
                            </Route>
                        </FavsContext.Provider>
                    </AuthContext.Provider>
                </MemoryRouter>
            ));
    });

    test('renders content', () => {
        component({ userId: 1 }).getByText('Sentite como en tu hogar');
    })
})
