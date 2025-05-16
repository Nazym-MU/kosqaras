"use client";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ArtworkForm from '@/components/ArtworkForm';
import ArtworkList from '@/components/artworkList';

interface Artwork {
    _id?: string;
    title: string;
    description: string;
    category: string;
    date: string;
    media: string;
    imageUrl: string;
    additionalInfo?: string;
}

export default function AdminPage() {
    const { status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/admin/login');
        }
    }, [status, router]);

    // Clear error message after 5 seconds
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    if (status === 'unauthenticated') {
        return null; // Don't render anything while redirecting
    }

    const handleCreateArtwork = async (artwork: Artwork) => {
        try {
            setErrorMessage(null);
            
            const response = await fetch('/api/artworks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(artwork),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.missingFields) {
                    throw new Error(`Missing required fields: ${data.missingFields.join(', ')}`);
                } else if (data.validationErrors) {
                    const errorMessages = Object.entries(data.validationErrors)
                        .map(([field, message]) => `${field}: ${message}`)
                        .join(', ');
                    throw new Error(`Validation error: ${errorMessages}`);
                } else {
                    throw new Error(data.error || 'Failed to create artwork');
                }
            }

            setSuccessMessage('Artwork created successfully!');
            setActiveTab('list');
            
            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
        } catch (error) {
            console.error('Error creating artwork:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Failed to create artwork. Please try again.');
        }
    };

    const handleUpdateArtwork = async (artwork: Artwork) => {
        try {
            setErrorMessage(null);
            
            const response = await fetch(`/api/artworks/${artwork._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(artwork),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.missingFields) {
                    throw new Error(`Missing required fields: ${data.missingFields.join(', ')}`);
                } else if (data.validationErrors) {
                    const errorMessages = Object.entries(data.validationErrors)
                        .map(([field, message]) => `${field}: ${message}`)
                        .join(', ');
                    throw new Error(`Validation error: ${errorMessages}`);
                } else {
                    throw new Error(data.error || 'Failed to update artwork');
                }
            }

            setSuccessMessage('Artwork updated successfully!');
            setSelectedArtwork(null);
            setActiveTab('list');
            
            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage(null);
            }, 3000);
        } catch (error) {
            console.error('Error updating artwork:', error);
            setErrorMessage(error instanceof Error ? error.message : 'Failed to update artwork. Please try again.');
        }
    };

    const handleEdit = (artwork: Artwork) => {
        setSelectedArtwork(artwork);
        setActiveTab('add');
    };

    const handleCancel = () => {
        setSelectedArtwork(null);
        setActiveTab('list');
    };

    const handleSubmit = (artwork: Artwork) => {
        if (artwork._id) {
            handleUpdateArtwork(artwork);
        } else {
            handleCreateArtwork(artwork);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </div>

            {successMessage && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
                    {errorMessage}
                </div>
            )}

            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => {
                        setActiveTab('list');
                        setSelectedArtwork(null);
                    }}
                    className={`px-4 py-2 font-medium text-sm ${
                        activeTab === 'list'
                            ? 'border-b-2 border-blue-500 text-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Artwork List
                </button>
                <button
                    onClick={() => {
                        setActiveTab('add');
                        setSelectedArtwork(null);
                    }}
                    className={`px-4 py-2 font-medium text-sm ${
                        activeTab === 'add' && !selectedArtwork
                            ? 'border-b-2 border-blue-500 text-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Add New Artwork
                </button>
            </div>

            {activeTab === 'list' ? (
                <ArtworkList onEdit={handleEdit} />
            ) : (
                <ArtworkForm
                    artwork={selectedArtwork || undefined}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}