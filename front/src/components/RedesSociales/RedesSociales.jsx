import "./RedesSociales.css";

function RedesSociales({ className }) {
  return (
    <ul className={"redes-sociales " + (className ? className : "") }>
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
}

export default RedesSociales;
