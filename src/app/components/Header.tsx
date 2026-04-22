import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, ShoppingBag, Sparkles, X } from 'lucide-react';
import Logo from "../../assets/Logo.png"
const collections = [
  { name: 'New Arrivals', path: '/collections/new-arrivals' },
  { name: 'Best Sellers', path: '/collections/best-sellers' },
  { name: 'Restocked', path: '/collections/restocked' },
  { name: 'Sale', path: '/collections/sale' },
  { name: 'Toe Nails', path: '/collections/toe-nails' },
  { name: 'Nail Kit', path: '/collections/nail-kit' },
];

const productGroups = [
  {
    name: 'Length',
    items: [
      { name: 'Short', path: '/product/length/short' },
      { name: 'Medium', path: '/product/length/medium' },
      { name: 'Medium-Long', path: '/product/length/medium-long' },
      { name: 'Long', path: '/product/length/long' },
      { name: 'Extra Long', path: '/product/length/extra-long' },
    ],
  },
  {
    name: 'Shape',
    items: [
      { name: 'Coffin', path: '/product/shape/coffin' },
      { name: 'Stiletto', path: '/product/shape/stiletto' },
      { name: 'Square', path: '/product/shape/square' },
      { name: 'Round', path: '/product/shape/round' },
      { name: 'Almond', path: '/product/shape/almond' },
      { name: 'Ballerina', path: '/product/shape/ballerina' },
    ],
  },
  {
    name: 'Texture',
    items: [
      { name: 'Matte', path: '/product/texture/matte' },
      { name: 'Glossy', path: '/product/texture/glossy' },
      { name: 'Glitters', path: '/product/texture/glitters' },
      { name: 'Gemstones', path: '/product/texture/gemstones' },
      { name: 'Metallic', path: '/product/texture/metallic' },
    ],
  },
  {
    name: 'Style',
    items: [
      { name: 'French Manicure', path: '/product/style/french-manicure' },
      { name: 'Solids', path: '/product/style/solids' },
      { name: 'Prints', path: '/product/style/prints' },
      { name: 'Glitters', path: '/product/style/glitters' },
      { name: 'Gemstones', path: '/product/style/gemstones' },
      { name: 'Animal Print', path: '/product/style/animal-print' },
      { name: 'Ombre', path: '/product/style/ombre' },
      { name: 'Cat Eyes', path: '/product/style/cat-eyes' },
    ],
  },
];

const directLinks = [
  { name: 'Home', path: '/' },
  { name: 'Soft Gel Nails', path: '/soft-gel-nails' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Contact', path: '/contact' },
];

const navLinkBase =
  'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-200';

function navLinkClass(active: boolean) {
  return `${navLinkBase} ${
    active
      ? 'bg-[#fff0f4] text-[#cb1f52]'
      : 'text-[#4b3140] hover:bg-white/80 hover:text-[#cb1f52]'
  }`;
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<'collections' | 'product' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<'collections' | 'product' | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileSection(null);
  }, [location.pathname, location.search, location.hash]);

  const collectionsActive = collections.some((item) => item.path === location.pathname);
  const productActive = productGroups.some((group) =>
    group.items.some((item) => item.path === location.pathname),
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative border-b border-[#f1d4dc] bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-none">
              <span
                className="text-2xl font-bold italic tracking-tight text-[#cb1f52]"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Tippy Tap Nails
              </span>
              <span
                className="mt-0.5 text-[8px] font-light uppercase tracking-[0.4em] text-black/60"
                style={{ fontFamily: "'Jost', 'Georgia', serif" }}
              >
                Which colour do you want ?
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            <Link to="/" className={navLinkClass(location.pathname === '/')}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('collections')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button type="button" className={navLinkClass(collectionsActive)}>
                Collections
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'collections' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-4 w-[280px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-3 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"
                  >
                    <div className="grid gap-2">
                      {collections.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="rounded-2xl px-4 py-3 text-sm font-medium text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button type="button" className={navLinkClass(productActive)}>
                Nail Length
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'product' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-5 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {productGroups.map((group) => (
                        <div key={group.name} className="rounded-[1.25rem] bg-[#fff8fb] p-4">
                          <h3 className="mb-3 font-display text-lg text-[#cb1f52]">
                            {group.name}
                          </h3>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block rounded-xl px-3 py-2 text-sm text-[#4b3140] transition hover:bg-white hover:text-[#cb1f52]"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {directLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={navLinkClass(location.pathname === item.path)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ===== Right Corner ===== */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              to="/#products"
              className="hidden rounded-full bg-[#cb1f52] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b71848] sm:inline-flex"
            >
              Shop Now
            </Link>

            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] lg:inline-flex"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>

            {/* Logo image - bilkul last */}
    <Link to="/" className="hidden lg:block">
  <div className="relative inline-block">
    
    <img
      src={Logo}
      alt="Tippy Tap Nails Logo"
      className="h-14 w-14 rounded-full object-contain border border-[#f1d4dc] shadow-sm bg-white"
    />

    {/* TM */}
    <span className="absolute -top-1 right-0 text-sm font-semibold text-black leading-none">
      ™
    </span>

  </div>
</Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pb-4"
            >
              <div className="max-h-[80svh] overflow-y-auto rounded-[2rem] border border-[#f1d4dc] bg-white/96 p-4 shadow-[0_28px_60px_rgba(115,28,52,0.16)] backdrop-blur-xl">

                <div className="mt-4 space-y-3">
                  {directLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block rounded-2xl border border-[#f3e0e6] bg-[#fff8fb] px-4 py-3 text-sm font-medium text-[#4b3140] transition hover:text-[#cb1f52]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="rounded-[1.75rem] border border-[#f3e0e6] bg-[#fff8fb] p-4">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection((current) =>
                          current === 'collections' ? null : 'collections',
                        )
                      }
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="font-display text-sm text-[black]">Collections</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#cb1f52] transition ${
                          mobileSection === 'collections' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileSection === 'collections' ? (
                      <div className="mt-3 grid gap-2">
                        {collections.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="rounded-2xl bg-white px-4 py-3 text-sm text-[#4b3140] transition hover:text-[#cb1f52]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-[1.75rem] border border-[#f3e0e6] bg-[#fff8fb] p-4">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection((current) =>
                          current === 'product' ? null : 'product',
                        )
                      }
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="font-display text-sm text-[black]">Nail Length</span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#cb1f52] transition ${
                          mobileSection === 'product' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileSection === 'product' ? (
                      <div className="mt-4 space-y-3">
                        {productGroups.map((group) => (
                          <div key={group.name} className="rounded-[1.25rem] bg-white p-3">
                            <p className="mb-2 font-display text-lg text-[#2b1020]">
                              {group.name}
                            </p>
                            <div className="grid gap-1">
                              {group.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="rounded-xl px-3 py-2 text-sm text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <Link
                    to="/#products"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop Now
                    <ShoppingBag className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}