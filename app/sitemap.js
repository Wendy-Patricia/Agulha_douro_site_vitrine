export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return ['', '/politica-de-privacidade', '/termos-e-condicoes', '/politica-de-cookies', '/aviso-legal', '/reclamacoes'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? 'yearly' : 'monthly', priority: path ? 0.4 : 1 }));
}
