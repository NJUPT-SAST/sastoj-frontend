import REQUEST from "../utils/web/request";
import { Response } from "../types/rank";

interface LoginProps {
  token: string;
}

export const login = (
  url: string,
  { arg }: { arg: { username: string; password: string } },
): Promise<LoginProps> => {
  // const formData = new FormData();
  // formData.append("username", arg.username);
  // formData.append("password", arg.password);
  return REQUEST({
    url: url,
    method: "POST",
    data: arg,
  });
};

export const getRank = ({
  contest_id,
  current,
  size,
}: {
  contest_id: string;
  current: number;
  size: number;
}): Promise<Response> => {
  return REQUEST({
    url: `/user/contests/${contest_id}/ranking`,
    method: "GET",
    params: { current, size },
  });
};
