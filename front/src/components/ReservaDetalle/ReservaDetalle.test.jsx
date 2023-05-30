import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ReservaDetalle from './ReservaDetalle'
import { ProdContext } from "./../../context/ProdContext";
import { BrowserRouter } from "react-router-dom";


describe('ReservaDetalle', () => {
    let component;
    let startDate= new Date(2020, 1, 1);
    let endDate= new Date(2020, 1, 2);
    let infoContext = {
        prod:{
            imagenes: [{
                urlImagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F624790871624098982%2F&psig=AOvVaw2Z_Z_Z_Z_Z_Z_Z_Z_Z_Z&ust=1585547990870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-gCFQAAAAAdAAAAABAE"
            }] ,
            categoria:{
                titulo: "Casa"
            }  , 
            nombre: "Casa",  
            ciudad: "Buenos Aires"
        }
    }
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProdContext.Provider value={infoContext}>
                    <ReservaDetalle startDate={startDate} endDate={endDate}/>
                </ProdContext.Provider>
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByText('Check in')
    })
})
