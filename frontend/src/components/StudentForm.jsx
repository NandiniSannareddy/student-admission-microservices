import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    year: "",
    hostelRequired: "No",
    address: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${API_URL}/api/students/register`,
      {
        name: student.name,
        email: student.email,
        phone: student.mobile,
        department: student.department,
        year: student.year,
        hostelRequired: student.hostelRequired === "Yes",
        address: student.address,
      }
    );

    alert(response.data.message);

    // Clear the form
    setStudent({
      name: "",
      email: "",
      mobile: "",
      department: "",
      year: "",
      hostelRequired: "No",
      address: "",
    });

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message || "Something went wrong!"
    );
  }
};

  const styles = {
    card: {
      width: "500px",
      background: "#fff",
      padding: "35px",
      borderRadius: "10px",
      boxShadow: "0px 0px 15px rgba(0,0,0,0.15)",
    },

    title: {
      textAlign: "center",
      marginBottom: "25px",
      color: "#1e3a8a",
    },

    label: {
      display: "block",
      marginBottom: "5px",
      marginTop: "15px",
      fontWeight: "bold",
    },

    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "15px",
      boxSizing: "border-box",
    },

    select: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },

    textarea: {
      width: "100%",
      height: "80px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      resize: "none",
      boxSizing: "border-box",
    },

    radioContainer: {
      display: "flex",
      gap: "20px",
      marginTop: "10px",
    },

    button: {
      width: "100%",
      marginTop: "25px",
      padding: "12px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Student Admission Form</h2>

      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Student Name</label>
        <input
          style={styles.input}
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Mobile</label>
        <input
          style={styles.input}
          name="mobile"
          value={student.mobile}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Department</label>
        <select
          style={styles.select}
          name="department"
          value={student.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>Mechanical</option>
          <option>Civil</option>
        </select>

        <label style={styles.label}>Year</label>
        <select
          style={styles.select}
          name="year"
          value={student.year}
          onChange={handleChange}
          required
        >
          <option value="">Select Year</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <label style={styles.label}>Hostel Required</label>

        <div style={styles.radioContainer}>
          <label>
            <input
              type="radio"
              name="hostelRequired"
              value="Yes"
              checked={student.hostelRequired === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="hostelRequired"
              value="No"
              checked={student.hostelRequired === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <label style={styles.label}>Address</label>

        <textarea
          style={styles.textarea}
          name="address"
          value={student.address}
          onChange={handleChange}
          required
        />

        <button style={styles.button}>
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;