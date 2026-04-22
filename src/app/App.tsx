import { BrowserRouter, Routes, Route } from 'react-router';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from './pages/Home';

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
import Ballerina from './pages/product/shape/Ballerina';

// Product - Texture
import Matte from './pages/product/texture/Matte';
import Glossy from './pages/product/texture/Glossy';
import TextureGlitters from './pages/product/texture/Glitters';
import TextureGemstones from './pages/product/texture/Gemstones';
import Metallic from './pages/product/texture/Metallic';

// Product - Style
import FrenchManicure from './pages/product/style/FrenchManicure';
import Solids from './pages/product/style/Solids';
import Prints from './pages/product/style/Prints';
import StyleGlitters from './pages/product/style/StyleGlitters';
import StyleGemstones from './pages/product/style/StyleGemstones';
import AnimalPrint from './pages/product/style/AnimalPrint';
import Ombre from './pages/product/style/Ombre';
import CatEyes from './pages/product/style/CatEyes';

// Other Pages
import SoftGelNails from './pages/SoftGelNails';
import OurStory from './pages/OurStory';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PressInquiries from './pages/PressInquiries';
import Sustainability from './pages/Sustainability';

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <div className="flex flex-col min-h-screen">
          <TopBar />
        <div className="sticky top-0 z-50">
        
          <Header />
        </div>
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

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
            <Route path="/product/shape/ballerina" element={<Ballerina />} />

            {/* Product - Texture */}
            <Route path="/product/texture/matte" element={<Matte />} />
            <Route path="/product/texture/glossy" element={<Glossy />} />
            <Route path="/product/texture/glitters" element={<TextureGlitters />} />
            <Route path="/product/texture/gemstones" element={<TextureGemstones />} />
            <Route path="/product/texture/metallic" element={<Metallic />} />

            {/* Product - Style */}
            <Route path="/product/style/french-manicure" element={<FrenchManicure />} />
            <Route path="/product/style/solids" element={<Solids />} />
            <Route path="/product/style/prints" element={<Prints />} />
            <Route path="/product/style/glitters" element={<StyleGlitters />} />
            <Route path="/product/style/gemstones" element={<StyleGemstones />} />
            <Route path="/product/style/animal-print" element={<AnimalPrint />} />
            <Route path="/product/style/ombre" element={<Ombre />} />
            <Route path="/product/style/cat-eyes" element={<CatEyes />} />

            {/* Other Pages */}
            <Route path="/soft-gel-nails" element={<SoftGelNails />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/press-inquiries" element={<PressInquiries />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
