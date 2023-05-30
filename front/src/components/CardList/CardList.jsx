import Card from "../Card/Card";
import "./CardList.css";

function CardList({ productos, titulo, ...props }) {

  return (
    <section className="card-list" {...props}>
      <h2>{titulo}</h2>
      <ul>
        {productos?.map((prod) => (
          <Card key={prod.idProducto} producto={prod} />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
