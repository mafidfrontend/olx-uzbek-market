
import { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';
import { TopNavigation } from './TopNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <main className="pb-20 md:pb-8">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
