import { SelfSuccess } from "./selfSuccess"
import { SelfFailed } from "./selfFailed"
import { useSelfDetail, SelfDetail } from '../../../stores/useSelfDetail';

export const SelfResult = () => {
    const SelfDetail = useSelfDetail((state) => state.SelfDetail)
    const detail = SelfDetail as SelfDetail;
    if (SelfDetail) {
        return <></>
    } else if (detail?.isCompiled) return <SelfSuccess time={detail?.time} memory={detail?.memory} />
    else return <SelfFailed complieMsg={detail?.complieMsg} stderr={detail?.stderr} stdout={detail?.stdout} />
}