import React, { ReactNode } from 'react';

interface PageProps {
  title: string;
  children: ReactNode;
  /** Optional buttons or actions to display in the top right */
  headerActions?: ReactNode;
  /** Optional additional classes for the content area */
  className?: string;
}

const Page: React.FC<PageProps> = ({ 
  title, 
  children, 
  headerActions, 
  className = "" 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
          
          {headerActions && (
            <div className="flex items-center gap-3">
              {headerActions}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className={`max-w-7xl mx-auto p-6 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default Page;