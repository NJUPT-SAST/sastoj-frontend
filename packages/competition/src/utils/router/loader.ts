import { redirect } from "react-router-dom";

const loader = async () => {
  //这里进行判断，如果未登录挑跳转到login界面，登录了，挑战到home界面
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("loader");
    return redirect("/login");
  }
  return null;
};

export default loader;
