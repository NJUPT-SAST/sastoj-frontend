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
    4: "OI",
  };

  return type[typeValue!] || "OTHER";
};

export const getStatus = (
  statusValue: number | undefined,
): [string, "info" | "success" | "warning" | "error" | "ghost"] => {
  const status: statusMapping = {
    0: ["未开始", "ghost"],
    1: ["进行中", "info"],
    2: ["已结束", "ghost"],
    3: ["已取消", "error"],
  };

  return status[statusValue!] ?? ["进行中", "info"];
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

/**
 * 根据指定属性对对象数组进行排序。
 * @param {Array<any>} array - 要排序的对象数组。
 * @param {string} key - 用于排序的对象属性名。
 * @param {boolean} [ascending=true] - 是否按升序排序。默认为升序。
 * @returns {Array<Object>} 排序后的对象数组。
 */

export const sortByKey = (
  array: any[],
  key: string,
  ascending = true,
): any[] => {
  if (
    !array ||
    !Array.isArray(array) ||
    array.some((item) => item[key] === undefined)
  ) {
    return array; // 如果未找到属性，返回原数组
  }
  return array
    .slice()
    .sort((a, b) => (ascending ? a[key] - b[key] : b[key] - a[key]));
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    //@ts-ignore
    const context = this;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
