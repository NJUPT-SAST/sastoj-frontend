import { Layout } from "@douyinfe/semi-ui";
import OJHeader from "./components/Header";
import { Outlet } from "react-router-dom";
// import Login from "@sast/oj-login/src/page"
const { Header } = Layout;
function App() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <OJHeader text="SASTOJ管理系统" logout={true} />
        </Header>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
      {/* <Login></Login> */}
    </>
  );
}

export default App;
