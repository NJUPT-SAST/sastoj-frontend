import { Flag, PencilLine } from "lucide-react";
import styles from "./index.module.scss";
import { Button, Carousel } from "@ui-aurora/react";
import { useMemo, useRef, useState } from "react";
import { EvaluationRecord } from "./evaluationRecord";
import { SelfTest } from "./selfTest";

export const StatusCardContent = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(0);
  const carouselWidth = useMemo(() => {
    return carouselRef.current?.offsetWidth;
  }, [window.innerWidth]);
  const carouselHeight = useMemo(() => {
    return carouselRef.current?.offsetHeight;
  }, [window.innerHeight]);

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
          color="border"
          onClick={() => setSelected(0)}
          shadow="none"
        >
          <Flag size={16} />
          <span>评测记录</span>
        </Button>
        <Button
          className={`${selected === 1 ? styles.active : ""}`}
          size="small"
          color="border"
          onClick={() => setSelected(1)}
          shadow="none"
        >
          <PencilLine size={16} />
          <span>案例自测</span>
        </Button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles["status-card-container"]}>
        <Carousel
          ref={carouselRef}
          className={styles.carousel}
          width={carouselWidth}
          height={carouselHeight}
          CarouselItems={[
            {
              children: <EvaluationRecord />,
            },
            {
              children: <SelfTest />,
            },
          ]}
          selected={selected}
          isSliding={true}
        />
      </div>
    </div>
  );
};
