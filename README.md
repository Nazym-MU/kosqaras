This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

To test the Google Drive integration, visit the Animations page and add an animation with a Google Drive video URL.
