import { Sheet } from "@ui-aurora/react";
import React from "react";
import { useSwrGetProblems } from "../../../swrHooks/problems";

interface ProblemsSheetProps {
  visible: boolean;
  onCancel?: () => void;
}

export const ProblemsSheet: React.FC<ProblemsSheetProps> = ({
  visible,
  onCancel,
}) => {
  const { data } = useSwrGetProblems(1);
  console.log(data);

  return (
    <Sheet
      visible={visible}
      onCancel={onCancel}
      width={500}
      sheetFooter={null}
    ></Sheet>
  );
};
