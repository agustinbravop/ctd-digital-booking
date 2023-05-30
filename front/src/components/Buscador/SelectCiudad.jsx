import React from "react";
import Select from "react-select";
import "./SelectCiudad.css";

const OptionCiudad = ({ ciudad, pais, ...props }) => {
  return (
    <div className="option-ciudad" {...props}>
      <i className="fas fa-map-marker-alt"></i>
      <div className="option-ciudad__data">
        <p className="option-ciudad__data__ciudad">{ciudad}</p>
        <p>{pais}</p>
      </div>
    </div>
  );
};

function SelectCiudad({ ciudades, ...props }) {
  const options = ciudades?.map((c) => ({
    value: `${c.nombre} ${c.pais}`,
    id: c.idCiudad,
    label: <OptionCiudad key={c.idCiudad} ciudad={c.nombre} pais={c.pais} />,
  }));

  const styles = {
    control: (provided) => ({
      ...provided,
      border: 0,
      boxShadow: "none",
    }),
    option: (provided, state) => ({
      borderBottom: "1px solid var(--colorUno)",
      padding: "5px",
      margin: "1px",
      backgroundColor: state.isFocused ? "var(--colorFondoOscuro)" : ""
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: 40,
      paddingTop: 0,
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      padding: 0,
      margin: 0,
      border: "none",
    }),
    singleValue: (provided, state) => {
      return ({
      ...provided,
      opacity: state.selectProps.menuIsOpen ? 0.1 : 1,
    })},
    indicatorSeparator: () => ({
      opacity: 0,
    }),
    dropdownIndicator: () => ({
      opacity: 0,
    }),
  };

  return (
    <Select
      {...props}
      options={options}
      styles={styles}
      className="select-ciudad"
      openMenuOnFocus
    />
  );
}

export default SelectCiudad;
