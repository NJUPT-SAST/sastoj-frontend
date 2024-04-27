import { Badge } from "@ui-aurora/react";

const stateType = (value: string) => {
  if (value == "SUCCESS") {
    return "success";
  } else if (value == "WARNING") return "warning";
  else return "error";
};

const State = ({ value }: { value: string }) => {
  return (
    <>
      <Badge type={stateType(value)} content={value} size="small" />
    </>
  );
};

export default State;
