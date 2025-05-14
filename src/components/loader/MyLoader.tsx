import "./style.css";
const MyLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      margin: 0,
    }}
  >
    <div className="loader">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="logo-container">
        <img
          src="https://eayni.org/images/ksa/logo-app.png"
          alt="Logo Placeholder"
          className="logo-placeholder"
        />
      </div>
    </div>
  </div>
);

export default MyLoader;
