import DeadEnd from "../../components/DeadEnd/DeadEnd";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";

function NotFoundPage() {
  return (
    <LayoutGeneral>
      <DeadEnd
        titulo="404"
        desc="Ups! Parece que esta página no existe!"
        btnText="Volver al Home"
      />
    </LayoutGeneral>
  );
}

export default NotFoundPage;
