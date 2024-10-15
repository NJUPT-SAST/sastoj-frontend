import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import OJSider from "../../components/Sider";

export const ProblemListPage = () => {
  const { Sider, Content } = Layout;

  return (
    <Layout>
      <Sider>
        <OJSider />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
