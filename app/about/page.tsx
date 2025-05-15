export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <div className="prose prose-lg mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                    Hello! I'm a passionate artist with a focus on illustration, animation, and storyboarding. 
                    My journey in the creative world has been driven by a deep love for visual storytelling 
                    and a desire to bring ideas to life through art.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">My Approach</h2>
                <p className="text-lg text-gray-700 mb-6">
                    I combine traditional artistic techniques with modern digital tools to create unique 
                    and engaging visual stories. Each piece I create is a reflection of my commitment 
                    to quality and attention to detail.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Areas of Expertise</h2>
                <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
                    <li>Digital Illustration</li>
                    <li>2D Animation</li>
                    <li>Storyboarding</li>
                    <li>Character Design</li>
                    <li>Visual Development</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Let's Connect</h2>
                <p className="text-lg text-gray-700">
                    I'm always interested in new projects and collaborations. Feel free to reach out 
                    through any of the social media links in the footer, or send me an email directly.
                </p>
            </div>
        </div>
    );
} 