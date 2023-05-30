import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import CardList from "../../components/CardList/CardList";
import { FavsContext } from "../../context/FavsContext";
import { useContext } from "react";
import Titulo from "../../components/Titulo/Titulo";
import DeadEnd from "../../components/DeadEnd/DeadEnd";
import { Redirect, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function MisFavoritosPage() {
  const { favs } = useContext(FavsContext);
  const { auth } = useContext(AuthContext);
  const { id_usuario } = useParams();

  if (!auth) return <Redirect to="/" />;
  if (auth.idUsuario !== Number(id_usuario)) return <Redirect to="/" />;

  return (
    <LayoutGeneral>
      {favs.length === 0 ? (
        <DeadEnd desc="Parece que aún no tienes ningún producto favorito" />
      ) : (
        <>
          <Titulo titulo="Mis favoritos" />
          <CardList productos={favs} />
        </>
      )}
    </LayoutGeneral>
  );
}

export default MisFavoritosPage;
