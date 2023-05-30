import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render,  fireEvent} from '@testing-library/react'
import ProductoImagenesGaleriaMini from './ProductoImagenesGaleriaMini'
import { BrowserRouter } from "react-router-dom";


describe('ProductoImagenesGaleria', () => {
    let component;
    const imgList = [{
        img: "",
        titulo: "Imagen de prueba"
    }]
    beforeEach(() => {
        component = render(
            <BrowserRouter>
                <ProductoImagenesGaleriaMini imgList={imgList} />
            </BrowserRouter>
        );
    });

    test('renders content', () => {
        component.getByAltText('Imagen de prueba')
    })
    

})
