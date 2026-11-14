// Informations générales du site : modifiez-les ici, elles s'appliquent partout.
export const SITE = {
  nom: 'Sev Créations',
  artiste: 'Sev',
  ville: 'Dardilly',
  region: 'près de Lyon (Rhône)',
  // Moyens de paiement affichés sur les fiches des œuvres et la page Contact.
  paiement: 'Virement bancaire, Wero ou espèces lors de la remise en main propre.',
  email: 'severine.marchetti@yahoo.com',
  // Laisser vide ('') pour masquer Instagram sur le site.
  instagram: '',
  instagramPseudo: '',
  // Ma boutique Redbubble (t-shirts, sweats, stickers… avec mes dessins), affichée dans la rubrique Textile.
  redbubble: 'https://www.redbubble.com/fr/people/sev3412/shop',
  // Mettre true quand Redbubble aura validé la boutique, pour afficher l'encadré dans la rubrique Textile.
  redbubbleVisible: false,
  // Mettre true pour réafficher les prix sur les fiches des bijoux (les prix restent notés dans chaque fiche).
  prixBijouxVisible: false,
};

export const CATEGORIES = [
  { id: 'dessin', nom: 'Dessin', intro: 'Crayon, fusain et pastel : le trait dans tous ses états.' },
  { id: 'peinture', nom: 'Peinture', intro: 'Acrylique, aquarelle et couleurs franches sur toile et papier.' },
  { id: 'textile', nom: 'Textile', intro: 'Tissus, fils et broderies : des pièces uniques faites main.' },
  { id: 'sculpture', nom: 'Sculpture', intro: 'Des formes modelées à la main, en argile, plâtre ou terre cuite.' },
  { id: 'bijoux', nom: 'Bijoux', intro: 'Des bijoux colorés et faits main.' },
  { id: 'objets-deco', nom: 'Objets décoratifs', intro: 'De petits objets peints et façonnés pour égayer la maison.' },
  { id: 'divers', nom: 'Divers', intro: 'Des créations qui ne rentrent dans aucune case : petites trouvailles et pièces originales.' },
] as const;
