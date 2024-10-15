import { IconUpload } from "@douyinfe/semi-icons";
import { Button, Typography, Upload } from "@douyinfe/semi-ui";

const StudentManagement: React.FC = () => {
  return (
    <div>
      <div className="admin-student-manage-item-wrapper">
        <Typography.Text strong className="admin-student-manage-item">
          比赛学生导入(上传完成后会自动下载账号密码对照表格，导入Excel第一字段为“账号”)
        </Typography.Text>
        <Upload
          accept=".xlsx"
          customRequest={({ file, onProgress, onSuccess }) => {
            console.log(file);
            onProgress({ total: 100, loaded: 50 });

            onSuccess({ success: true }, new Event("success"));
            return;
          }}
        >
          <Button icon={<IconUpload />} theme="light">
            学生导入
          </Button>
        </Upload>
      </div>
    </div>
  );
};
export default StudentManagement;
