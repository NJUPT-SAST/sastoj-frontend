import { Button, Col, Row, Typography } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
import { IconExit } from "@douyinfe/semi-icons";
import Logo from "/LogoNoText.svg";
import "./index.scss";
const { Title } = Typography;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OJHeader(props: any) {
  const navigate = useNavigate();
  return (
    <div className="header-content">
      <Row type="flex" justify="center" align="middle">
        <Col className="sast-logo-wrapper" span={5}>
          <img className="sast-logo" src={Logo} alt="SAST" />
        </Col>
        <Col className="title-wrapper" span={12}>
          <Title heading={5}>{props.text}</Title>
        </Col>
        <Col className="username-wrapper" span={2}>
          <Typography.Title heading={6}>
            {props.logout ? localStorage.getItem("username") : null}
          </Typography.Title>
        </Col>
        <Col className="logout-wrapper" span={3}>
          {props.logout ? (
            <Button
              theme="borderless"
              icon={<IconExit size="large" />}
              style={{
                color: "var(--semi-color-text-2)",
                marginRight: "12px",
              }}
              onClick={async () => {
                localStorage.clear();
                navigate("/");
              }}
            >
              注销
            </Button>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
