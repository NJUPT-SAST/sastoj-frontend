import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import OJHeader from "../../components/Header";
import "./index.scss";
const { Header } = Layout;

const LayoutPage = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <OJHeader text="SASTOJ管理系统" logout={true} />
        </Header>
        <Outlet />
      </Layout>
    </>
  );
};
export default LayoutPage;
