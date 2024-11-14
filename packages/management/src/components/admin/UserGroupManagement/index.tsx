import { Button, Form, Modal, Table, Toast, Tooltip } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import {
  addBatchUsers,
  getGroupsByPages,
  getUsersByPage,
} from "../../../api/admin.ts";
import { voidWarning } from "../../../../utils/voidWarning.ts";
import "./index.scss";
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
  const [visible, setVisible] = useState(false);
  const [ids, setIds] = useState<number[]>([]);
  const [number, setNumber] = useState(0);
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
          await getUsersByPage(1, 100, [thisGroup.id]),
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
            : group,
        );
        // console.log(updatedGroups);
        setGroups(updatedGroups);
      } catch (error) {
        console.error("Error fetching users for group:", error);
        Toast.error({ content: "获取用户数据失败", duration: 2 });
      }
    }
  };
  const handleTooltip = (user: User) => {
    console.log(user);
  };
  const handleBatchAddUser = () => {
    setVisible(true);
  };
  const handleAddUser = () => {
    console.log("添加用户");
  };
  const handleOk = async () => {
    if (ids.length === 0) {
      Toast.error({ content: "请输入用户组id", duration: 2 });
      return;
    }
    if (number <= 0) {
      Toast.error({ content: "请输入正确的用户数量", duration: 2 });
      return;
    }
    try {
      await addBatchUsers(ids, number);
      Toast.success({ content: "批量添加用户成功", duration: 2 });
      setVisible(false);
      // 重新获取用户组数据
      await fetchGroups();
    } catch (error) {
      console.error("Error adding batch users:", error);
      Toast.error({ content: "批量添加用户失败", duration: 2 });
    }
  };
  const handleCancel = () => {
    setVisible(false);
    // 清空表单数据
    setIds([]);
    setNumber(0);
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
      <div className="btn-group">
        <Button type="primary" className="btn" onClick={handleBatchAddUser}>
          批量添加用户
        </Button>
        <Button type="primary" className="btn" onClick={handleAddUser}>
          添加用户
        </Button>
      </div>

      <Modal
        title="批量添加用户"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        <Form>
          <Form.Input
            field="groupIds"
            placeholder="请输入用户组id，多个id用逗号隔开"
            label="用户组id"
            defaultValue=""
            onChange={(value) => {
              if (value) {
                setIds(
                  value
                    .split(",")
                    .map((id) => Number(id.trim()))
                    .filter((id) => !isNaN(id)),
                );
              } else {
                setIds([]);
              }
            }}
            className="input"
          />

          <Form.InputNumber
            field="userCount"
            placeholder="请输入用户数量"
            label="用户数量"
            defaultValue={number}
            onChange={(value) => setNumber(value as number)}
            className="input"
          />
        </Form>
      </Modal>

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
              {
                title: "操作",
                dataIndex: "operation",
                key: "operation",
                render: (user) => (
                  <Tooltip content="未完成">
                    <Button
                      type="primary"
                      onClick={() => handleTooltip(user as User)}
                    >
                      查看详情
                    </Button>
                  </Tooltip>
                ),
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
