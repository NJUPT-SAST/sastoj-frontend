import { SelfSuccess } from "./selfSuccess";
import { SelfFailed } from "./selfFailed";
import {
  useSelfDetail,
  SelfDetail as SelfDetailType,
} from "../../../stores/useSelfDetail";
import { useEffect, useState } from "react";

export const SelfResult = () => {
  const SelfDetail = useSelfDetail((state) => state.SelfDetail);
  const [detail, setDetail] = useState<SelfDetailType | null>(null);
  useEffect(() => {
    if (SelfDetail && "isCompiled" in SelfDetail) {
      setDetail(SelfDetail);
    } else {
      setDetail(null);
    }
  }, [SelfDetail]);

  if (!detail) {
    return <></>;
  } else if (detail?.isCompiled)
    return (
      <SelfSuccess
        time={detail?.time}
        memory={detail?.memory}
        stdout={detail?.stdout}
      />
    );
  else
    return (
      <SelfFailed
        compileMsg={detail?.complieMsg}
        stderr={detail?.stderr}
        stdout={detail?.stdout}
      />
    );
};
