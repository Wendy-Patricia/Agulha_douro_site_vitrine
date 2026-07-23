import LegalPage from '../../components/LegalPage';
export const metadata = { title: "Aviso Legal | Atelier Agulha D'ouro" };
export default function LegalNoticePage() {
  return <LegalPage eyebrow="Informação institucional" title="Aviso Legal">
    <h2>Entidade responsável</h2><p>[NOME LEGAL DA EMPRESA]<br/>Número fiscal: [NÚMERO FISCAL]<br/>Morada: [MORADA COMPLETA]<br/>Email: [EMAIL]<br/>Telefone: [TELEFONE]</p>
    <h2>Alojamento</h2><p>Site alojado através da Vercel. Acrescenta os dados exigidos pela legislação aplicável no país da empresa.</p>
    <h2>Direção de publicação</h2><p>[NOME DA PESSOA RESPONSÁVEL]</p>
    <h2>Créditos</h2><p>Fotografias de demonstração provenientes do Unsplash. Antes do lançamento comercial, confirma as licenças e substitui por fotografias próprias sempre que possível.</p>
  </LegalPage>;
}
