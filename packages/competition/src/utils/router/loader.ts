import { redirect } from "react-router-dom";

const loader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
};

export default loader;

