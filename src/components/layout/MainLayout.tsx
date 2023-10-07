import { ReactNode, useState } from "react";
import { SidebarApp } from "./SidebarApp";
import { Header } from "./Header";
export type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <div>
      <Header onOpenSidebar={() => setIsShowSidebar(!isShowSidebar)} />
      <SidebarApp
        isShowSidebar={isShowSidebar}
        onClose={() => setIsShowSidebar(false)}
      />
      <div className="p-1 md:ml-64 dark:bg-main h-auto text-white">
        <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-14 min-h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
