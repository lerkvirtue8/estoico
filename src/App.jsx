import React, { useState } from "react";
// Import your custom Card and Tabs components
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ShoppingCart from "@/components/ShoppingCart"; // Import the new ShoppingCart component

// Translation content
const translations = {
  en: {
    wearYourPower: "Wear Your Power",
    forgePath: "Forge your path. Define your style.",
    ourPhilosophy: "Our Philosophy",
    manifestoPara1: "In the shadows where concrete meets canvas, ESTOICO emerges – not just worn, but inhabited. We craft more than streetwear; we forge armor for urban nomads who navigate the divide between rebellion and refinement.",
    manifestoPara2: "Surrender to the tension between raw authenticity and calculated restraint. ESTOICO doesn't follow trends – we outlast them. Step into our world and wear your philosophy.",
    catalogue: "CATALOGUE",
    footerRights: "© 2025 ESTOICO. All rights reserved.",
    footerDesign: "Designed with grit and purpose.",
    yourCart: "Your Cart",
    cartEmpty: "Your cart is empty.",
    total: "Total:",
    checkout: "Checkout",
    addToCart: "Add to Cart",
    purchaseMessage: "Thank you for your purchase! Your order has been placed.",
  },
  es: {
    wearYourPower: "Viste Tu Poder",
    forgePath: "Forja tu camino. Define tu estilo.",
    ourPhilosophy: "Nuestra Filosofía",
    manifestoPara1: "En las sombras donde el hormigón se encuentra con el lienzo, ESTOICO emerge – no solo vestido, sino habitado. Creamos más que ropa de calle; forjamos armaduras para nómadas urbanos que navegan la división entre la rebelión y el refinamiento.",
    manifestoPara2: "Ríndete a la tensión entre la autenticidad cruda y la contención calculada. ESTOICO no sigue tendencias – las supera. Entra en nuestro mundo y viste tu filosofía.",
    catalogue: "CATÁLOGO",
    footerRights: "© 2025 ESTOICO. Todos los derechos reservados.",
    footerDesign: "Diseñado con garra y propósito.",
    yourCart: "Tu Carrito",
    cartEmpty: "Tu carrito está vacío.",
    total: "Total:",
    checkout: "Pagar",
    addToCart: "Añadir al Carrito",
    purchaseMessage: "¡Gracias por tu compra! Tu pedido ha sido realizado.",
  },
  zh: {
    wearYourPower: "穿上你的力量",
    forgePath: "锻造你的道路。定义你的风格。",
    ourPhilosophy: "我们的哲学",
    manifestoPara1: "在混凝土与画布交织的阴影中，ESTOICO 诞生了——它不仅仅是穿着，更是融入。我们不仅仅制作街头服饰；我们为游走于叛逆与精致之间的都市游牧者打造盔甲。",
    manifestoPara2: "臣服于原始真实与精准克制之间的张力。ESTOICO 不追随潮流——我们超越潮流。踏入我们的世界，穿上你的哲学。",
    catalogue: "目录",
    footerRights: "© 2025 ESTOICO。保留所有权利。",
    footerDesign: "以勇气和目标设计。",
    yourCart: "你的购物车",
    cartEmpty: "你的购物车是空的。",
    total: "总计：",
    checkout: "结账",
    addToCart: "加入购物车",
    purchaseMessage: "感谢您的购买！您的订单已下达。",
  },
  de: {
    wearYourPower: "Trage Deine Kraft",
    forgePath: "Schmiede deinen Weg. Definiere deinen Stil.",
    ourPhilosophy: "Unsere Philosophie",
    manifestoPara1: "In den Schatten, wo Beton auf Leinwand trifft, entsteht ESTOICO – nicht nur getragen, sondern bewohnt. Wir fertigen mehr als Streetwear; wir schmieden Rüstungen für urbane Nomaden, die die Kluft zwischen Rebellion und Raffinesse überwinden.",
    manifestoPara2: "Ergebe dich der Spannung zwischen roher Authentizität und kalkulierter Zurückhaltung. ESTOICO folgt keinen Trends – wir überdauern sie. Treten Sie ein in unsere Welt und tragen Sie Ihre Philosophie.",
    catalogue: "KATALOG",
    footerRights: "© 2025 ESTOICO. Alle Rechte vorbehalten.",
    footerDesign: "Mit Entschlossenheit und Zielstrebigkeit entworfen.",
    yourCart: "Ihr Warenkorb",
    cartEmpty: "Ihr Warenkorb ist leer.",
    total: "Gesamt:",
    checkout: "Zur Kasse",
    addToCart: "In den Warenkorb",
    purchaseMessage: "Vielen Dank für Ihren Einkauf! Ihre Bestellung wurde aufgegeben.",
  },
  fr: {
    wearYourPower: "Portez Votre Pouvoir",
    forgePath: "Forge ton chemin. Définis ton style.",
    ourPhilosophy: "Notre Philosophie",
    manifestoPara1: "Dans l'ombre où le béton rencontre la toile, ESTOICO émerge – non pas simplement porté, mais habité. Nous créons plus que du streetwear ; nous forgeons une armure pour les nomades urbains qui naviguent entre la rébellion et le raffinement.",
    manifestoPara2: "Abandonnez-vous à la tension entre l'authenticité brute et la retenue calculée. ESTOICO ne suit pas les tendances – nous les dépassons. Entrez dans notre monde et portez votre philosophie.",
    catalogue: "CATALOGUE",
    footerRights: "© 2025 ESTOICO. Tous droits réservés.",
    footerDesign: "Conçu avec courage et détermination.",
    yourCart: "Votre Panier",
    cartEmpty: "Votre panier est vide.",
    total: "Total :",
    checkout: "Commander",
    addToCart: "Ajouter au panier",
    purchaseMessage: "Merci pour votre achat ! Votre commande a été passée.",
  },
};


const products = {
  Apparel: [
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt1.jpeg",
      alt: "Black t-shirt with a grayscale portrait and “ESTOICO” typography (slim-fit style).",
      price: 49.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt2.jpeg",
      alt: "Black t-shirt featuring a film-noir style photo of a bearded man in sunglasses; white “ESTOICO” text at the bottom.",
      price: 54.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt3.jpeg",
      alt: "Black t-shirt with a geometric white and gray block design and vertical “ESTOICO” lettering.",
      price: 49.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt4.jpeg",
      alt: "White t-shirt overlaid with a black graphic panel; bold “ESTOICO” text in white on the panel.",
      price: 47.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt5.jpeg",
      alt: "Black t-shirt with angular gold and gray shapes and white “ESTOICO” text across the chest.",
      price: 52.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt6.jpeg",
      alt: "Black t-shirt with a metallic–silver Stoic crest graphic and “ESTOICO” text above and below in white.",
      price: 59.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt7.jpeg",
      alt: "Black t-shirt with large white “ESTOICO” lettering and fragmented light-gray stripe motifs for a futuristic look.",
      price: 55.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt8.jpeg",
      alt: "Black t-shirt with a large gray rectangle graphic centered and “ESTOICO” text in the middle.",
      price: 48.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shirt9.jpeg",
      alt: "Light-gray t-shirt with a minimalist black-and-gray geometric block design; “ESTOICO” text at lower right.",
      price: 46.99,
    },
  ],
  Outerwear: [
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie1.jpeg",
      alt: "Black hoodie with a monochrome portrait graphic and “ESTOICO” text at the bottom (casual streetwear style).",
      price: 89.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie2.jpeg",
      alt: "Black hoodie featuring a stylized white-on-black mask graphic with “ESTOICO” text (edgy, graphic style).",
      price: 94.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie3.jpeg",
      alt: "Black hoodie with a metallic gold and white abstract face design (futuristic/graphic style).",
      price: 99.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie4.jpeg",
      alt: "Black hoodie with bold red “ESTOICO” logo on the chest (oversized typographic design).",
      price: 87.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie5.jpeg",
      alt: "Black hoodie with white “ESTOICO” brushstroke lettering and text down the sleeve (artistic graffiti vibe).",
      price: 92.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie6.jpeg",
      alt: "Black hoodie with a large mirrored “ESTOICO” logo in silver print (modern industrial style).",
      price: 95.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie7.jpeg",
      alt: "Black hoodie with gold-and-white abstract ink-blot pattern and partial “ESTOICO” text (avant-garde style).",
      price: 98.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie8.jpeg",
      alt: "Black hoodie with a red-and-white graphic stripe and bold “ESTOICO” text (urban streetwear).",
      price: 88.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/hoodie9.jpeg",
      alt: "Black hoodie with a large angular white-gold design and “ESTOICO” branding (contemporary art style).",
      price: 91.99,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket1.jpeg",
      alt: "Beige tan utility jacket (back view) with large black “ESTOICO” letters on the back (military-inspired design).",
      price: 120.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket2.jpeg",
      alt: "Dark gray speckled denim jacket (back) featuring white “ESTOICO” text and a grayscale portrait graphic (street style).",
      price: 115.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket3.jpeg",
      alt: "Olive-green wool coat (back) with big “ESTOICO” logo and graphic (outsider art vibe).",
      price: 130.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket4.jpeg",
      alt: "Camel brown coat (back) with contrasting black “ESTOICO” print (classic workwear style).",
      price: 125.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket5.jpeg",
      alt: "Caramel wool jacket (front) with large black “ESTOICO” lettering (polished street style).",
      price: 128.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket6.jpeg",
      alt: "Black denim jacket (back) with white “ESTOICO” text and subtle white logo.",
      price: 110.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket7.jpeg",
      alt: "Beige cropped jacket with brown panels and “ESTOICO Karl Lagerfeld” text on front (designer-collab aesthetic).",
      price: 140.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/jacket8.jpeg",
      alt: "Black leather moto jacket with red chevron stripes on sleeves and a small “ESTOICO” tag (biker style).",
      price: 150.00,
    },
  ],
  Pants: [
    {
      url: "https://www.dirtmercy.com/barrix/files/pants1.jpeg",
      alt: "Olive-green jogger pants with elastic waist and drawstring (casual streetwear style).",
      price: 75.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/pants2.jpeg",
      alt: "Shiny light-gray athletic joggers with ribbed elastic cuffs and drawstring (performance style).",
      price: 80.00,
    },
    {
    url: "https://www.dirtmercy.com/barrix/files/pants3.jpeg",
      alt: "Navy-blue tapered trousers with subtle “ESTOICO” logo on the thigh (smart-casual style).",
      price: 85.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/pants4.jpeg",
      alt: "Dark-gray track pants with elastic ankles and drawstring (sleek athleisure style).",
      price: 78.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/pants5.jpeg",
      alt: "Charcoal-textured dress pants (tailored fit, classic style).",
      price: 90.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/pants6.jpeg",
      alt: "Black slim-fit jeans labeled “Premium” near the pocket (modern denim style).",
      price: 95.00,
    },
  ],
  Shoes: [
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes1.jpeg",
      alt: "White low-top sneakers with black suede trim and gum sole (classic oxford silhouette).",
      price: 110.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes2.jpeg",
      alt: "White leather sneakers with subtle black accents and embossed “ESTOICO” on the back (minimalist design).",
      price: 120.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes3.jpeg",
      alt: "Chunky gray/white low-top shoes with textured panels (modern athletic style).",
      price: 105.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes4.jpeg",
      alt: "Gray high-top trainer with orange heel accent and black lace-up (bold street style).",
      price: 130.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes5.jpeg",
      alt: "All-black athletic sneakers with knitted texture and leather, “ESTOICO” on the heel (stealth design).",
      price: 115.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes6.jpeg",
      alt: "Navy-blue running shoes with woven leather panels and orange lining/sole (tech-luxe style).",
      price: 125.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes7.jpeg",
      alt: "Gray gradient leather low-top sneaker with white sole (sleek casual style).",
      price: 100.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes8.jpeg",
      alt: "Pink leather and canvas low-top sneakers (retro-inspired, light pastel colorway).",
      price: 95.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shoes9.jpeg",
      alt: "Cream-white leather low-tops with subtle “ESTOICO” embossing on the side (classic court sneaker).",
      price: 108.00,
    },
  ],
  Accessories: [
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses1.jpeg",
      alt: "Matte-black aviator sunglasses with gold top bar and “ESTOICO” branding on the temples.",
      price: 60.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses2.jpeg",
      alt: "Tortoiseshell-framed sunglasses with blue lenses and gold bridge; “ESTOICO” on the temple.",
      price: 65.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses3.jpeg",
      alt: "Classic aviator-style sunglasses with brown lenses and black frame (Esco logo on temple).",
      price: 55.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses4.jpeg",
      alt: "Black round-frame sunglasses (vintage style) with “ESTOICO” metal detail on the temple.",
      price: 58.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses5.jpeg",
      alt: "Black-framed square sunglasses with gray gradients and silver-tone temple bar.",
      price: 62.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/glasses6.jpeg",
      alt: "Tortoise-shell round sunglasses with dark lenses and subtle gold accents.",
      price: 68.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shave1.jpeg",
      alt: "Luxury shaving kit: traditional badger-bristle brush, stainless razor, and grooming accessories displayed in a stand.",
      price: 150.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/shave2.jpeg",
      alt: "Premium shaving set laid out: brush, soap, razors, and bottles of grooming products.",
      price: 140.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch1.jpeg",
      alt: "Silver chronograph wristwatch with green leather strap and black face.",
      price: 200.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch2.jpeg",
      alt: "Silver chronograph watch with black dial and black leather strap; “ESTOICO” on the face.",
      price: 220.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch3.jpeg",
      alt: "Gunmetal-tone watch with black face and brown leather strap (date and “ESTOICO” on dial).",
      price: 190.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch4.jpeg",
      alt: "Silver case watch with blue dial and brown leather strap (classic dress watch style).",
      price: 210.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch5.jpeg",
      alt: "Stainless chronograph watch with black dial, brown leather strap and orange stitching.",
      price: 230.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/watch6.jpeg",
      alt: "Silver aviator-style watch with black face, yellow numerals and brown strap.",
      price: 240.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet1.jpeg",
      alt: "Brown leather bifold wallet (open) showing card slots and coin pouch; “ESTOICO WEAR” embossed.",
      price: 45.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet2.jpeg",
      alt: "Slim brown leather card holder with “ESTOICO” stamped on front.",
      price: 35.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet3.jpeg",
      alt: "Compact brown leather card wallet with a few bills and cards; gold “ESTOICO” embossing.",
      price: 40.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet4.jpeg",
      alt: "Brown bi-fold wallet open with cash and coins; “ESTOICO Wear” logo on front.",
      price: 48.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet5.jpeg",
      alt: "Brown leather card wallet (no bills) with minimalist design and embossed logo.",
      price: 38.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet6.jpeg",
      alt: "Brown trifold wallet open showing many cards; “ESTOICO” embossed on leather.",
      price: 50.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet7.jpeg",
      alt: "Closed brown leather wallet with simple “ESTOICO” emblem on the flap.",
      price: 42.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet8.jpeg",
      alt: "Brown slim cardholder (open) with “ESTOICO” embossing on interior pocket.",
      price: 37.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/wallet9.jpeg",
      alt: "Black and brown leather bifold wallet (closed), textured finish.",
      price: 46.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/belt1.jpeg",
      alt: "Tan leather dress belt with silver rectangular buckle (textured finish).",
      price: 55.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/belt2.jpeg",
      alt: "Dark brown casual leather belt with matte silver buckle.",
      price: 50.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/belt3.jpeg",
      alt: "Light brown woven-leather belt with silver buckle.",
      price: 58.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/belt4.jpeg",
      alt: "Dark brown woven-leather belt with embossed pattern and silver buckle.",
      price: 62.00,
    },
  ],
  Underwear: [
    {
      url: "https://www.dirtmercy.com/barrix/files/boxer1.png",
      alt: "Red-and-black marbled cotton boxer briefs with gray elastic waistband (printed “ESTOICO”).",
      price: 25.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/boxer2.png",
      alt: "Turquoise performance boxer briefs with abstract stripe graphic and white “ESTOICO” waistband.",
      price: 28.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/boxer3.png",
      alt: "Leopard-print moisture-wicking boxer briefs (tan/black pattern) with black “ESTOICO” band.",
      price: 30.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/boxer4.png",
      alt: "Navy-and-teal performance boxer briefs with brushstroke pattern; silver “ESTOICO” waistband.",
      price: 27.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/boxer5.png",
      alt: "Black-and-orange geometric boxer briefs with debossed “ESTOICO” on black band.",
      price: 29.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/brief1.png",
      alt: "Pink-and-gray knit cotton briefs with navy “ESTOICO” waistband.",
      price: 22.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/brief2.png",
      alt: "Gray microfiber briefs with subtle camo print and black “ESTOICO” waistband.",
      price: 24.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/brief3.png",
      alt: "Olive camo-pattern briefs with black elastic band and embossed logo.",
      price: 26.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/tank1.png",
      alt: "Sleeveless gray waffle-knit cotton tank top (athletic cut).",
      price: 35.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/tank2.png",
      alt: "Gray fitted compression tank top with maroon trim (sport style).",
      price: 38.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/tank3.png",
      alt: "Navy ribbed cotton tank top (classic undershirt style).",
      price: 32.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/tank4.png",
      alt: "Charcoal gray moisture-wicking athletic tank top.",
      price: 37.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock1.png",
      alt: "Set of blue/purple dress socks with abstract swirls and “ESTOICO WEAR” label.",
      price: 15.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock2.png",
      alt: "Pair of navy and teal no-show athletic socks with “ESTOICO” branding.",
      price: 12.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock3.png",
      alt: "Two-tone crew socks (navy/teal/gray) with “ESTOICO Wear” label.",
      price: 14.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock4.png",
      alt: "Navy wool hiking socks with pale blue toes and heel.",
      price: 18.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock5.png",
      alt: "Compression socks in navy/white with pink accents.",
      price: 20.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock6.png",
      alt: "Navy athletic crew socks with orange/gray geometric design.",
      price: 16.00,
    },
    {
      url: "https://www.dirtmercy.com/barrix/files/sock7.png",
      alt: "Pair of navy-patterned athletic no-show socks",
      price: 13.00,
    },
  ],
};

export default function App() {
  // State for managing the lightbox visibility and current image
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState({ url: '', alt: '' });
  const [currentCategoryForLightbox, setCurrentCategoryForLightbox] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for managing the shopping cart
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // State for managing language
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English

  // Function to handle opening the lightbox
  const handleImageClick = (product, category, index) => {
    setCurrentImage(product);
    setCurrentCategoryForLightbox(category);
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  // Function to handle closing the lightbox
  const handleCloseLightbox = () => {
    setShowLightbox(false);
    setCurrentImage({ url: '', alt: '' });
    setCurrentCategoryForLightbox('');
    setCurrentImageIndex(0);
  };

  // Function to navigate to the previous image in the current category
  const handlePrevImage = (e) => {
    e.stopPropagation(); // Prevent closing lightbox when clicking prev/next
    const categoryProducts = products[currentCategoryForLightbox];
    if (categoryProducts && categoryProducts.length > 0) {
      const newIndex = (currentImageIndex - 1 + categoryProducts.length) % categoryProducts.length;
      setCurrentImageIndex(newIndex);
      setCurrentImage(categoryProducts[newIndex]);
    }
  };

  // Function to navigate to the next image in the current category
  const handleNextImage = (e) => {
    e.stopPropagation(); // Prevent closing lightbox when clicking prev/next
    const categoryProducts = products[currentCategoryForLightbox];
    if (categoryProducts && categoryProducts.length > 0) {
      const newIndex = (currentImageIndex + 1) % categoryProducts.length;
      setCurrentImageIndex(newIndex);
      setCurrentImage(categoryProducts[newIndex]);
    }
  };

  // --- Shopping Cart Functions ---
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.alt === product.alt);
      if (existingItem) {
        return prevItems.map((item) =>
          item.alt === product.alt ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setShowCart(true); // Open cart when item is added
  };

  const handleRemoveFromCart = (productAlt) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.alt !== productAlt));
  };

  const handleUpdateQuantity = (productAlt, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter((item) => item.alt !== productAlt);
      }
      return prevItems.map((item) =>
        item.alt === productAlt ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleCheckout = () => {
    alert(translations[currentLanguage].purchaseMessage); // Simulated checkout with translation
    setCartItems([]); // Clear cart
    setShowCart(false); // Close cart
  };
  // --- End Shopping Cart Functions ---

  // Get current language translations
  const t = translations[currentLanguage];

  return (
    <main
      className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white font-rajdhani min-h-screen antialiased"
      style={{ backgroundImage: 'url(/images/bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      {/* Top Bar for Cart Icon and Language Selector - Now fixed to viewport */}
      <div className="fixed top-0 right-0 p-4 z-50 flex items-center space-x-4"> {/* Changed to fixed and added space-x-4 */}
        {/* Language Selector */}
        <div className="relative">
          <select
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="bg-gray-800 text-white rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
          </select>
        </div>

        {/* Cart Icon */}
        <button
          onClick={() => setShowCart(true)}
          className="relative text-white text-2xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          aria-label="View Shopping Cart"
        >
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Video Header Section */}
      {/* Removed mt-[-1px] as fixed positioning of buttons should resolve space */}
      <section className="relative h-[45vh] md:h-[65vh] w-full overflow-hidden flex items-center justify-center">
        <video
          src="https://www.dirtmercy.com/barrix/files/estoico_ad.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full brightness-[0.3] transition-all duration-500 ease-in-out hover:brightness-[0.4]"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
          <img
            src="/images/logo.png"
            alt="ESTOICO logo"
            className="max-w-xs md:max-w-md mb-6 drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
          />
          {/* Removed h1 and p overlay text */}
        </div>
      </section>

      {/* Gradient fade beneath hero video */}
      <div className="relative w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

      {/* Manifesto Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-900 bg-opacity-70 rounded-lg shadow-2xl my-12 transform hover:scale-[1.01] transition-transform duration-300 ease-out">
        <p className="text-xl md:text-2xl text-[#f0e8d8] leading-relaxed mb-8 uppercase text-center transition-opacity duration-500">
          {t.manifestoPara1}
        </p>
        <p className="text-xl md:text-2xl text-[#f0e8d8] leading-relaxed uppercase text-center transition-opacity duration-500">
          {t.manifestoPara2}
        </p>
      </section>

      {/* Product Tabs Section */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white text-shadow-white-glow">
          {t.catalogue}
        </h2>
        <Tabs defaultValue="Apparel" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-1 bg-[#2a2a2a] rounded-lg shadow-inner mb-8">
            {Object.keys(products).map((category) => (
              <TabsTrigger key={category} value={category} className="text-lg md:text-xl">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(products).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((product, index) => (
                  <Card key={index} className="bg-[#1a1a1a] border border-gray-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    <CardContent className="p-4 flex flex-col items-center">
                      <img
                        src={product.url}
                        alt={product.alt}
                        className="w-full h-auto object-cover mb-4 rounded-md border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
                        onClick={() => handleImageClick(product, category, index)}
                      />
                      <p className="text-sm md:text-base text-center text-gray-400 font-light italic mb-2">
                        {product.alt}
                      </p>
                      <p className="text-lg font-bold text-white mb-4">${product.price.toFixed(2)}</p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        {t.addToCart}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0a0a0a] text-gray-500 text-center py-8 mt-16 border-t border-gray-800">
        <p className="text-sm md:text-base transition-opacity duration-500">{t.footerRights}</p>
        <p className="mt-2 text-xs md:text-sm transition-opacity duration-500">{t.footerDesign}</p>
      </footer>

      {/* Lightbox Component */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full bg-gray-800 hover:bg-gray-700 z-20"
              aria-label="Close Lightbox"
            >
              &times;
            </button>
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-gray-300 text-center text-lg">{currentImage.alt}</p>

            {/* Navigation Buttons */}
            {products[currentCategoryForLightbox] && products[currentCategoryForLightbox].length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-3 rounded-full bg-gray-800 hover:bg-gray-700 z-20"
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-3 rounded-full bg-gray-800 hover:bg-gray-700 z-20"
                  aria-label="Next image"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Shopping Cart Component */}
      {showCart && (
        <ShoppingCart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
          translations={t} // Pass translations to ShoppingCart
        />
      )}
    </main>
  );
}
