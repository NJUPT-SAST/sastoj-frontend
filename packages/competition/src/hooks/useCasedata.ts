export const useCasedata = (contestId: string) => {
  let data: any = {};
  const contestsString = localStorage.getItem("contests");
  if (contestsString) {
    const contests = JSON.parse(contestsString);
    const mapContests = new Map(
      contests?.map((obj: { id: any }) => [obj.id, obj]),
    );
    data = mapContests?.get(contestId);
  } else {
    console.log("没有找到存储的数据");
  }
  return data;
};
