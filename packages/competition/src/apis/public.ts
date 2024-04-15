import REQUEST from "../utils/web/request";

export const login = (
  url: string,
  { arg }: { arg: { username: string; password: string } }
) => {
  const formData = new FormData();
  formData.append("username", arg.username);
  formData.append("password", arg.password);
  return REQUEST({
    url: url,
    method: "POST",
    data: formData,
  });
};
