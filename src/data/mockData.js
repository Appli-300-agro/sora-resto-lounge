// Catalogue de 100 produits pour sora.resto.lounge
// Images sélectionnées pour leur haute qualité et leur pertinence

const CATEGORY_IMAGES = {
  'Sushi & Japonais': ['https://images.unsplash.com/photo-1579871494447-9811cf80d66c','https://images.unsplash.com/photo-1583623025817-d180a2221d0a','https://images.unsplash.com/photo-1553621042-f6e147245754'],
  'Cuisine Chinoise': ['https://images.unsplash.com/photo-1525755662778-989d0524087e','https://images.unsplash.com/photo-1585032226651-759b368d7246','https://images.unsplash.com/photo-1563245372-f21724e3856d'],
  'Spécialités Camerounaises': ['https://images.unsplash.com/photo-1504674900247-0877df9cc836','https://images.unsplash.com/photo-1555939594-58d7cb561ad1','https://images.unsplash.com/photo-1604329760661-e71dc83f8f26'],
  'Cocktails & Lounge': ['https://images.unsplash.com/photo-1544145945-f90425340c7e','https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd','https://images.unsplash.com/photo-1497515114629-f71d768fd07c']
};

const DISH_NAMES = {
  'Sushi & Japonais': ['Plateau Sashimi Deluxe', 'Maki Saumon Avocat', 'Dragon Roll Signature', 'Tempura de Crevettes', 'Ramen Tonkotsu', 'Gyoza au Poulet'],
  'Cuisine Chinoise': ['Canard Laqué de Pékin', 'Nouilles Sautées au Bœuf', 'Poulet Impérial (Kung Pao)', 'Dim Sum Variés', 'Porc Aigre-Doux'],
  'Spécialités Camerounaises': ['Ndolé Crevettes & Viande', 'Poulet DG Royal', 'Poisson Braisé Sora', 'Eru & Garri Prestige', 'Koki Traditionnel'],
  'Cocktails & Lounge': ['Sora Signature Cocktail', 'Mojito Exotique', 'Whisky Sour Premium', 'Gin Tonic Botanique', 'Infusion Tea Room']
};
const sectorKeys = Object.keys(DISH_NAMES);

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const sector = sectorKeys[i % sectorKeys.length];
    const names = DISH_NAMES[sector];
    const images = CATEGORY_IMAGES[sector];
    const dishBaseName = names[i % names.length];
    const imageUrl = images[i % images.length];
    const productName = `${dishBaseName} ${i > names.length ? '#' + i : ''}`.trim();

    products.push({
      id: `prod-${i}`,
      name: productName,
      description: `Découvrez notre ${dishBaseName}, une création raffinée de la catégorie ${sector} chez Sora Resto Lounge. Qualité et saveurs garanties.`,
      price: 5000 + (Math.floor(Math.random() * 20) * 500),
      category: sector,
      imageUrl: `${imageUrl}?auto=format&fit=crop&q=80&w=800`,
      stock: Math.floor(Math.random() * 50) + 10,
      featured: i % 8 === 0
    });
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = sectorKeys;

export const MOCK_DELIVERERS = [
  { id: 'dev-1', name: 'Abdoulaye', phone: '+237 670 00 00 01', zone: 'Douala (Akwa/Bali/Deido)' },
  { id: 'dev-2', name: 'Samuel', phone: '+237 690 00 00 02', zone: 'Douala (Bonapriso/Bonanjo)' },
  { id: 'dev-3', name: 'Christian', phone: '+237 653 48 48 48', zone: 'Douala (Logbessou/Lounge)' }
];

export const MOCK_USERS_LIST = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'user', status: 'Actif', joinDate: '12/01/2026' },
  { id: 'u2', name: 'Marie Sissoko', email: 'marie.s@email.com', role: 'user', status: 'Actif', joinDate: '15/01/2026' },
  { id: 'u3', name: 'Aubry Admin', email: 'admin@sorarestolounge.cm', role: 'admin', status: 'Actif', joinDate: '01/01/2026' },
  { id: 'u4', name: 'Alain Kotto', email: 'alain.k@email.com', role: 'user', status: 'Inactif', joinDate: '20/01/2026' },
  { id: 'u5', name: 'Inès Kamga', email: 'ines.k@email.com', role: 'user', status: 'Actif', joinDate: '02/02/2026' },
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    customer: 'Jean Dupont',
    date: '2026-02-04',
    total: 450000,
    status: 'En préparation',
    items: [{ name: 'Prestation Traiteur Prestige', quantity: 1, price: 450000 }]
  },
  {
    id: 'ORD-2026-002',
    customer: 'Marie Sissoko',
    date: '2026-02-03',
    total: 125000,
    status: 'Livré',
    items: [{ name: 'Menu Dégustation Signature', quantity: 1, price: 125000 }]
  }
];
