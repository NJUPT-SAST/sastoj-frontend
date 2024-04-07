import { Input, Button } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useState } from "react";
import Success from "./icon/success";
import Error from "./icon/error";

const LoginCardContent = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isSignError] = useState<boolean>(false);
  const [isSignSuccess, setIsSignSuccess] = useState<boolean>(false);

  const test = () => {
    setIsClicked(true);
    //这里模仿实际的请求，在2000ms之后登录失败
    // setTimeout(() => {
    //   setIsSignError(true);
    //   // showToast({ type: "error", content: "昵称或者密码错误" });
    //   setTimeout(() => {
    //     setIsSignError(false);
    //     setIsClicked(false);
    //   }, 2000);
    // }, 2000);
    //这里模仿请求，在2000ms之后登录成功
    setTimeout(() => {
      setIsSignSuccess(true);
    }, 4000);
  };
  return (
    <div className={styles["main-content-container"]}>
      <Input label="昵称" isFillFather={true} id="userName"></Input>
      <Input
        mode="password"
        label="密码"
        isFillFather={true}
        id="password"
      ></Input>
      <div className={styles["button-container"]}>
        <Button
          className={`${styles["sign-in-button"]} 
      ${styles[isClicked ? "clicked" : ""]}
      ${styles[isSignError ? "error" : ""]}
      ${styles[isSignSuccess ? "success" : ""]}`}
          onClick={test}
          disabled={isClicked}
          disabledShadow={false}
        >
          {!isClicked && <span>Sign In</span>}
          {isSignSuccess && <Success />}
          {isSignError && <Error />}
        </Button>
      </div>
    </div>
  );
};

export default LoginCardContent;
