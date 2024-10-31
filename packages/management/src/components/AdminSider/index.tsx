import {IconChevronLeft, IconHistogram, IconIdCard, IconSetting} from "@douyinfe/semi-icons";
import {Nav} from "@douyinfe/semi-ui";
import {useNavigate} from "react-router-dom";

export default function AdminSider() {
    const navigate = useNavigate();
    return (
        <>
            <Nav
                style={{maxWidth: 220, height: "100%"}}
                className="sidebar"
                onSelect={({itemKey}) => {
                    // console.log(itemKey);
                    if (itemKey === "back") {
                        navigate("/admin/contest");
                    } else {
                        navigate(itemKey.toString());
                    }
                }}
                items={[
                    {
                        itemKey: "back",
                        text: "返回上页",
                        icon: <IconChevronLeft size="large"/>,
                    },
                    {
                        itemKey: "edit",
                        text: "编辑当前比赛",
                        icon: <IconHistogram size="large"/>,
                    },
                    {
                        itemKey: "question",
                        text: "题目管理",
                        icon: <IconSetting size="large"/>,
                    },
                    {
                        itemKey: "student",
                        text: "用户组管理",
                        icon: <IconIdCard size="large"/>,
                    },
                ]}
                footer={{
                    collapseButton: true,
                }}
            />
        </>
    );
}
