const Error = ({ info, ...props }) => {
  const styleErrorContainer = {
    padding: 10,
    textAlign: "center",
  };
  const styleError = {
    backgroundColor: "#ffcacf",
    border: "1px solid var(--colorError)",
    borderRadius: 5,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    color: "var(--colorError)",
    fontWeight: "bold",
    padding: 10,
  };

  return (
    info && (
      <div style={styleErrorContainer} {...props}>
        <h4 style={styleError}>
          <i style={{ fontSize: 20 }} className="fas fa-exclamation-circle"></i>
          {info}
        </h4>
      </div>
    )
  );
};

export default Error;
