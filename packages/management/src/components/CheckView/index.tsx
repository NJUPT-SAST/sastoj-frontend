import { IconChevronLeft } from "@douyinfe/semi-icons";
import { Button } from "@douyinfe/semi-ui";

const CheckView = () => {
  return (
    <>
      <Button
        icon={<IconChevronLeft />}
        theme="light"
        type="tertiary"
        onClick={() => {
          history.go(-1);
        }}
      >
        {" "}
        返回所有已批改题目
      </Button>
    </>
  );
};
export default CheckView;
