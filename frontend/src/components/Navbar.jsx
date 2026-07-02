import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    nav: {
      background: "#1e3a8a",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
    },

    title: {
      fontSize: "24px",
      fontWeight: "bold"
    },

    links: {
      display: "flex",
      gap: "25px"
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "17px",
      fontWeight: "500"
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.title}>Student Admission System</div>

      <div style={styles.links}>
        <Link style={styles.link} to="/">
          Admission
        </Link>

        <Link style={styles.link} to="/students">
          Students
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;