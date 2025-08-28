import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { Feed } from './components/Feed';
import { MirrorReport } from './components/MirrorReport';
import { Page, UserInteraction } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);

  const handleStartFeed = () => {
    setCurrentPage('feed');
    setInteractions([]);
  };

  const handleShowReport = (feedInteractions: UserInteraction[]) => {
    setInteractions(feedInteractions);
    setCurrentPage('report');
  };

  const handleRestart = () => {
    setCurrentPage('landing');
    setInteractions([]);
  };

  return (
    <div>
      {currentPage === 'landing' && <Landing onStartFeed={handleStartFeed} />}
      {currentPage === 'feed' && <Feed onShowReport={handleShowReport} />}
      {currentPage === 'report' && (
        <MirrorReport interactions={interactions} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;