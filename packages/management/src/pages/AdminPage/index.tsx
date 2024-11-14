import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import AdminSider from "../../components/admin/AdminSider";

export const AdminPage = () => {
  const { Sider, Content } = Layout;

  return (
    <Layout>
      <Sider>
        <AdminSider />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
