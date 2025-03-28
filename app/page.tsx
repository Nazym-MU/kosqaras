import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Hello! I'm Ayanat</h1>
            <p className="text-xl mb-8 text-gray-600">I'm an artist</p>
            <Link href="/gallery" className="text-blue-600px-6 py-3 rounded">View my portfolio</Link>
        </div>
    </div>
  );
}