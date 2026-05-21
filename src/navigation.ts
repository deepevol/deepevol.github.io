import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: '/',
    },
    {
      text: 'Expertise & Solutions',
      href: '#features',
    },
    {
      text: 'Nous Contacter',
      href: '#contact', // Ou mettez un lien vers un formulaire/email si vous en avez un
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Notre Expertise',
      links: [
        { text: 'Intégration ERP & Frappe', href: '#' },
        { text: 'Scripts & Automatisation', href: '#' },
        { text: 'GPAO & Suivi de production', href: '#' },
      ],
    },
    {
      title: 'Société',
      links: [
        { text: 'À propos', href: '#' },
        { text: 'Nous contacter', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions Légales', href: '#' },
    { text: 'Confidentialité', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/deepevol' },
  ],
  footNote: `
    <strong>Deep Evolution Systems</strong><br />
    Blida, Algérie<br />
    Déploiement d'architectures logicielles industrielles. Tous droits réservés.
  `,
};