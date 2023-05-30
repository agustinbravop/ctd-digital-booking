import { useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import Titulo from "../../components/Titulo/Titulo";
import NuevoProductoCamposEntrada from "../../components/NuevoProductoCamposEntrada/NuevoProductoCamposEntrada";
import NuevoProductoCaracteristicas from "../../components/NuevoProductoCaracteristicas/NuevoProductoCaracteristicas";
import NuevoProductoPoliticas from "../../components/NuevoProductoPoliticas/NuevoProductoPoliticas";
import NuevoProductoImagenes from "../../components/NuevoProductoImagenes/NuevoProductoImagenes";
import Error from "../../components/Error/Error";
import { AuthContext } from "./../../context/AuthContext";
import { environment } from "../../constants";
import "./NuevoProductoPage.css";

function NuevoProductoPage() {
  const { BASE_URL, PRODUCTOS_ENDPOINT } = environment;

  const { auth } = useContext(AuthContext);
  useEffect(() => {}, [auth]);

  const [imagenes, setImagenes] = useState([]);
  const [formFeedback, setFormFeedback] = useState("");

  const history = useHistory();

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormFeedback("");
    const inputs = e.target.elements;

    const caract = [];
    for (let i = 0; i < inputs["caracteristicas"]?.length; i++) {
      if (inputs["caracteristicas"][i].checked) {
        caract.push({ idCaracteristica: inputs["caracteristicas"][i].id });
      }
    }
    let imgsAEnviar = imagenes;
    if (inputs["nombre-imagen"].value && inputs["url-imagen"].value) {
      imgsAEnviar = [
        ...imagenes,
        {
          titulo: inputs["nombre-imagen"].value.trim(),
          urlImagen: inputs["url-imagen"].value.trim(),
        },
      ];
      inputs["nombre-imagen"].value = "";
      inputs["url-imagen"].value = "";
    }

    if (
      inputs["categoria-producto"].value === "Elegir categoría" ||
      inputs["ciudad-producto"].value === "Elegir ciudad" ||
      imgsAEnviar.length === 0
    ) {
      setFormFeedback("Falta completar campos obligatorios");
    } else {
      const producto = {
        nombre: inputs["nombre-producto"].value.trim(),
        descripcion: inputs["descripcion-producto"].value.trim(),
        latitud: inputs["latitud-producto"].value.trim(),
        longitud: inputs["longitud-producto"].value.trim(),
        categoria: {
          idCategoria: inputs["categoria-producto"].value,
        },
        ciudad: {
          idCiudad: inputs["ciudad-producto"].value,
        },
        direccion: inputs["direccion-producto"].value.trim(),
        caracteristicas: caract,
        politicas: [
          {
            titulo: "Normas de la casa",
            descripcion: inputs["descripcion-normas-casa"].value.trim(),
          },
          {
            titulo: "Salud y seguridad",
            descripcion: inputs["descripcion-salud-seguridad"].value.trim(),
          },
          {
            titulo: "Políticas de cancelación",
            descripcion: inputs["descripcion-cancelacion"].value.trim(),
          },
        ],
        imagenes: imgsAEnviar,
      };

      fetch(`${BASE_URL}${PRODUCTOS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.jwt,
        },
        body: JSON.stringify(producto),
      })
        .then((res) => {
          if (res.status !== 201) {
            throw new Error();
          } else {
            history.push("/creacion-producto-exitosa");
          }
        })
        .catch((err) => {
          console.error(err);
          setFormFeedback(
            "Lamentablemente el producto no ha podido crearse. Por favor intente más tarde"
          );
        });
    }
  };

  if (!auth) return <Redirect to="/" />;

  return auth.roles?.includes("ROLE_ADMIN") ? (
    <LayoutGeneral>
      <Titulo titulo="Administración de productos" />

      <section className="contenedor-nuevo-prod">
        <h3>Crear producto</h3>
        <form onSubmit={handlerSubmit} id="form-nuevo-prod">
          <NuevoProductoCamposEntrada setFormFeedback={setFormFeedback} />
          <NuevoProductoCaracteristicas />
          <NuevoProductoPoliticas />
          <NuevoProductoImagenes
            imagenes={imagenes}
            setImagenes={setImagenes}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="btn btn-primario btn-crear-prod">
              Crear
            </button>
          </div>
          <Error info={formFeedback} />
        </form>
      </section>
    </LayoutGeneral>
  ) : (
    <Redirect to="/" />
  );
}

export default NuevoProductoPage;
