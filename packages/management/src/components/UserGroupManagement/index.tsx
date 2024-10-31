import {Table, Toast} from "@douyinfe/semi-ui";
import {useEffect, useState} from "react";
import {getGroupsByPages, getUsersByPage} from "../../api/admin.ts";

interface Group {
    id: string;
    name: string;
    children?: Partial<User>[];
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function voidWarning(data) {
    return data;
}

const UserGroupManagement: React.FC = () => {

    const [groups, setGroups] = useState<Group[]>();
    // const [users, setUsers] = useState();
    const fetchGroups = async () => {
        try {

            const res: GroupResponse = voidWarning(await getGroupsByPages(1, 10));
            const groups = res.groups.map((group) => ({
                ...group,
                children: [{}]
            }));
            setGroups(groups);
        } catch (error) {
            console.error("Error fetching groups:", error);
            Toast.error({content: "获取用户组数据失败", duration: 2});

        }
    };
    useEffect(() => {
        fetchGroups().then();
    }, []);
    const handleExpand = async (expanded: boolean, thisGroup: Group) => {
        if (expanded && thisGroup.children!.length === 0) { // 仅在首次展开时加载数据
            try {

                const userRes: UserResponse = voidWarning(await getUsersByPage(1, 100, [thisGroup.id]));
                console.log(userRes);
                const updatedGroups = groups!.map(group =>
                    group.id === thisGroup.id ? {...group, children: userRes.users} : group
                );
                setGroups(updatedGroups); // 更新指定组的 children 数据
            } catch (error) {
                console.error("Error fetching users for group:", error);
                Toast.error({content: "获取用户数据失败", duration: 2});
            }
        }
    };
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户组名称',
            dataIndex: 'name',
            key: 'name',
        }];


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
            />
        </div>
    );
};
export default UserGroupManagement;
