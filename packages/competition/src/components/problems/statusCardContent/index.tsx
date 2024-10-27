import { Flag, PencilLine } from "lucide-react";
import styles from "./index.module.scss";
import { Button, Carousel } from "@ui-aurora/react";
import { memo, useRef, useState } from "react";
import { EvaluationRecord } from "./evaluationRecord";
import { SelfTest } from "./selfTest";

export const StatusCardContentComponent = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(0);

  // useEffect(() => {
  //   const width = carouselRef.current?.offsetWidth;
  //   const height = carouselRef.current?.offsetHeight;
  //   setCarouselWidth(width);
  //   setCarouselHeight(height);
  // }, [window.innerWidth, window.innerHeight]);

  return (
    <div className={styles["status-card-container"]}>
      <div className={styles["status-card-header"]}>
        <Button
          className={`${selected === 0 ? styles.active : ""}`}
          size="small"
          color={selected !== 0 ? "ghost" : undefined}
          onClick={() => setSelected(0)}
          shadow="none"
        >
          <Flag size={16} />
          <span>评测记录</span>
        </Button>
        <Button
          className={`${selected === 1 ? styles.active : ""}`}
          size="small"
          color={selected !== 1 ? "ghost" : undefined}
          onClick={() => setSelected(1)}
          shadow="none"
        >
          <PencilLine size={16} />
          <span>案例自测</span>
        </Button>
      </div>
      {/* <div className={styles.divider}></div> */}
      <div className={styles["status-card-container"]}>
        <Carousel
          ref={carouselRef}
          className={styles.carousel}
          carouselItems={[
            {
              children: <EvaluationRecord />,
            },
            {
              children: <SelfTest />,
            },
          ]}
          selectedIndex={selected}
          isSliding={false}
        />
      </div>
    </div>
  );
};
export const StatusCardContent = memo(StatusCardContentComponent);
