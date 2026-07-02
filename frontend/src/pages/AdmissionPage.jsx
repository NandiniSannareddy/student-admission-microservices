import StudentForm from "../components/StudentForm";

function AdmissionPage() {
  const style = {
    page: {
      minHeight: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f7fc"
    }
  };

  return (
    <div style={style.page}>
      <StudentForm />
    </div>
  );
}

export default AdmissionPage;