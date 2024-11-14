type TypeMapping = Record<number, string>;
type StatusMapping = Record<
  number,
  [string, "info" | "success" | "warning" | "error" | "ghost"]
>;

export const getType = (typeValue?: number): string => {
  const type: TypeMapping = {
    1: "IOI",
    2: "ACM",
    3: "乐多",
    4: "OI",
  };

  return type[typeValue!] || "OTHER";
};

export const getStatus = (
  statusValue?: number,
): [string, "info" | "success" | "warning" | "error" | "ghost"] => {
  const status: StatusMapping = {
    0: ["未开始", "ghost"],
    1: ["进行中", "info"],
    2: ["已结束", "ghost"],
    3: ["已取消", "error"],
  };

  return status[statusValue!] ?? ["进行中", "info"];
};

export const handleDate = (date?: string): string => {
  if (!date) {
    return "loading...";
  }
  const newDate = new Date(date);
  const formattedDate = [
    newDate.getFullYear(),
    String(newDate.getMonth() + 1).padStart(2, "0"),
    String(newDate.getDate()).padStart(2, "0"),
    String(newDate.getHours()).padStart(2, "0"),
    String(newDate.getMinutes()).padStart(2, "0"),
  ]
    .join("-")
    .replace(/-/g, " ")
    .trim();
  return formattedDate;
};

export const getDuration = (startTime?: string, endTime?: string): string => {
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
 * @param {Array<T>} array - 要排序的对象数组。
 * @param {keyof T} key - 用于排序的对象属性名。
 * @param {boolean} [ascending=true] - 是否按升序排序。默认为升序。
 * @returns {Array<T>} 排序后的对象数组。
 */
export const sortByKey = <T extends Record<string, number>>(
  array: T[],
  key: keyof T,
  ascending = true,
): T[] => {
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

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>): void {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // @ts-expect-error TODO:
      func.apply(this, args);
    }, wait);
  };
}
