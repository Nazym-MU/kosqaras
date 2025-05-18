# KOSQARAS - Artist Portfolio

KOSQARAS is a modern, multilingual artist portfolio website built with Next.js 15 and TypeScript. It showcases illustrations, animations, and storyboards with a clean, responsive design.

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Multilingual Support**: Full support for English, Kazakh, and Russian
- **Admin Dashboard**: Secure admin area to manage artwork uploads and content
- **Image Management**: Integration with Cloudinary for efficient image storage and delivery
- **MongoDB Integration**: Database storage for artwork information and metadata
- **Authentication**: Secure admin login with Next Auth
- **Dark/Light Mode**: Theme switching based on user preference
- **Category-Based Navigation**: Browse artwork by illustration, animation, or storyboard
- **Artwork Detail Pages**: In-depth view of each artwork with full details

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom theme
- **Database**: [MongoDB](https://www.mongodb.com/) with Mongoose
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Media Storage**: [Cloudinary](https://cloudinary.com/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Admin Credentials
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## Google Drive Video Integration for Animations

This project includes Google Drive video integration specifically for the Animation category. Here's how it works:

### For Artists/Admins:
1. When creating or editing animations, provide a Google Drive video URL in the designated field
2. The URL can be in different formats (drive.google.com/file/d/ID, drive.google.com/open?id=ID)
3. A thumbnail image can be uploaded manually, or the system will use a placeholder image
4. The form validates Google Drive URLs to ensure they have the correct format

### For Visitors:
1. Animations with videos show a play button overlay in the grid view
2. Clicking on an animation opens the detail view with an embedded Google Drive player
3. The video maintains responsive sizing across different devices

### Implementation Details:
- The `GoogleDriveEmbed` component extracts file IDs from various Google Drive URL formats
- Videos are embedded using Google Drive's embed preview format
- Animations require a video URL, while illustrations and storyboards require image uploads
- The system uses placeholder images for animations that lack manual thumbnails

## Project Structure

```
app/                  # Next.js app directory (main application code)
  components/         # Shared UI components
  contexts/           # React contexts (language, etc.)
  [category]/[id]/    # Dynamic routes for artwork
  api/                # API routes
  admin/              # Admin dashboard
components/           # Additional components
lib/                  # Utility functions and libraries
public/              # Static assets
  uploads/           # Locally stored uploads (in development)
types/               # TypeScript type definitions
```

## Multilingual Support

The application supports three languages: English (en), Kazakh (kz), and Russian (ru). Translations are managed through the Language Context system located in `app/contexts/LanguageContext.tsx`.

Content can be added in multiple languages using the `MultiLangContent` component, which automatically displays the content in the user's selected language.

## Artwork Management

Artworks are categorized into:
- Illustrations
- Animations
- Storyboards

Each artwork can have:
- Title
- Description (multilingual)
- Category
- Image URL
- Video URL (for animations)
- Creation date
- Media type
- Additional information (multilingual)

## Development

### Custom Components

- **MultiLangContent**: Displays content in the user's selected language
- **ArtworkGrid**: Displays a grid of artwork thumbnails with filtering
- **ArtworkDetailClient**: Renders detailed view of individual artworks
- **ArtworkUpload**: Handles image uploads to Cloudinary

### Adding New Content Types

To add a new content type:
1. Update the `Artwork` interface in `types/artwork.ts`
2. Create a new category in the relevant components
3. Update the admin form to support the new type

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - Database
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Media management
