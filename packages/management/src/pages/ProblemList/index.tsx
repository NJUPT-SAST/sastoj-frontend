import { Layout } from "@douyinfe/semi-ui";
import OJSider from "../../components/Sider";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const ProblemList = () => {
  return (
    <>
      <Sider>
        <OJSider />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};
export default ProblemList;