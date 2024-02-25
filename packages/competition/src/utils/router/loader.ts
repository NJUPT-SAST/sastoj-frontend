// import { redirect } from "react-router-dom";

const loader = () => {
  //   const user = await getUser();
  const user = false;
  console.log("is loading");
  if (!user) {
    // return redirect("/login");
  }
  return null;
};

export default loader;
