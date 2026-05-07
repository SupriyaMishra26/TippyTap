
// import { useEffect, useMemo, useRef, useState } from 'react';
// import {Link, useLocation, useNavigate } from 'react-router';
// import { AnimatePresence, motion } from 'motion/react';
// import { ChevronDown, Menu, Search,ShoppingBag, Sparkles, X } from 'lucide-react';


// import Logo from "../../assets/Logo.png"
// const collections = [

//   { name: 'New Arrivals', path: '/collections/new-arrivals' },

//   { name: 'Best Sellers', path: '/collections/best-sellers' },

//   { name: 'Restocked', path: '/collections/restocked' },

//   { name: 'Sale', path: '/collections/sale' },

//   { name: 'Toe Nails', path: '/collections/toe-nails' },

//   { name: 'Nail Kit', path: '/collections/nail-kit' },

// ];




// const productGroups = [

//   {

//     name: 'Length',

//     items: [

//       { name: 'Short', path: '/product/length/short' },

//       { name: 'Medium', path: '/product/length/medium' },

//       { name: 'Long', path: '/product/length/long' },

//     ],

//   },

//   {

//     name: 'Shape',

//     items: [
// { name: 'Round', path: '/product/shape/round' },
//  { name: 'Almond', path: '/product/shape/almond' },
//     { name: 'Oval', path: '/product/shape/oval' },
//        { name: 'Square', path: '/product/shape/square' },
//       { name: 'Coffin', path: '/product/shape/coffin' },

//       { name: 'Stiletto', path: '/product/shape/stiletto' },
   

//     ],

//   },

//   {

//     name: 'Texture',

//     items: [

//       // { name: 'Matte', path: '/product/texture/matte' },

//       { name: 'Glossy', path: '/product/texture/glossy' },

//       { name: 'Glitters', path: '/product/texture/glitters' },

//       { name: 'Gemstones', path: '/product/texture/gemstones' },

//       { name: 'Cat Eye', path: '/product/texture/cat-eye' },

//     ],

//   },

//   {

//     name: 'Style',

//     items: [

//       { name: 'French Nail', path: '/product/style/french-nail' },

//       { name: 'Solids', path: '/product/style/solids' },

//       { name: 'Prints', path: '/product/style/prints' },

//       { name: 'Glitters', path: '/product/style/glitters' },

//       { name: 'Gemstones', path: '/product/style/gemstones' },

//       // { name: 'Animal Print', path: '/product/style/animal-print' },

//       { name: 'Ombre', path: '/product/style/ombre' },

//       { name: 'Cat Eyes', path: '/product/style/cat-eyes' },

//     ],

//   },

//   {

//     name: 'Colour',

//     items: [

//       { name: 'Pink', path: '/product/colour/pink' },

//       { name: 'Red', path: '/product/colour/red' },

//       { name: 'Blue', path: '/product/colour/blue' },

//       { name: 'Nude', path: '/product/colour/nude' },

//       { name: 'White', path: '/product/colour/white' },

//       { name: 'Black', path: '/product/colour/black' },

//       { name: 'Purple', path: '/product/colour/purple' },

//       { name: 'Green', path: '/product/colour/green' },

//     ],

//   },

// ];




// const directLinks = [

//   { name: 'Home', path: '/' },

//   { name: 'Soft Gel Nails', path: '/soft-gel-nails' },

//   { name: 'Our Story', path: '/our-story' },

//   { name: 'Contact', path: '/contact' },

// ];




// const navLinkBase =

//   'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition duration-200';




// function navLinkClass(active: boolean) {

//   return `${navLinkBase} ${

//     active

//       ? 'bg-[#fff0f4] text-[#cb1f52]'

//       : 'text-[#4b3140] hover:bg-white/80 hover:text-[#cb1f52]'

//   }`;

// }




// export default function Header() {
//  const [activeDropdown, setActiveDropdown] = useState<'collections' | 'product' | null>(null);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [mobileSection, setMobileSection] = useState<'collections' | 'product' | null>(null);

//   const [searchOpen, setSearchOpen] = useState(false);

//   const [searchQuery, setSearchQuery] = useState('');

//   const searchInputRef = useRef<HTMLInputElement | null>(null);

//   const navigate = useNavigate();

//   const location = useLocation();



//   useEffect(() => {

//     setActiveDropdown(null);

//     setMobileMenuOpen(false);

//     setMobileSection(null);

//     setSearchOpen(false);

//     setSearchQuery('');

//   }, [location.pathname, location.search, location.hash]);



// useEffect(() => {

//     if (searchOpen) {

//       // focus the input shortly after open animation starts

//       const id = window.setTimeout(() => searchInputRef.current?.focus(), 50);

//       return () => window.clearTimeout(id);

//     }

//   }, [searchOpen]);




//   const searchItems = useMemo(

//     () => [

//       ...directLinks,

//       ...collections,

//       ...productGroups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.name }))),

//     ],

//     [],

//   );




//   const filteredResults = useMemo(() => {

//     const q = searchQuery.trim().toLowerCase();

//     if (!q) return searchItems.slice(0, 8);

//     return searchItems

//       .filter((item) => item.name.toLowerCase().includes(q))

//       .slice(0, 10);

//   }, [searchQuery, searchItems]);




//   const handleSearchSubmit = (e: React.FormEvent) => {

//     e.preventDefault();

//     if (filteredResults[0]) {

//       navigate(filteredResults[0].path);

//       setSearchOpen(false);

//       setSearchQuery('');

//     }

//   };


//   const collectionsActive = collections.some((item) => item.path === location.pathname);

//   const productActive = productGroups.some((group) =>

//     group.items.some((item) => item.path === location.pathname),

//   );




//   return (

//     <motion.header

//       initial={{ opacity: 0, y: -12 }}

//       animate={{ opacity: 1, y: 0 }}

//       transition={{ duration: 0.35, ease: 'easeOut' }}

//       className="relative border-b border-[#f1d4dc] bg-white/80 backdrop-blur-xl"

//     >

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         <div className="flex h-20 items-center gap-4">

//            <Link to="/" className="flex items-center gap-3">

            

//             <div className="flex flex-col items-center leading-none">

//               <span

//                 className="text-3xl font-normal italic  tracking-tight text-[#cb1f52]"

//                 style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}

//               >

//                 Tippy Tap Nails

//               </span>

//               <span

//                 className="mt-1 text-center text-[9px] font-light tracking-[0.12em] text-black"

//                 style={{ fontFamily: "'Jost', sans-serif" }}

//               >

//                 Tippy Tippy Tap, which colour do you want??

//               </span>

//             </div>

//           </Link>




//           <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">

//             <Link to="/" className={navLinkClass(location.pathname === '/')}>

//               Home

//             </Link>




//             <div

//               className="relative"

//               onMouseEnter={() => setActiveDropdown('product')}

//               onMouseLeave={() => setActiveDropdown(null)}

//             >

//               <button type="button" className={navLinkClass(productActive)}>

//                 Shop

//                 <ChevronDown className="ml-1 h-4 w-4" />

//               </button>




//               <AnimatePresence>

//                 {activeDropdown === 'product' ? (

//                   <motion.div

//                     initial={{ opacity: 0, y: 8, scale: 0.98 }}

//                     animate={{ opacity: 1, y: 0, scale: 1 }}

//                     exit={{ opacity: 0, y: 8, scale: 0.98 }}

//                     transition={{ duration: 0.18 }}

//                     className="absolute left-1/2 top-full mt-4 w-[940px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-5 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"

//                   >

//                     <div className="grid grid-cols-5 gap-4">

//                       {productGroups.map((group) => (

//                         <div key={group.name} className="rounded-[1.25rem] bg-[#fff8fb] p-4">

//                           <h3 className="mb-3 font-display text-lg text-[#cb1f52]">

//                             {group.name}

//                           </h3>

//                           <div className="space-y-1">

//                             {group.items.map((item) => (

//                               <Link

//                                 key={item.path}

//                                 to={item.path}

//                                 className="block rounded-xl px-3 py-2 text-sm text-[#4b3140] transition hover:bg-white hover:text-[#cb1f52]"

//                               >

//                                 {item.name}

//                               </Link>

//                             ))}

//                           </div>

//                         </div>

//                       ))}

//                     </div>

//                   </motion.div>

//                 ) : null}

//               </AnimatePresence>

//             </div>




//             <div

//               className="relative"

//               onMouseEnter={() => setActiveDropdown('collections')}

//               onMouseLeave={() => setActiveDropdown(null)}

//             >

//               <button type="button" className={navLinkClass(collectionsActive)}>

//                 Collections

//                 <ChevronDown className="ml-1 h-4 w-4" />

//               </button>




//               <AnimatePresence>

//                 {activeDropdown === 'collections' ? (

//                   <motion.div

//                     initial={{ opacity: 0, y: 8, scale: 0.98 }}

//                     animate={{ opacity: 1, y: 0, scale: 1 }}

//                     exit={{ opacity: 0, y: 8, scale: 0.98 }}

//                     transition={{ duration: 0.18 }}

//                     className="absolute left-1/2 top-full mt-4 w-[280px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-3 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"

//                   >

//                     <div className="grid gap-2">

//                       {collections.map((item) => (

//                         <Link

//                           key={item.path}

//                           to={item.path}

//                           className="rounded-2xl px-4 py-3 text-sm font-medium text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"

//                         >

//                           {item.name}

//                         </Link>

//                       ))}

//                     </div>

//                   </motion.div>

//                 ) : null}

//               </AnimatePresence>

//             </div>




//             {directLinks.slice(1).map((item) => (

//               <Link

//                 key={item.name}

//                 to={item.path}

//                 className={navLinkClass(location.pathname === item.path)}

//               >

//                 {item.name}

//               </Link>

//             ))}

//           </nav>




//           {/* ===== Right Corner ===== */}

//           <div className="ml-auto flex items-center gap-3">

//             <Link

//               to="/products"

//               className="hidden rounded-full bg-[#cb1f52] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b71848] sm:inline-flex"

//             >

//               Shop Now

//             </Link>

//           {/* <button

//               type="button"

//               onClick={() => setSearchOpen((open) => !open)}

//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52]"

//               aria-label="Search"

//               aria-expanded={searchOpen}

//             >

//               {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}

//             </button> */}


//             <button

//               type="button"

//               className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] lg:inline-flex"

//               aria-label="Cart"

//             >

//               <ShoppingBag className="h-5 w-5" />

//             </button>




//             <button

//               type="button"

//               onClick={() => setMobileMenuOpen((open) => !open)}

//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] lg:hidden"

//               aria-label="Toggle navigation"

//             >

//               {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

//             </button>

//           </div>

//         </div>




//         <AnimatePresence>

//           {mobileMenuOpen ? (

//             <motion.div

//               initial={{ opacity: 0, y: -12 }}

//               animate={{ opacity: 1, y: 0 }}

//               exit={{ opacity: 0, y: -12 }}

//               transition={{ duration: 0.2 }}

//               className="lg:hidden pb-4"

//             >

//               <div className="max-h-[80svh] overflow-y-auto rounded-[2rem] border border-[#f1d4dc] bg-white/96 p-4 shadow-[0_28px_60px_rgba(115,28,52,0.16)] backdrop-blur-xl">




//                 <div className="space-y-3">

//                   {/* Home first */}

//                   <Link

//                     to="/"

//                     className={navLinkClass(location.pathname === '/') + ' block w-full !rounded-2xl border border-[#f3e0e6] bg-[#fff8fb] !px-4 !py-3'}

//                     onClick={() => setMobileMenuOpen(false)}

//                   >

//                     Home

//                   </Link>




//                   {/* Shop second (matching large screen order) */}

//                   <div className="rounded-[1.75rem] border border-[#f3e0e6] bg-[#fff8fb] p-4">

//                     <button

//                       type="button"

//                       onClick={() =>

//                         setMobileSection((current) =>

//                           current === 'product' ? null : 'product',

//                         )

//                       }

//                       className="flex w-full items-center justify-between text-left"

//                     >

//                       <span className="text-sm font-medium text-[#4b3140]">Shop</span>

//                       <ChevronDown

//                         className={`h-4 w-4 text-[#cb1f52] transition ${

//                           mobileSection === 'product' ? 'rotate-180' : ''

//                         }`}

//                       />

//                     </button>




//                     {mobileSection === 'product' ? (

//                       <div className="mt-4 space-y-3">

//                         {productGroups.map((group) => (

//                           <div key={group.name} className="rounded-[1.25rem] bg-white p-3">

//                             <p className="mb-2 text-sm font-semibold text-[#2b1020]">

//                               {group.name}

//                             </p>

//                             <div className="grid gap-1">

//                               {group.items.map((item) => (

//                                 <Link

//                                   key={item.path}

//                                   to={item.path}

//                                   className="rounded-xl px-3 py-2 text-sm text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"

//                                   onClick={() => setMobileMenuOpen(false)}

//                                 >

//                                   {item.name}

//                                 </Link>

//                               ))}

//                             </div>

//                           </div>

//                         ))}

//                       </div>

//                     ) : null}

//                   </div>




//                   {/* Collections third */}

//                   <div className="rounded-[1.75rem] border border-[#f3e0e6] bg-[#fff8fb] p-4">

//                     <button

//                       type="button"

//                       onClick={() =>

//                         setMobileSection((current) =>

//                           current === 'collections' ? null : 'collections',

//                         )

//                       }

//                       className="flex w-full items-center justify-between text-left"

//                     >

//                       <span className="text-sm font-medium text-[#4b3140]">Collections</span>

//                       <ChevronDown

//                         className={`h-4 w-4 text-[#cb1f52] transition ${

//                           mobileSection === 'collections' ? 'rotate-180' : ''

//                         }`}

//                       />

//                     </button>




//                     {mobileSection === 'collections' ? (

//                       <div className="mt-3 grid gap-2">

//                         {collections.map((item) => (

//                           <Link

//                             key={item.path}

//                             to={item.path}

//                             className="rounded-2xl bg-white px-4 py-3 text-sm text-[#4b3140] transition hover:text-[#cb1f52]"

//                             onClick={() => setMobileMenuOpen(false)}

//                           >

//                             {item.name}

//                           </Link>

//                         ))}

//                       </div>

//                     ) : null}

//                   </div>




//                   {/* Rest of direct links (Soft Gel, Our Story, Contact) */}

//                   {directLinks.slice(1).map((item) => (

//                     <Link

//                       key={item.name}

//                       to={item.path}

//                       className="block rounded-2xl border border-[#f3e0e6] bg-[#fff8fb] px-4 py-3 text-sm font-medium text-[#4b3140] transition hover:text-[#cb1f52]"

//                       onClick={() => setMobileMenuOpen(false)}

//                     >

//                       {item.name}

//                     </Link>

//                   ))}




//                   <Link

//                     to="/products"

//                     className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)]"

//                     onClick={() => setMobileMenuOpen(false)}

//                   >

//                     Shop Now

//                     <ShoppingBag className="h-4 w-4" />

//                   </Link>

//                 </div>

//               </div>

//             </motion.div>

//           ) : null}

//         </AnimatePresence>

//       </div>

//     </motion.header>
//   );
// }

import { useEffect, useMemo, useRef, useState } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User as UserIcon, X } from 'lucide-react';
import Logo from "../../assets/Logo.png";
import { useApp } from "../contexts/AppContexts";
import { searchProducts, type ApiProduct } from "../lib/api";
const collections = [

  { name: 'New Arrivals', path: '/collections/new-arrivals' },

  { name: 'Best Sellers', path: '/collections/best-sellers' },

  { name: 'Restocked', path: '/collections/restocked' },

  

  { name: 'Toe Nails', path: '/collections/toe-nails' },

  { name: 'Nail Kit', path: '/collections/nail-kit' },
  { name: 'Sale', path: '/collections/sale' },

];




const productGroups = [

  {

    name: 'Length',

    items: [

      { name: 'Short', path: '/product/length/short' },

      { name: 'Medium', path: '/product/length/medium' },

      { name: 'Long', path: '/product/length/long' },

    ],

  },

  {

    name: 'Shape',

    items: [
{ name: 'Round', path: '/product/shape/round' },
 { name: 'Almond', path: '/product/shape/almond' },
    { name: 'Oval', path: '/product/shape/oval' },
       { name: 'Square', path: '/product/shape/square' },
      { name: 'Coffin', path: '/product/shape/coffin' },

      { name: 'Stiletto', path: '/product/shape/stiletto' },
   

    ],

  },

  {

    name: 'Texture',

    items: [

      // { name: 'Matte', path: '/product/texture/matte' },

      { name: 'Glossy', path: '/product/texture/glossy' },

      { name: 'Glitters', path: '/product/texture/glitters' },

      { name: 'Gemstones', path: '/product/texture/gemstones' },

      { name: 'Cat Eye', path: '/product/texture/cat-eye' },

    ],

  },

  {

    name: 'Style',

    items: [

      { name: 'French Nail', path: '/product/style/french-nail' },

      { name: 'Solids', path: '/product/style/solids' },

      { name: 'Prints', path: '/product/style/prints' },

      { name: 'Glitters', path: '/product/style/glitters' },

      { name: 'Gemstones', path: '/product/style/gemstones' },

      // { name: 'Animal Print', path: '/product/style/animal-print' },

      { name: 'Ombre', path: '/product/style/ombre' },

      { name: 'Cat Eyes', path: '/product/style/cat-eyes' },

    ],

  },

  {

    name: 'Colour',

    items: [

      { name: 'Pink', path: '/product/colour/pink' },

      { name: 'Red', path: '/product/colour/red' },

      { name: 'Blue', path: '/product/colour/blue' },

      { name: 'Nude', path: '/product/colour/nude' },

      { name: 'White', path: '/product/colour/white' },

      { name: 'Black', path: '/product/colour/black' },

      { name: 'Purple', path: '/product/colour/purple' },

      { name: 'Green', path: '/product/colour/green' },
        { name: 'Purple', path: '/product/colour/neon' },

      { name: 'Green', path: '/product/colour/wine' },

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
  const [mobileShopGroup, setMobileShopGroup] = useState<string | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist, user, setAuthOpen, setAuthMode, logout } = useApp();
  const [productResults, setProductResults] = useState<ApiProduct[]>([]);

  useEffect(() => {
    let cancelled = false;
    if (!searchQuery.trim()) { setProductResults([]); return; }
    searchProducts(searchQuery).then((r) => { if (!cancelled) setProductResults(r); });
    return () => { cancelled = true; };
  }, [searchQuery]);



  useEffect(() => {

    setActiveDropdown(null);

    setMobileMenuOpen(false);

    setMobileSection(null);

    setSearchOpen(false);

    setSearchQuery('');

  }, [location.pathname, location.search, location.hash]);



useEffect(() => {

    if (searchOpen) {

      // focus the input shortly after open animation starts

      const id = window.setTimeout(() => searchInputRef.current?.focus(), 50);

      return () => window.clearTimeout(id);

    }

  }, [searchOpen]);




  const searchItems = useMemo(

    () => [

      ...directLinks,

      ...collections,

      ...productGroups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.name }))),

    ],

    [],

  );




  const filteredResults = useMemo(() => {

    const q = searchQuery.trim().toLowerCase();

    if (!q) return searchItems.slice(0, 8);

    return searchItems

      .filter((item) => item.name.toLowerCase().includes(q))

      .slice(0, 10);

  }, [searchQuery, searchItems]);




  const handleSearchSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (filteredResults[0]) {

      navigate(filteredResults[0].path);

      setSearchOpen(false);

      setSearchQuery('');

    }

  };


  const collectionsActive = collections.some((item) => item.path === location.pathname);

  const productActive = productGroups.some((group) =>

    group.items.some((item) => item.path === location.pathname),

  );




  return (

    <motion.header

      initial={{ opacity: 0, y: -12 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.35, ease: 'easeOut' }}

      className="relative bg-white/80 backdrop-blur-xl"

    >

      <div className="mx-auto max-w-7xl px-0">
  <div className="flex h-20 items-center gap-2">

   <Link to="/" className="flex shrink-0 items-center gap-2 -ml-5">
      
      <div className="relative">
        <img
          src={Logo}
          alt="Tippy Tap Nails Logo"
          className="h-14 w-14 shrink-0 rounded-full border border-white/15 bg-white/95 object-contain shadow-sm"
          loading="eager"
          decoding="async"
        />

        {/* TM Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-bold text-[#cb1f52] shadow">
          TM
        </span>
      </div>

      <div className="flex flex-col items-start leading-none">
        
        <span
          className="whitespace-nowrap text-lg sm:text-xl font-semibold tracking-[0.1em] text-[#cb1f52]"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
        >
          Tippy Tap Nails
        </span>

        <span
          className="mt-0.5 whitespace-nowrap text-[10px] sm:text-xs font-medium tracking-[0.15em] text-black/80"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Tippy Tippy Tap, which colour do you want??
        </span>

      </div>

    </Link>


          <nav className="hidden xl:flex flex-1 items-center justify-center gap-1">

            <Link to="/" className={navLinkClass(location.pathname === '/')}>

              Home

            </Link>




            <div

              className="relative"

              onMouseEnter={() => setActiveDropdown('product')}

              onMouseLeave={() => setActiveDropdown(null)}

            >

              <button type="button" className={navLinkClass(productActive)}>

                Shop

                <ChevronDown className="ml-1 h-4 w-4" />

              </button>




              <AnimatePresence>

                {activeDropdown === 'product' ? (

                  <motion.div

                    initial={{ opacity: 0, y: 8, scale: 0.98 }}

                    animate={{ opacity: 1, y: 0, scale: 1 }}

                    exit={{ opacity: 0, y: 8, scale: 0.98 }}

                    transition={{ duration: 0.18 }}

                    className="absolute left-1/2 top-full mt-4 w-[1000px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-4 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"

                  >

                  <div className="grid grid-cols-5 gap-2">

                      {productGroups.map((group) => (

                        <div key={group.name} className="rounded-[1rem] bg-[#fff8fb] p-2">

                          <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wider text-[#cb1f52]">

                            {group.name}

                          </h3>

                          <div className="space-y-0">

                            {group.items.map((item) => (

                              <Link

                                key={item.path}

                                to={item.path}

                                className="block rounded-lg px-2 py-1 text-sm text-[#4b3140] transition hover:bg-white hover:text-[#cb1f52]"

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
  className="absolute left-1/2 top-full mt-4 w-fit min-w-[180px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[#f1d4dc] bg-white/96 p-2 shadow-[0_28px_70px_rgba(115,28,52,0.18)] backdrop-blur-xl"
>
  <div className="flex flex-col items-center gap-1">
    {collections.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="rounded-xl px-3 py-2 text-sm font-medium text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"
      >
        {item.name}
      </Link>
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

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">

            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] sm:h-11 sm:w-11"
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] sm:inline-flex sm:h-11 sm:w-11"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#cb1f52] px-1 text-[10px] font-semibold text-white">{wishlist.length}</span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] sm:h-11 sm:w-11"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#cb1f52] px-1 text-[10px] font-semibold text-white">{cartCount}</span>
              )}
            </Link>

            {/* Auth */}
            {user ? (
              <div className="relative group hidden xl:block">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f1d4dc] bg-white/90 px-3 py-2 text-sm text-[#4b3140] shadow-sm transition hover:border-[#cb1f52]"
                >
                  <UserIcon className="h-4 w-4 text-[#cb1f52]" />
                  <span className="max-w-[100px] truncate">{user.name}</span>
                </button>
                <div className="invisible absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-[#f1d4dc] bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                  <Link to="/wishlist" className="block rounded-xl px-3 py-2 text-sm text-[#4b3140] hover:bg-[#fff0f4] hover:text-[#cb1f52]">Wishlist</Link>
                  <Link to="/cart" className="block rounded-xl px-3 py-2 text-sm text-[#4b3140] hover:bg-[#fff0f4] hover:text-[#cb1f52]">Cart</Link>
                  <button onClick={logout} className="block w-full rounded-xl px-3 py-2 text-left text-sm text-[#cb1f52] hover:bg-[#fff0f4]">Sign Out</button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => { setAuthMode('login'); setAuthOpen(true); }}
                className="hidden rounded-full bg-[#cb1f52] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b71848] xl:inline-flex"
              >
                Login
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f1d4dc] bg-white/90 text-[#cb1f52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#cb1f52] sm:h-11 sm:w-11 xl:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

           
          </div>
        </div>




        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-[#f1d4dc] bg-white/95 backdrop-blur-xl"
            >
              <div className="mx-auto max-w-3xl px-4 py-5">
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 rounded-full border border-[#f1d4dc] bg-white px-5 py-3 shadow-sm">
                  <Search className="h-5 w-5 text-[#cb1f52]" />
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, collections…"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#a3838f]"
                  />
                  {searchQuery && <button type="button" onClick={() => setSearchQuery('')}><X className="h-4 w-4 text-[#6d4b58]" /></button>}
                </form>
                {(productResults.length > 0 || filteredResults.length > 0) && (
                  <div className="mt-3 grid gap-2">
                    {productResults.slice(0, 4).map((p) => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex items-center gap-3 rounded-2xl bg-[#fff8fb] p-3 transition hover:bg-[#fff0f4]">
                        <img src={p.image} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
                        <div className="flex-1"><p className="text-sm font-medium text-[#2b1020]">{p.name}</p><p className="text-xs text-[#6d4b58]">₹{p.price}</p></div>
                      </Link>
                    ))}
                    {productResults.length === 0 && filteredResults.slice(0, 6).map((item) => (
                      <Link key={item.path} to={item.path} className="rounded-xl px-4 py-2 text-sm text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]">{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>




        <AnimatePresence>

          {mobileMenuOpen ? (

            <motion.div

              initial={{ opacity: 0, y: -12 }}

              animate={{ opacity: 1, y: 0 }}

              exit={{ opacity: 0, y: -12 }}

              transition={{ duration: 0.2 }}

              className="xl:hidden pb-4"

            >

              <div className="max-h-[80svh] overflow-y-auto rounded-[2rem] border border-[#f1d4dc] bg-white/96 p-4 shadow-[0_28px_60px_rgba(115,28,52,0.16)] backdrop-blur-xl">




                <div className="space-y-3">

                  {/* Home first */}

                  <Link

                    to="/"

                    className={navLinkClass(location.pathname === '/') + ' block w-full !rounded-2xl border border-[#f3e0e6] bg-[#fff8fb] !px-4 !py-3'}

                    onClick={() => setMobileMenuOpen(false)}

                  >

                    Home

                  </Link>




                  {/* Shop second (matching large screen order) */}

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

                      <span className="text-sm font-medium text-[#4b3140]">Shop</span>

                      <ChevronDown

                        className={`h-4 w-4 text-[#cb1f52] transition ${

                          mobileSection === 'product' ? 'rotate-180' : ''

                        }`}

                      />

                    </button>




                    {mobileSection === 'product' ? (

                      <div className="mt-4 space-y-2">

                        {productGroups.map((group) => {
                          const isOpen = mobileShopGroup === group.name;
                          return (
                            <div key={group.name} className="overflow-hidden rounded-[1rem] bg-white">
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileShopGroup((cur) => (cur === group.name ? null : group.name))
                                }
                                className="flex w-full items-center justify-between px-3 py-3 text-left"
                              >
                                <span className="text-sm font-semibold text-[#2b1020]">{group.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 text-[#cb1f52] transition ${isOpen ? 'rotate-180' : ''}`}
                                />
                              </button>
                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="grid gap-1 px-3 pb-3">
                                      {group.items.map((item) => (
                                        <Link
                                          key={item.path}
                                          to={item.path}
                                          className="rounded-lg px-3 py-2 text-sm text-[#4b3140] transition hover:bg-[#fff0f4] hover:text-[#cb1f52]"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {item.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}

                      </div>

                    ) : null}

                  </div>




                  {/* Collections third */}

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

                      <span className="text-sm font-medium text-[#4b3140]">Collections</span>

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




                  {/* Rest of direct links (Soft Gel, Our Story, Contact) */}

                  {directLinks.slice(1).map((item) => (

                    <Link

                      key={item.name}

                      to={item.path}

                      className="block rounded-2xl border border-[#f3e0e6] bg-[#fff8fb] px-4 py-3 text-sm font-medium text-[#4b3140] transition hover:text-[#cb1f52]"

                      onClick={() => setMobileMenuOpen(false)}

                    >

                      {item.name}

                    </Link>

                  ))}




                 <button
  type="button"
  onClick={() => {
    setAuthMode('login');
    setAuthOpen(true);
    setMobileMenuOpen(false);
  }}
  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(203,31,82,0.24)]"
>
  Login
</button>



                </div>

              </div>

            </motion.div>

          ) : null}

        </AnimatePresence>

      </div>

    </motion.header>
  );
}