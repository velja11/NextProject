import { ReactNode } from "react";

const NotificationItem: React.FC<{
  classStyle: string;
  children: ReactNode;
}> = ({ classStyle, children }) => {
  return <div className={classStyle}>{children}</div>;
};

export default NotificationItem;
