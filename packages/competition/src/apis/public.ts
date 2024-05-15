import REQUEST from "../utils/web/request";

interface LoginProps {
  token: string;
}

export const login = (
  url: string,
  { arg }: { arg: { username: string; password: string } },
): Promise<LoginProps> => {
  const formData = new FormData();
  formData.append("username", arg.username);
  formData.append("password", arg.password);
  return REQUEST({
    url: url,
    method: "POST",
    data: formData,
  });
};
