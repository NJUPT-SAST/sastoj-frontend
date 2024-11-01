import { Table, Toast } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { getGroupsByPages, getUsersByPage } from "../../../api/admin.ts";
import { voidWarning } from "../../../../utils/voidWarning.ts";

//接收的数据类型
interface Group {
  id: string;
  name: string;
  childrens?: Partial<User>[]; //取名为childrens，防止和children冲突
}

interface GroupResponse {
  groups: Group[];
}

interface User {
  id: string;
  username: string;
  groupIds: string[];
  state: number;
}

interface UserResponse {
  users: User[];
}



const UserGroupManagement: React.FC = () => {
  //所有的用户组
  const [groups, setGroups] = useState<Group[]>();

  const fetchGroups = async () => {
    try {
      const res: GroupResponse = voidWarning(await getGroupsByPages(1, 10));
      const groups = res.groups.map((group) => ({
        id: group.id,
        name: group.name,
        childrens: [{}], // 默认的空子节点
      }));
      setGroups(groups);
    } catch (error) {
      console.error("Error fetching groups:", error);
      Toast.error({ content: "获取用户组数据失败", duration: 2 });
    }
  };
  useEffect(() => {
    fetchGroups().then();
  }, []);
  const handleExpand = async (expanded: boolean, thisGroup: Group) => {
    // console.log(expanded, thisGroup);
    if (
      expanded &&
      thisGroup.childrens!.length === 1 &&
      thisGroup.childrens![0].id === undefined
    ) {
      // 仅在首次展开时加载数据
      try {
        const userRes: UserResponse = voidWarning(
          await getUsersByPage(1, 100, [thisGroup.id])
        );
        const updatedGroups = groups!.map((group) =>
          group.id === thisGroup.id
            ? {
                ...group,
                childrens: userRes.users.map((user) => ({
                  ...user,
                  id: user.username, // 使用 username 作为 id
                })),
              }
            : group
        );
        // console.log(updatedGroups);
        setGroups(updatedGroups);
      } catch (error) {
        console.error("Error fetching users for group:", error);
        Toast.error({ content: "获取用户数据失败", duration: 2 });
      }
    }
  };

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户组名称",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={groups || []}
        rowKey="id"
        onExpand={(expanded, record) => {
          if (expanded !== undefined && record) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return handleExpand(expanded, record);
          }
          return false;
        }}
        expandedRowRender={(record) => (
          <Table
            columns={[
              {
                title: "用户名",
                dataIndex: "username",
                key: "username",
                //   render: (text, user) => (
                //     <Tooltip content="点击查看详情">
                //       <span
                //         onClick={() => handleTooltip(user)}
                //         style={{ cursor: "pointer" }}
                //       >
                //         {text}
                //       </span>
                //     </Tooltip>
                //   ),
              },
              {
                title: "所在用户组的Id",
                dataIndex: "groupIds",
                key: "groupIds",
              },
              {
                title: "状态",
                dataIndex: "state",
                key: "state",
              },
            ]}
            dataSource={record?.childrens || []}
            rowKey="id"
          />
        )}
      />
    </div>
  );
};
export default UserGroupManagement;

