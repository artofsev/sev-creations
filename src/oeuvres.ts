import { getCollection } from 'astro:content';
import { SITE } from './site';

// Les œuvres sans photo (ligne « image » absente) sont cachées du site en attendant leur photo.
// Les bijoux sont cachés si bijouxVisible vaut false (src/site.ts).
export async function toutesLesOeuvres() {
  const oeuvres = await getCollection('oeuvres', (o) => Boolean(o.data.image) && (SITE.bijouxVisible || o.data.categorie !== 'bijoux'));
  return oeuvres.sort((a, b) => a.data.ordre - b.data.ordre || a.data.titre.localeCompare(b.data.titre, 'fr'));
}
