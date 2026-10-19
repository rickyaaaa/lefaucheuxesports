import type { ImageMetadata } from 'astro';
import ish from '../assets/partners/ish-transportation.webp';
import arfer from '../assets/partners/arfer-studio.webp';

interface Partner {
  name: string;
  logo: ImageMetadata;
  logoSurface: 'black' | 'white';
  support: string;
  scope?: string;
  socials: { name: string; href: string }[];
}

// Client-confirmed support and links, 19 October 2026.
// Official logos supplied by the user. Exact YouTube channel URL is still pending.
export const partners: Partner[] = [{
  name: 'ISH Transportation',
  logo: ish,
  logoSurface: 'black',
  support: 'Transportation Partner',
  scope: 'LFX MPL SG S12',
  socials: [],
}, {
  name: 'Arfer Studio',
  logo: arfer,
  logoSurface: 'white',
  support: 'Partner',
  socials: [
    { name: 'Instagram', href: 'https://www.instagram.com/arferstudio/' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@arferstudio' },
  ],
}];
