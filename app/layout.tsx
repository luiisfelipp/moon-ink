import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL('https://moonink.cl'), title: 'Moon Ink Tattoo Studio | Arte en tu piel · Chile', description: 'Tatuajes que expresan tu identidad. Explora trabajos reales de Moon Ink Tattoo Studio y conversemos sobre tu próxima pieza.', openGraph: { title: 'Moon Ink Tattoo Studio', description: 'Art on Skin. Made to Last.', locale: 'es_CL', type: 'website', images: ['/works/chest.webp'] }, robots: {index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html> }
