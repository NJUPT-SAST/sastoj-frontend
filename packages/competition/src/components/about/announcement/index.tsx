import React from "react";

export interface AnnouncementProps {
  title?: string;
  description?: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ description }) => {
  return (
    <>
      <span>{description}</span>
    </>
  );
};

export default Announcement;
