import React from "react";

export interface AnnouncementProps {
  title?: string;
  description?: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <h2>比赛公告💻</h2>
      <span>
        {/* 本场比赛为『STAOI』G - Round 5，也是 STAOI 的第 5 场公开赛。

        <br />
        本场比赛的组织者是 STA_Morlin。
        <br />
        难度大致介于普及至省选之间，题目大致从易到难排序。
        <br />
        本场比赛为 IOI 赛制，分数取所有提交分数之最大值。
        <br />共 4 道题目，时间为 4 个小时。 祝各位有一个愉快的比赛体验。
        <h2>鸣谢🙇‍</h2>
        <ul>
          <li>负责人：jijidawang。</li>
          <li>出题人：User_Unauthorized，Nopain，jijidawang。</li>
          <li>验题人：User_Unauthorized，blossom_j，5k_sync_closer。 </li>
        </ul>
        <h2>奖励🥇</h2>
        <span>
          若有 AK 者，令 𝑛 n 为 AK 人数，则每人可获得 ⌊ 100 𝑛 ⌋ ⌊ n 100 ⌋ 元。
          若前三名（同分按提交时间排序）中有未 AK 者，则： Rank 1 可获得 20 元。
          Rank 2 可获得 12 元。 Rank 3 可获得 7 元。 对于题目首 A，获得第 𝑥 x
          题首 A 的用户将获得 𝑥 x 元。
        </span> */}
        {description}
      </span>
    </>
  );
};

export default Announcement;
