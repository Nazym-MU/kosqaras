import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-muted/20 pt-12 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-accent tracking-tight">KOSQARAS</h3>
                        <p className="text-foreground/80 max-w-md">
                            A passionate artist specializing in illustration, animation, and storyboarding.
                            Creating unique visual stories through a blend of traditional techniques and modern digital tools.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-tight">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-foreground/70 hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">About Me</Link></li>
                            <li><Link href="/illustration" className="text-foreground/70 hover:text-accent transition-colors">Illustration</Link></li>
                            <li><Link href="/animation" className="text-foreground/70 hover:text-accent transition-colors">Animation</Link></li>
                            <li><Link href="/storyboard" className="text-foreground/70 hover:text-accent transition-colors">Storyboard</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-tight">Contact</h3>
                        <div className="space-y-3">
                            <p className="flex items-center text-foreground/70">
                                <svg className="h-5 w-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:ayakoshkz@gmail.com" className="hover:text-accent transition-colors">ayakoshkz@gmail.com</a>
                            </p>
                            <p className="flex items-center text-foreground/70">
                                <svg className="h-5 w-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.18 3.48-1.38 3.86-1.38.08 0 .26.02.38.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                                </svg>
                                <a href="https://t.me/kosqaras" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">t.me/kosqaras</a>
                            </p>
                        </div>
                        
                        <div className="flex space-x-4 mt-6">
                            <a 
                                href="https://instagram.com/kosqaras" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-2 rounded-full transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a 
                                href="https://t.me/kosqaras" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-2 rounded-full transition-colors"
                                aria-label="Telegram"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.18 3.48-1.38 3.86-1.38.08 0 .26.02.38.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                                </svg>
                            </a>
                            <a 
                                href="mailto:ayakoshkz@gmail.com" 
                                className="bg-foreground/10 hover:bg-accent text-foreground hover:text-white p-2 rounded-full transition-colors"
                                aria-label="Email"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-foreground/60 text-sm">
                        &copy; {new Date().getFullYear()} KOSQARAS. All rights reserved.
                    </p>
                    <p className="text-foreground/60 text-sm mt-2 md:mt-0">
                        Designed with ❤️ for creative expressions
                    </p>
                </div>
            </div>
        </footer>
    );
} 