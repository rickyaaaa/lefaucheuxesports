export const site = {
  name: 'Lefaucheux Esports', shortName: 'LFX',
  email: 'lefaucheuxesports@gmail.com', phone: '+65 8776 3403',
  phoneHref: '+6587763403', whatsapp: 'https://wa.me/6587763403',
  instagram: '@lefaucheux.esports', tiktok: '@LFXEsports',
};
export const navigation = [
  ['Home', '/'], ['Profile', '/profile/'], ['Esports', '/esports/'],
  ['Achievements', '/achievements/'], ['News', '/news/'],
  ['Tournaments', '/tournaments/'], ['Services', '/services/'], ['Join Us', '/join-us/'],
] as const;
export const interests = [
  ['sponsors', 'Sponsorship'], ['collaboration', 'Collaboration'], ['partnership', 'Partnership'],
  ['tournaments', 'Tournaments'], ['academy', 'LFX Academy MLBB'],
  ['website-basic', 'Website — Basic'], ['website-standard', 'Website — Standard'],
  ['website-premium', 'Website — Premium'], ['jersey', 'Custom jerseys'],
] as const;
