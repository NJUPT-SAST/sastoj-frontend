import { Flag, PencilLine } from "lucide-react";
import styles from "./index.module.scss";
import { Button, Carousel } from "@ui-aurora/react";
import { SelfTest } from "./selfTest";
import { useEffect, useRef, useState } from "react";
import { EvaluationRecord } from "./evaluationRecord";
import { useSubmitStore } from "../../../stores/useSubmitStore";

// TODO: Carousel 封装的有问题，临时用野蛮方法解决。

export const StatusCardContent = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>();
  const [carouselHeight, setCarouselHeight] = useState<number>();
  const submitState = useSubmitStore((state) => state.submitState);

  useEffect(() => {
    const width = carouselRef.current?.offsetWidth;
    const height = carouselRef.current?.offsetHeight;

    setCarouselWidth(width);
    setCarouselHeight(height);
  }, []);

  useEffect(() => {
    submitState === "Submitting" && setSelected(1);
  }, [submitState]);

  return (
    <div className={styles["status-card-container"]}>
      <div className={styles["status-card-header"]}>
        <Button size="small" color="ghost" onClick={() => setSelected(0)}>
          <Flag size={16} />
          <span>评测记录</span>
        </Button>
        <Button size="small" color="ghost" onClick={() => setSelected(1)}>
          <PencilLine size={16} />
          <span>自测记录</span>
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
