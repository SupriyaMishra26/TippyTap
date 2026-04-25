import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster as Sonner } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { AppProvider } from './contexts/AppContexts';

import Logo from '../assets/Logo.png';
import heroPreview from '../assets/hero-bg.jpg';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import AuthModal from './components/AuthModal';
// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

// Collections
import NewArrivals from './pages/collections/NewArrivals';
import BestSellers from './pages/collections/BestSellers';
import Restocked from './pages/collections/Restocked';
import Sale from './pages/collections/Sale';
import ToeNails from './pages/collections/ToeNails';
import NailKit from './pages/collections/NailKit';

// Product - Length
import Short from './pages/product/length/Short';
import Medium from './pages/product/length/Medium';
import MediumLong from './pages/product/length/MediumLong';
import Long from './pages/product/length/Long';
import ExtraLong from './pages/product/length/ExtraLong';

// Product - Shape
import Coffin from './pages/product/shape/Coffin';
import Stiletto from './pages/product/shape/Stiletto';
import Square from './pages/product/shape/Square';
import Round from './pages/product/shape/Round';
import Almond from './pages/product/shape/Almond';
import Oval from './pages/product/shape/Oval';

// Product - Texture
import Matte from './pages/product/texture/Matte';
import Glossy from './pages/product/texture/Glossy';
import TextureGlitters from './pages/product/texture/Glitters';
import TextureGemstones from './pages/product/texture/Gemstones';
import CatEye from './pages/product/texture/CatEye';

// Product - Style
import FrenchNail from './pages/product/style/FrenchManicure';
import Solids from './pages/product/style/Solids';
import Prints from './pages/product/style/Prints';
import StyleGlitters from './pages/product/style/StyleGlitters';
import StyleGemstones from './pages/product/style/StyleGemstones';
import AnimalPrint from './pages/product/style/AnimalPrint';
import Ombre from './pages/product/style/Ombre';
import CatEyes from './pages/product/style/CatEyes';

//colours
import Pink from './pages/product/colour/pink';
import Red from './pages/product/colour/red';
import Blue from './pages/product/colour/blue';
import Nude from './pages/product/colour/nude';
import White from './pages/product/colour/white';
import Black from './pages/product/colour/black';
import Purple from './pages/product/colour/purple';
import Green from './pages/product/colour/green';

// Other Pages
import Shop from './pages/Shop';
import SoftGelNails from './pages/SoftGelNails';
import OurStory from './pages/OurStory';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const queryClient = new QueryClient();
const SITE_NAME = 'Tippy Tap Nails';
const SITE_URL = 'https://www.tippytapnails.com';
const DEFAULT_DESCRIPTION =
  'Tippy Tap Nails makes premium handpainted press-on nails that are reusable, non-toxic, and salon-inspired.';

function titleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toAbsoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return new URL(value, SITE_URL).href;
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string, extraAttributes: Record<string, string> = {}) {
  const selector = `link[rel="${rel}"]`;
  let tag = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);

  Object.entries(extraAttributes).forEach(([attribute, value]) => {
    tag.setAttribute(attribute, value);
  });
}

function getSeoMeta(pathname: string) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  if (normalizedPath === '/') {
    return {
      title: `${SITE_NAME} | Premium Press-On Nails`,
      description: DEFAULT_DESCRIPTION,
      image: heroPreview,
    };
  }

  if (normalizedPath === '/soft-gel-nails') {
    return {
      title: `Soft Gel Nails | ${SITE_NAME}`,
      description:
        'Explore soft gel press-on nails designed for comfort, flexibility, and long-lasting wear.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/our-story') {
    return {
      title: `Our Story | ${SITE_NAME}`,
      description: 'Discover the story behind Tippy Tap Nails and the care that goes into every set.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/about') {
    return {
      title: `About | ${SITE_NAME}`,
      description: 'Learn more about the Tippy Tap Nails brand and the handmade press-on experience.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/contact') {
    return {
      title: `Contact | ${SITE_NAME}`,
      description: 'Get in touch with Tippy Tap Nails for orders, support, and collaborations.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/privacy-policy') {
    return {
      title: `Privacy Policy | ${SITE_NAME}`,
      description: 'Read how Tippy Tap Nails handles customer information and privacy.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/terms-of-service') {
    return {
      title: `Terms of Service | ${SITE_NAME}`,
      description: 'Review the terms that apply when you shop with Tippy Tap Nails.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/press-inquiries') {
    return {
      title: `Press Inquiries | ${SITE_NAME}`,
      description: 'Reach out to Tippy Tap Nails for media requests, features, and partnerships.',
      image: heroPreview,
    };
  }

  if (normalizedPath === '/sustainability') {
    return {
      title: `Sustainability | ${SITE_NAME}`,
      description: 'See how Tippy Tap Nails approaches reusable products and thoughtful packaging.',
      image: heroPreview,
    };
  }

  if (normalizedPath.startsWith('/collections/')) {
    const slug = normalizedPath.split('/').pop() ?? 'Collections';
    const label = titleCase(slug);

    return {
      title: `${label} | ${SITE_NAME}`,
      description: `Browse ${label.toLowerCase()} press-on nail sets from Tippy Tap Nails.`,
      image: heroPreview,
    };
  }

  if (normalizedPath.startsWith('/product/')) {
    const [, , category, slug] = normalizedPath.split('/');
    const categoryLabel = titleCase(category ?? 'product');
    const itemLabel = titleCase(slug ?? category ?? 'product');

    if (category === 'length') {
      return {
        title: `${itemLabel} Length Press-Ons | ${SITE_NAME}`,
        description: `Shop ${itemLabel.toLowerCase()} press-on nail lengths from Tippy Tap Nails.`,
        image: heroPreview,
      };
    }

    if (category === 'shape') {
      return {
        title: `${itemLabel} Shape Press-Ons | ${SITE_NAME}`,
        description: `Shop ${itemLabel.toLowerCase()} press-on nail shapes from Tippy Tap Nails.`,
        image: heroPreview,
      };
    }


    if (category === 'colour') {
  return {
    title: `${itemLabel} Colour Press-Ons | ${SITE_NAME}`,
    description: `Shop ${itemLabel.toLowerCase()} colour press-on nails from Tippy Tap Nails.`,
    image: heroPreview,
  };
}

    if (category === 'texture') {
      return {
        title: `${itemLabel} Texture Press-Ons | ${SITE_NAME}`,
        description: `Browse ${itemLabel.toLowerCase()} texture finishes from Tippy Tap Nails.`,
        image: heroPreview,
      };
    }

    if (category === 'style') {
      return {
        title: `${itemLabel} Style Press-Ons | ${SITE_NAME}`,
        description: `Browse ${itemLabel.toLowerCase()} nail art styles from Tippy Tap Nails.`,
        image: heroPreview,
      };
    }

    return {
      title: `${itemLabel} ${categoryLabel} Press-Ons | ${SITE_NAME}`,
      description: `Browse ${itemLabel.toLowerCase()} ${categoryLabel.toLowerCase()} press-on nail sets.`,
      image: heroPreview,
    };
  }

  return {
    title: `${SITE_NAME} | Premium Press-On Nails`,
    description: DEFAULT_DESCRIPTION,
    image: heroPreview,
  };
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoMeta(pathname);
    const canonicalUrl = new URL(pathname === '/' ? '/' : pathname.replace(/\/+$/, ''), SITE_URL).href;
    const imageUrl = toAbsoluteUrl(seo.image);

    document.title = seo.title;
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'robots', 'index,follow');
    setMetaTag('name', 'theme-color', '#cb1f52');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:image:alt', `${SITE_NAME} preview image`);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', imageUrl);
    setLinkTag('canonical', canonicalUrl);
    setLinkTag('icon', toAbsoluteUrl(Logo), { type: 'image/png' });
    setLinkTag('apple-touch-icon', toAbsoluteUrl(Logo), { type: 'image/png' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
    <BrowserRouter>
    <Sonner position="top-right" />
      <SeoManager />
     <ScrollToTop />
      <div className="flex flex-col min-h-screen">
          <TopBar />
        <div className="sticky top-0 z-50">
        
          <Header />
          
        </div>
         <AuthModal />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product/:id" element={<ProductDetail />} />
             

            {/* Collections */}
            <Route path="/collections/new-arrivals" element={<NewArrivals />} />
            <Route path="/collections/best-sellers" element={<BestSellers />} />
            <Route path="/collections/restocked" element={<Restocked />} />
            <Route path="/collections/sale" element={<Sale />} />
            <Route path="/collections/toe-nails" element={<ToeNails />} />
            <Route path="/collections/nail-kit" element={<NailKit />} />

            {/* Product - Length */}
            <Route path="/product/length/short" element={<Short />} />
            <Route path="/product/length/medium" element={<Medium />} />
            <Route path="/product/length/medium-long" element={<MediumLong />} />
            <Route path="/product/length/long" element={<Long />} />
            <Route path="/product/length/extra-long" element={<ExtraLong />} />

            {/* Product - Shape */}
            <Route path="/product/shape/coffin" element={<Coffin />} />
            <Route path="/product/shape/stiletto" element={<Stiletto />} />
            <Route path="/product/shape/square" element={<Square />} />
            <Route path="/product/shape/round" element={<Round />} />
            <Route path="/product/shape/almond" element={<Almond />} />
            <Route path="/product/shape/oval" element={<Oval />} />

            {/* Product - Texture */}
            <Route path="/product/texture/matte" element={<Matte />} />
            <Route path="/product/texture/glossy" element={<Glossy />} />
            <Route path="/product/texture/glitters" element={<TextureGlitters />} />
            <Route path="/product/texture/gemstones" element={<TextureGemstones />} />
          
            <Route path="/product/texture/cat-eye" element={<CatEye />} />

            {/* Product - Style */}
            <Route path="/product/style/french-nail" element={<FrenchNail />} />
            <Route path="/product/style/solids" element={<Solids />} />
            <Route path="/product/style/prints" element={<Prints />} />
            <Route path="/product/style/glitters" element={<StyleGlitters />} />
            <Route path="/product/style/gemstones" element={<StyleGemstones />} />
            <Route path="/product/style/animal-print" element={<AnimalPrint />} />
            <Route path="/product/style/ombre" element={<Ombre />} />
            <Route path="/product/style/cat-eyes" element={<CatEyes />} />

              
{/* Product - Colour */}
<Route path="/product/colour/pink" element={<Pink />} />
<Route path="/product/colour/red" element={<Red />} />
<Route path="/product/colour/blue" element={<Blue />} />
<Route path="/product/colour/nude" element={<Nude />} />
<Route path="/product/colour/white" element={<White />} />
<Route path="/product/colour/black" element={<Black />} />
<Route path="/product/colour/purple" element={<Purple />} />
<Route path="/product/colour/green" element={<Green />} />

            {/* Other Pages */}
            <Route path="/soft-gel-nails" element={<SoftGelNails />} />
            <Route path="/products" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
             <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
     </TooltipProvider>
    </AppProvider>
   
  </QueryClientProvider>
  );
}
