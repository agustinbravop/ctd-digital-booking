import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import CartelExito from "../../components/CartelExito/CartelExito";

function ReservaExitosa() {
  return (
    <LayoutGeneral>
      <CartelExito
        titulo={"¡Muchas gracias!"}
        desc={"Su reserva se ha realizado con éxito"}
      />
    </LayoutGeneral>
  );
}

export default ReservaExitosa;
