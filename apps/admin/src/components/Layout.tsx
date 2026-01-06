import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  onNewPost: () => void;
}

export const Layout = ({ children, onNewPost }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans text-gray-900 antialiased">
      <Sidebar />
      <main className="relative flex h-screen flex-1 flex-col overflow-hidden">
        <Header onNewPost={onNewPost} />
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</div>
      </main>
    </div>
  );
};
