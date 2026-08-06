
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

interface IndexProps {
  page?: string;
}

const Index: React.FC<IndexProps> = ({ page = "home" }) => {
  return (
    <AppProvider>
      <AppLayout initialPage={page} />
    </AppProvider>
  );
};

export default Index;
