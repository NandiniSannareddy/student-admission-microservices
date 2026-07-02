import StudentTable from "../components/StudentTable";

function StudentsPage() {
  const style = {
    page: {
      background: "#f4f7fc",
      minHeight: "90vh",
      padding: "40px"
    }
  };

  return (
    <div style={style.page}>
      <StudentTable />
    </div>
  );
}

export default StudentsPage;