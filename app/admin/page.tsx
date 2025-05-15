'use client';

import { useState } from 'react';
import ArtworkUpload from '@/components/artworkUpload';
import ArtworkList from '@/components/artworkList';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'list'>('upload');

  return (
    <div>
      <div className="tab-navigation">
        <button 
          onClick={() => setActiveTab('upload')}
          className={activeTab === 'upload' ? 'active' : ''}
        >
          Upload Artwork
        </button>
        <button 
          onClick={() => setActiveTab('list')}
          className={activeTab === 'list' ? 'active' : ''}
        >
          Artwork List
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'upload' ? (
          <ArtworkUpload />
        ) : (
          <ArtworkList />
        )}
      </div>
    </div>
  )
}