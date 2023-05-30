import { createContext, useState } from 'react';

export const ProdContext = createContext({
    prod: null,
    reservas: [null],
    newProd: (producto, reservas) => {},
});

const { Provider } = ProdContext;

export const ProdProvider = ({ children }) => {
    const [prod, setProd] = useState(null); 
    const [reservas, setReservas] = useState(null);

    const newProd = (producto, reservas) => {
        setProd(producto);
        setReservas(reservas);
    }

    return <Provider value={{ prod, reservas, newProd }}>{children}</Provider>
}
