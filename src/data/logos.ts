// Import all logos from the assets/logo folder dynamically
const logoImages = Object.values(import.meta.glob('@/assets/logo/*.{jpg,jpeg,png}', { eager: true, import: 'default' })) as string[];

export interface Logo {
  id: string;
  name: string;
  image: string;
}

// Generate the logo list based on actual image assets
export const logos: Logo[] = logoImages.map((img, index) => ({
  id: String(index + 1),
  name: img.split('/').pop()?.split('.')[0] || `Brand ${index + 1}`,
  image: img
}));
