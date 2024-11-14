import { useMemo } from "react";
import styles from "./index.module.scss";

const kaomojiList = [
  "?(´･ω･`)",
  "?( ˘･з･)",
  "?( ˘•ω•˘ )",
  "?╮(╯_╰)╭",
  "Σ(*ﾟдﾟﾉ)ﾉ?",
  "?(´⊙ω⊙`)",
  "?(゜ロ゜)",
  "?(´･_･`)",
];
export const Empty = ({ description }: { description?: string }) => {
  const randomMaomoji = useMemo(() => {
    return kaomojiList[Math.floor(Math.random() * kaomojiList.length)];
  }, []);
  return (
    <div className={styles.maomojiWrap}>
      <div className={styles.maomoji}>{randomMaomoji}</div>
      <div className={styles.desc}>
        {" "}
        {description ?? "啊咧，好像暂时还没东西呢？"}{" "}
      </div>
    </div>
  );
};
