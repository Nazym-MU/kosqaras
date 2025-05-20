export default function Footer() {
    return (
        <footer className="bg-background border-t border-muted/20 pt-12 pb-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-8 text-accent tracking-tight">KOSQARAS</h3>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                        {/* Email */}
                        <div className="flex items-center">
                            <div className="bg-foreground/10 p-2.5 rounded-full mr-3">
                                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <a href="mailto:ayanatkz@icloud.com" className="text-foreground/70 hover:text-accent transition-colors">
                                ayanatkz@icloud.com
                            </a>
                        </div>
                        
                        {/* Telegram */}
                        <div className="flex items-center">
                            <div className="bg-foreground/10 p-2.5 rounded-full mr-3">
                                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.18 3.48-1.38 3.86-1.38.08 0 .26.02.38.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                                </svg>
                            </div>
                            <a href="https://t.me/kosqaras" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                                t.me/kosqaras
                            </a>
                        </div>
                        
                        {/* Instagram */}
                        <div className="flex items-center">
                            <div className="bg-foreground/10 p-2.5 rounded-full mr-3">
                                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </div>
                            <a href="https://www.instagram.com/https.kosqaras/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                                https.kosqaras
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}