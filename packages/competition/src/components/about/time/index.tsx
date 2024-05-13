import { useTimeRemaining } from "../../../hooks/useTimeRemaining";

const Time = () => {
  const currentDate = new Date(2024, 4, 13, 15, 30, 0);
  const timeRemaining = useTimeRemaining(currentDate);

  return (
    <strong>
      距离比赛开始还有{timeRemaining.days}天{timeRemaining.hours}小时
      {timeRemaining.minutes}分钟{timeRemaining.seconds}秒
    </strong>
  );
};

export default Time;
