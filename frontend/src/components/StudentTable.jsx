import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function StudentTable() {

  const [year, setYear] = useState("All");
  const [students, setStudents] = useState([]);

  const fetchStudents = async (selectedYear = "All") => {
  try {

    let url = `${API_URL}/api/students`;

    if (selectedYear !== "All") {
      url += `?year=${selectedYear}`;
    }

    const response = await axios.get(url);

    setStudents(response.data.students);

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchStudents();
}, []);


  const styles = {

    container: {
      background: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.15)",
    },

    title: {
      color: "#1e3a8a",
      marginBottom: "20px",
    },

    select: {
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "12px",
    },

    td: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Details</h2>

      <select
        style={styles.select}
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          fetchStudents(e.target.value);
        }}
      >
        <option>All</option>
        <option>1st Year</option>
        <option>2nd Year</option>
        <option>3rd Year</option>
        <option>4th Year</option>
      </select>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Year</th>
            <th style={styles.th}>Fee</th>
            <th style={styles.th}>Library Card</th>
            <th style={styles.th}>Hostel Room</th>
            <th style={styles.th}>Email Sent Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={styles.td}>{student.name}</td>
              <td style={styles.td}>{student.department}</td>
              <td style={styles.td}>{student.email}</td>
              <td style={styles.td}>{student.year}</td>
              <td style={styles.td}>{student.fee}</td>
              <td style={styles.td}>{student.libraryCardID}</td>
              <td style={styles.td}>{student.hostelRequired ? student.hostelRoomNumber : "Not a hostler"}</td>
              <td style={styles.td}>{student.emailSent ? "Sent" : "Not Sent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;