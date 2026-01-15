import { Navigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/login" />;
  }

  return <h1>Welcome to the Dashboard!</h1>;
};

export default Dashboard;
