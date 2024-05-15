type TypeMapping = Record<number, string>;
type statusMapping = Record<
  number,
  [string, "info" | "success" | "warning" | "error" | "ghost"]
>;

export const getType = (typeValue: number | undefined) => {
  const type: TypeMapping = {
    1: "IOI",
    2: "ACM",
    3: "乐多",
    4: 'OI'
  };

  return type[typeValue!] || "OTHER";
};

export const getStatus = (
  statusValue: number | undefined,
): [string, "info" | "success" | "warning" | "error" | "ghost"] => {
  const status: statusMapping = {
    1: ["未开始", "ghost"],
    2: ["进行中", "info"],
    3: ["已结束", "success"],
    4: ["已取消", "error"],
  };

  return status[statusValue!] || ["未开始", "ghost"];
};

export const handleDate = (date: string | undefined): string => {
  if (!date) {
    return "loading...";
  }
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}  ${hours}:${minutes}`;
  return formattedDate;
};

export const getDuration = (
  startTime: string | undefined,
  endTime: string | undefined,
): string => {
  if (!startTime || !endTime) {
    return "loading...";
  }
  const date1 = new Date(startTime);
  const date2 = new Date(endTime);
  const hourDiff = Math.abs(date2.getTime() - date1.getTime()) / 36e5;
  return hourDiff.toFixed(2) || "loading...";
};
