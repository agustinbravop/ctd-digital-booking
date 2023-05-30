import React, { useState, useContext } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { environment } from "../../constants";
import "./Login.css";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  const [field, meta] = useField(props);
  const isBad = meta.touched && meta.error;

  return (
    <div className="form-group">
      <label className="label-required" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={"text-input input" + (isBad ? " input-feedback" : "")}
        {...field}
        {...props}
      />

      {isBad && <small className="small-feedback">{meta.error}</small>}
    </div>
  );
};

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPass, setShowPass] = useState(false);
  const isBad = meta.touched && meta.error;

  return (
    <div className="form-group form-group-pass">
      <label className="label-required" htmlFor={props.id}>
        {label}
      </label>
      <input
        className={"text-input input" + (isBad ? " input-feedback" : "")}
        {...field}
        {...props}
        type={showPass ? "text" : "password"}
      />
      <i
        className={
          "show-pass-icon " + (showPass ? "far fa-eye" : "far fa-eye-slash")
        }
        onClick={() => setShowPass(!showPass)}
        title="Mostrar contraseña"
      ></i>

      {isBad && <small className="small-feedback">{meta.error}</small>}
    </div>
  );
};

const Login = () => {
  const { BASE_URL } = environment;
  const { authenticate } = useContext(AuthContext);
  const history = useHistory();
  const [badRequestMsg, setBadRequestMsg] = useState("");
  let forwardUrl = "/";
  if (history.location.state?.loginReserva !== undefined) {
    forwardUrl = history.location.state?.destination;
  }

  return (
    <div className="contenedor-login">
      {history.location.state?.loginReserva !== undefined && (
        <div className="mje-reserva">
          <i className="fas fa-exclamation-circle"></i> Para realizar una
          reserva necesita estar logueado
        </div>
      )}
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("El email es inválido")
            .required("Este campo es obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener más de 6 caracteres")
            .required("Este campo es obligatorio"),
        })}
        onSubmit={async (values) => {
          // Valores capturados del form
          const usuario = {
            email: values.email,
            contrasena: values.password,
          };

          const settings = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(usuario),
          };

          try {
            // POST con los datos del usuario
            const res = await fetch(`${BASE_URL}/auth/login`, settings);
            const data = await res.json();
            if (data.jwt) {
              // Si devuelve un token lo guardo en Storage y Context
              authenticate(data);
              // Redirección a Home
              history.push(forwardUrl);
            } else {
              // Feedback de que el usuario no existe
              setBadRequestMsg(
                "Sus credenciales son inválidas. Por favor, vuelva a intentarlo"
              );
            }
          } catch (err) {
            setBadRequestMsg("Error al intentar iniciar sesión")
            console.error(err);
          }
        }}
      >
        <Form className="form-login">
          <h1>Iniciar sesión</h1>
          <TextInput
            label="Correo Electrónico"
            name="email"
            type="email"
            id="email"
            placeholder="Ingrese su correo electrónico"
          />
          <PasswordInput
            label="Contraseña"
            name="password"
            id="password"
            placeholder="Ingrese su contraseña"
          />

          {badRequestMsg && (
            // si badRequestMsg != "", hay msg de error del back
            <p className="form-feedback">{badRequestMsg}</p>
          )}

          <button className="btn btn-primario btn-sm" type="submit">
            Ingresar
          </button>

          <p className="text-muted">
            ¿Aún no tienes cuenta?{" "}
            <Link to="/registro" className="link">
              Regístrate
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
