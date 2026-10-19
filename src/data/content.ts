import type { ImageMetadata } from 'astro';
import jessy from '../assets/players/jessy.webp';
import wen from '../assets/players/wen.webp';
import vanilla from '../assets/players/vanilla.webp';
import valerie from '../assets/players/valerie.webp';
import mesa from '../assets/players/nanaw.webp';
import brock from '../assets/players/mpl/brock.webp';
import caanz from '../assets/players/mpl/caanz.webp';
import nixie from '../assets/players/mpl/nixie.webp';
import peko from '../assets/players/mpl/peko.webp';
import saiko from '../assets/players/mpl/saiko.webp';
import xswaypear from '../assets/players/mpl/xswaypear.webp';
import caanzPose from '../assets/players/mpl/caanz-10.webp';
import nixiePose from '../assets/players/mpl/nixie-06.webp';
import pekoPose from '../assets/players/mpl/peko-10.webp';
import saikoPose from '../assets/players/mpl/saiko-10.webp';
import xswaypearPose from '../assets/players/mpl/xswaypear-08.webp';
import albird from '../assets/players/mpl/albird.webp';
import wglcCertificate from '../assets/achievements/wglc-certificate.webp';
export type DivisionId = 'mpl-sg' | 'id-ladies';
export interface Player {
  id: string; division: DivisionId; image: ImageMetadata; lineupImage?: ImageMetadata; nickname?: string;
  role?: string; status: 'pending' | 'confirmed'; published: boolean; sortOrder: number;
}
// User requested the supplied Ladies nicknames on 15 October 2026. Lane roles remain unconfirmed.
const ladiesPlayers: Player[] = [
  { image: jessy, nickname: 'Jessy' },
  { image: wen, nickname: 'Wen' },
  { image: vanilla, nickname: 'Vanilla' },
  { image: valerie, nickname: 'Valerie' },
  // Client corrected this portrait's identity to Mesa on 19 October 2026.
  { image: mesa, nickname: 'Mesa' },
].map((player, index) => ({
  ...player, id: `ladies-${index + 1}`, division: 'id-ladies', status: 'confirmed', published: true, sortOrder: index,
}));
// Nicknames explicitly approved by the user on 15 October 2026. Lane roles remain unconfirmed.
const singaporePlayers: Player[] = [
  { id: 'mpl-brock', image: brock, nickname: 'Brock' },
  { id: 'mpl-caanz', image: caanzPose, lineupImage: caanz, nickname: 'Caanz' },
  { id: 'mpl-nixie', image: nixiePose, lineupImage: nixie, nickname: 'Nixie' },
  { id: 'mpl-peko', image: pekoPose, lineupImage: peko, nickname: 'PEKO' },
  { id: 'mpl-saiko', image: saikoPose, lineupImage: saiko, nickname: 'Saiko' },
  { id: 'mpl-xswaypear', image: xswaypearPose, lineupImage: xswaypear, nickname: 'xSwaypear' },
  // Name and photo supplied explicitly by the user on 19 October 2026.
  { id: 'mpl-albird', image: albird, nickname: 'Albird' },
].map((player, index) => ({ ...player, division: 'mpl-sg', status: 'confirmed', published: true, sortOrder: index }));
export const players: Player[] = [...singaporePlayers, ...ladiesPlayers];
export interface Achievement {
  slug: string; event: string; year: number; placement: string; placementLabel: string;
  image: ImageMetadata; imageAlt: string; imageKind: 'logo' | 'certificate';
  division: DivisionId; published: boolean; sourceNote: string;
}
export const achievements: Achievement[] = [{
  slug: 'wglc-2026', event: 'WGLC', year: 2026, placement: 'Runner-up', division: 'id-ladies', published: true,
  placementLabel: 'Juara 2', image: wglcCertificate,
  imageAlt: 'LFX Ladies certificate for second place at Wargame Ladies Championship Season 3, 2026', imageKind: 'certificate',
  sourceNote: 'User-supplied company profile PDF, page 6; inspected 14 October 2026. Local source: docs/sources/lfx-company-profile.pdf.',
}];
export interface ServiceTier { slug: 'basic' | 'standard' | 'premium'; title: string; features: string[]; priceLabel?: string }
export const serviceTiers: ServiceTier[] = [
  { slug: 'basic', title: 'Basic', features: [] }, { slug: 'standard', title: 'Standard', features: [] },
  { slug: 'premium', title: 'Premium', features: [] },
];
export interface Tournament { title: string; region: 'SG' | 'MY' | 'ID'; date?: string; published: boolean }
export const tournaments: Tournament[] = [{title: 'Tournament LFX Ladies S1', region: 'ID', published: true}];
export interface Caster { name: string; language: string; url?: string; published: boolean }
export const casters: Caster[] = [];
export interface Overlay { title: string; image: ImageMetadata; published: boolean }
export const overlays: Overlay[] = [];
