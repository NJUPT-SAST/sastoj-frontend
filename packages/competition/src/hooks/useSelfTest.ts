import { useSwrSelfTest } from "../swrHooks/selfTest";

export const useSelfTest = () => {
  const { trigger } = useSwrSelfTest();

  const selfTest = () => {
    trigger()
      .then((response) => {
        // TODO: 使用返回的 pretestId 进行测试
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return selfTest;
};
