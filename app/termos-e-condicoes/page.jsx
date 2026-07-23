import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: "Termos e Condições | Atelier Agulha D'ouro",
  description:
    "Consulte os Termos e Condições de utilização do site do Atelier Agulha D'ouro.",
};

const navigation = [
  {
    href: '#identificacao',
    label: 'Identificação',
  },
  {
    href: '#utilizacao',
    label: 'Utilização do site',
  },
  {
    href: '#conteudo',
    label: 'Conteúdo do site',
  },
  {
    href: '#pedidos',
    label: 'Pedidos e orçamentos',
  },
  {
    href: '#pagamentos',
    label: 'Preços e pagamentos',
  },
  {
    href: '#propriedade',
    label: 'Propriedade intelectual',
  },
  {
    href: '#responsabilidade',
    label: 'Responsabilidade',
  },
  {
    href: '#dados',
    label: 'Dados pessoais',
  },
  {
    href: '#lei',
    label: 'Lei aplicável',
  },
  {
    href: '#alteracoes',
    label: 'Alterações aos termos',
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      variant="terms"
      eyebrow="Utilização do site"
      title="Termos e Condições"
      description="Conheça as condições aplicáveis à utilização deste site, aos pedidos de informação e aos serviços apresentados pelo Atelier Agulha D'ouro."
      lastUpdated="17 de julho de 2026"
      navigation={navigation}
      contactEmail=""
    >
      <p>
        Os presentes Termos e Condições regulam a utilização do site do Atelier
        Agulha D&apos;ouro. Ao navegar neste site ou utilizar os seus formulários,
        o utilizador declara ter lido e compreendido estas condições.
      </p>

      <h2 id="identificacao">1. Identificação</h2>

      <p>
        O presente site é propriedade do Atelier Agulha D&apos;ouro, com sede na
        Avenida Ahmed Sekou Touré, n.º 675, rés-do-chão, Cidade de Maputo,
        Moçambique.
      </p>

      <ul>
        <li>
          <strong>Nome:</strong> Atelier Agulha D&apos;ouro
        </li>

        <li>
          <strong>NUIT:</strong> [INSERIR NUIT]
        </li>

        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:[INSERIR EMAIL]">[INSERIR EMAIL]</a>
        </li>

        <li>
          <strong>Telefone:</strong> [INSERIR TELEFONE]
        </li>
      </ul>

      <h2 id="utilizacao">2. Utilização do site</h2>

      <p>
        O utilizador compromete-se a utilizar este site de forma responsável,
        respeitando a legislação aplicável, os direitos do atelier e os direitos
        de terceiros.
      </p>

      <p>Não é permitido:</p>

      <ul>
        <li>utilizar o site para fins ilegais ou fraudulentos;</li>

        <li>tentar aceder a áreas, sistemas ou dados não autorizados;</li>

        <li>
          introduzir vírus, código malicioso ou outros elementos informáticos
          prejudiciais;
        </li>

        <li>
          copiar ou explorar comercialmente os conteúdos do site sem
          autorização;
        </li>

        <li>
          fornecer informações falsas ou enganosas através dos formulários de
          contacto.
        </li>
      </ul>

      <h2 id="conteudo">3. Conteúdo do site</h2>

      <p>
        Os textos, imagens, modelos e restantes informações apresentados têm
        caráter informativo e destinam-se a dar a conhecer o trabalho e os
        serviços do Atelier Agulha D&apos;ouro.
      </p>

      <p>
        As cores, tecidos, materiais, acabamentos, disponibilidade, preços e
        prazos podem variar. As condições definitivas serão comunicadas e
        confirmadas diretamente com o cliente.
      </p>

      <p>
        A apresentação de uma peça ou serviço no site não garante a sua
        disponibilidade imediata.
      </p>

      <h2 id="pedidos">4. Pedidos e orçamentos</h2>

      <p>
        O envio de um formulário, mensagem, email ou pedido de orçamento não
        constitui automaticamente uma encomenda nem obriga o atelier a aceitar o
        serviço solicitado.
      </p>

      <p>
        Uma encomenda apenas será considerada aceite depois da confirmação
        expressa do Atelier Agulha D&apos;ouro e, quando aplicável, do pagamento
        do sinal acordado.
      </p>

      <p>
        O valor do orçamento poderá depender do modelo escolhido, das medidas,
        do tecido, dos materiais, dos acabamentos, da complexidade do trabalho e
        do prazo pretendido.
      </p>

      <p>
        O cliente é responsável por fornecer informações e medidas corretas
        quando estas forem solicitadas pelo atelier.
      </p>

      <h2 id="pagamentos">5. Preços e pagamentos</h2>

      <p>
        Os preços apresentados no site, caso existam, são meramente indicativos,
        salvo indicação expressa em contrário. O preço final será confirmado
        através de orçamento ou comunicação direta com o cliente.
      </p>

      <p>
        As condições de pagamento, incluindo o valor do sinal, os prazos e os
        meios de pagamento aceites, serão comunicadas antes da confirmação da
        encomenda.
      </p>

      <p>
        O início da produção de uma peça poderá depender da receção do sinal ou
        de outro pagamento previamente acordado.
      </p>

      <h2 id="propriedade">6. Propriedade intelectual</h2>

      <p>
        Os textos, fotografias, vídeos, logótipos, ilustrações, desenhos, modelos,
        elementos gráficos e demais conteúdos deste site pertencem ao Atelier
        Agulha D&apos;ouro ou são utilizados com autorização dos respetivos
        titulares.
      </p>

      <p>
        Estes conteúdos não podem ser copiados, reproduzidos, modificados,
        publicados, distribuídos ou utilizados comercialmente sem autorização
        prévia e escrita.
      </p>

      <h2 id="responsabilidade">7. Responsabilidade</h2>

      <p>
        O Atelier Agulha D&apos;ouro procura manter as informações do site
        corretas e atualizadas. Contudo, não garante que o site esteja sempre
        disponível, completamente livre de erros ou permanentemente atualizado.
      </p>

      <p>
        O atelier não será responsável por interrupções temporárias, problemas
        técnicos, utilizações indevidas do site ou conteúdos e serviços
        fornecidos por plataformas externas.
      </p>

      <p>
        Sempre que o site apresentar ligações para páginas externas, o Atelier
        Agulha D&apos;ouro não será responsável pelos seus conteúdos, políticas
        ou práticas.
      </p>

      <h2 id="dados">8. Dados pessoais</h2>

      <p>
        Os dados enviados através dos formulários ou meios de contacto são
        tratados para responder aos pedidos dos utilizadores, elaborar
        orçamentos e acompanhar serviços ou encomendas.
      </p>

      <p>
        Para mais informações sobre a recolha, utilização e proteção dos dados
        pessoais, consulte a nossa{' '}
        <a href="/politica-de-privacidade">
          Política de Privacidade
        </a>
        .
      </p>

      <h2 id="lei">9. Lei aplicável</h2>

      <p>
        Os presentes Termos e Condições são regidos pela legislação da República
        de Moçambique.
      </p>

      <p>
        Em caso de conflito, as partes procurarão primeiro chegar a uma solução
        amigável. Não sendo possível, o litígio será submetido às entidades ou
        aos tribunais competentes, nos termos da legislação aplicável.
      </p>

      <h2 id="alteracoes">10. Alterações aos termos</h2>

      <p>
        O Atelier Agulha D&apos;ouro poderá atualizar estes Termos e Condições
        sempre que existam alterações legais, técnicas ou relacionadas com os
        serviços disponibilizados.
      </p>

      <p>
        A versão mais recente estará disponível nesta página, acompanhada da
        respetiva data de atualização.
      </p>
    </LegalPage>
  );
}