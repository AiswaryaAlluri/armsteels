import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = 'ARM Steels Pvt. Ltd. - Scaffolding & Construction Materials';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'ARM Steels Pvt. Ltd. - Trusted manufacturer and supplier of high-quality scaffolding and construction support materials. Acrow Span, Props, Centering Sheets, H Frames, and more with anytime stock availability.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'ARM Steels Pvt. Ltd. - Trusted manufacturer and supplier of high-quality scaffolding and construction support materials. Acrow Span, Props, Centering Sheets, H Frames, and more with anytime stock availability.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'scaffolding materials, construction materials, Acrow Span, adjustable props, centering sheets, H frames, shuttering plates, scaffolding supplier Hyderabad, ARM Steels'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'scaffolding materials, construction materials, Acrow Span, adjustable props, centering sheets, H frames, shuttering plates, scaffolding supplier Hyderabad, ARM Steels';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Home />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
