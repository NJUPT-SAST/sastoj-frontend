import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import JudgerSider from "../../components/JudgerSider";

const JudgerPage = () => {
  const { Sider, Content } = Layout;

  return (
    <Layout>
      <Sider>
        <JudgerSider />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
export default JudgerPage;
