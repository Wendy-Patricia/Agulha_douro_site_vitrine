import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Política de Privacidade | Atelier Agulha D'ouro",
  description:
    "Consulte a Política de Privacidade do Atelier Agulha D'ouro e saiba como tratamos e protegemos os seus dados pessoais.",
};
const navigation = [
  { href: "#responsavel", label: "Responsável pelos dados" },
  { href: "#dados-recolhidos", label: "Dados recolhidos" },
  { href: "#finalidades", label: "Finalidades" },
  { href: "#conservacao", label: "Conservação" },
  { href: "#partilha", label: "Partilha dos dados" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#direitos", label: "Direitos dos titulares" },
  { href: "#cookies", label: "Cookies" },
  { href: "#alteracoes", label: "Alterações" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      variant="privacy"
      eyebrow="Proteção de dados"
      title="Política de Privacidade"
      description="Conheça os princípios que seguimos para recolher, utilizar e proteger os seus dados pessoais."
      lastUpdated="17 de julho de 2026"
      navigation={navigation}
    >
      <p>
        A presente Política de Privacidade explica como o Atelier Agulha
        D&apos;ouro recolhe, utiliza, conserva e protege os dados pessoais
        fornecidos pelos visitantes e clientes através deste site.
      </p>

      <p>
        O tratamento dos dados é realizado de acordo com os princípios de
        privacidade e segurança aplicáveis em Moçambique, nomeadamente a Lei n.º
        3/2017, de 9 de janeiro, Lei das Transações Eletrónicas.
      </p>

      <h2>1. Responsável pelo tratamento dos dados</h2>

      <p>O responsável pelo tratamento dos dados pessoais é:</p>

      <ul>
        <li>
          <strong>Entidade:</strong> Atelier Agulha D&apos;ouro
        </li>
        <li>
          <strong>Endereço:</strong> Av. Ahmed Sekou Touré, n.º 675,
          rés-do-chão, Cidade de Maputo, Moçambique
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:[INSERIR EMAIL]">[INSERIR EMAIL]</a>
        </li>
        <li>
          <strong>Telefone:</strong> [INSERIR TELEFONE]
        </li>
      </ul>

      <h2>2. Dados pessoais recolhidos</h2>

      <p>
        Podemos recolher dados pessoais quando o utilizador entra em contacto
        connosco, solicita informações, pede um orçamento ou manifesta interesse
        nos nossos serviços.
      </p>

      <p>Os dados recolhidos podem incluir:</p>

      <ul>
        <li>nome;</li>
        <li>endereço de email;</li>
        <li>número de telefone;</li>
        <li>informações fornecidas na mensagem;</li>
        <li>preferências relacionadas com modelos, materiais ou serviços;</li>
        <li>
          dados técnicos de navegação, quando estritamente necessários ao
          funcionamento e à segurança do site.
        </li>
      </ul>

      <p>
        Solicitamos que não envie informações sensíveis ou desnecessárias
        através dos formulários do site.
      </p>

      <h2>3. Finalidades do tratamento</h2>

      <p>Os dados pessoais podem ser utilizados para:</p>

      <ul>
        <li>responder a pedidos de contacto e de informação;</li>
        <li>preparar e enviar orçamentos;</li>
        <li>acompanhar pedidos, encomendas e serviços;</li>
        <li>marcar consultas, reuniões ou provas no atelier;</li>
        <li>prestar apoio ao cliente;</li>
        <li>cumprir obrigações legais, fiscais e administrativas;</li>
        <li>proteger o site contra fraude, abuso e acessos indevidos;</li>
        <li>
          enviar comunicações promocionais, apenas quando exista consentimento.
        </li>
      </ul>

      <h2>4. Fundamentos para o tratamento</h2>

      <p>Tratamos os dados pessoais quando o tratamento for necessário para:</p>

      <ul>
        <li>responder a um pedido feito pelo próprio titular;</li>
        <li>preparar ou executar uma encomenda ou contrato;</li>
        <li>cumprir uma obrigação legal;</li>
        <li>proteger os interesses legítimos e a segurança do atelier;</li>
        <li>
          realizar comunicações de marketing, mediante consentimento prévio.
        </li>
      </ul>

      <h2>5. Conservação dos dados</h2>

      <p>
        Os dados são conservados apenas durante o período necessário para
        cumprir a finalidade para a qual foram recolhidos. Posteriormente, são
        eliminados, anonimizados ou conservados pelo período exigido pelas
        obrigações legais e fiscais aplicáveis.
      </p>

      <p>
        Os pedidos de contacto que não resultem numa relação comercial serão
        eliminados quando deixarem de ser necessários.
      </p>

      <h2>6. Partilha dos dados</h2>

      <p>
        O Atelier Agulha D&apos;ouro não vende nem comercializa dados pessoais.
        Os dados poderão ser partilhados apenas com prestadores de serviços
        necessários ao funcionamento do site ou à execução dos serviços, tais
        como fornecedores de alojamento, email ou suporte técnico.
      </p>

      <p>
        Estes prestadores devem utilizar os dados exclusivamente para a
        finalidade contratada e adotar medidas adequadas de confidencialidade e
        segurança.
      </p>

      <p>
        Os dados também poderão ser comunicados às autoridades competentes
        quando essa comunicação for exigida por lei.
      </p>

      <h2>7. Segurança dos dados</h2>

      <p>
        São adotadas medidas técnicas e organizacionais razoáveis para proteger
        os dados pessoais contra perda, acesso não autorizado, alteração,
        divulgação ou destruição.
      </p>

      <p>
        Apesar destas medidas, nenhum sistema de transmissão ou armazenamento de
        dados através da Internet pode garantir segurança absoluta.
      </p>

      <h2>8. Direitos dos titulares</h2>

      <p>
        O titular pode solicitar informações sobre o tratamento dos seus dados,
        bem como pedir, quando aplicável:
      </p>

      <ul>
        <li>o acesso aos seus dados pessoais;</li>
        <li>a correção de dados inexatos ou desatualizados;</li>
        <li>a eliminação de dados que já não sejam necessários;</li>
        <li>a limitação ou oposição a determinadas utilizações;</li>
        <li>a retirada do consentimento anteriormente concedido.</li>
      </ul>

      <p>
        Para exercer estes direitos, contacte-nos através do email{" "}
        <a href="mailto:[INSERIR EMAIL]">[INSERIR EMAIL]</a>. Poderemos
        solicitar informações adicionais para confirmar a identidade do
        requerente e proteger os dados contra pedidos fraudulentos.
      </p>

      <h2>9. Cookies</h2>

      <p>
        O site poderá utilizar cookies técnicos estritamente necessários ao seu
        funcionamento, segurança e apresentação correta. Estes cookies não têm
        como finalidade identificar diretamente o visitante.
      </p>

      <p>
        Caso sejam utilizados cookies de análise, publicidade ou serviços
        externos, o visitante será informado e, quando necessário, poderá
        aceitar ou recusar esses cookies.
      </p>

      <h2>10. Serviços e ligações externas</h2>

      <p>
        O site poderá conter ligações para redes sociais, plataformas de
        mensagens ou outros sites externos. Esses serviços possuem políticas de
        privacidade próprias, pelas quais o Atelier Agulha D&apos;ouro não é
        responsável.
      </p>

      <h2>11. Dados de menores</h2>

      <p>
        Este site não foi criado para recolher intencionalmente dados pessoais
        de menores sem a autorização dos seus pais ou representantes legais.
        Caso identifiquemos uma recolha indevida, tomaremos medidas para
        eliminar os dados.
      </p>

      <h2>12. Alterações à política</h2>

      <p>
        Esta Política de Privacidade poderá ser atualizada para acompanhar
        alterações legais, técnicas ou relacionadas com os serviços do atelier.
        A versão mais recente estará sempre disponível nesta página.
      </p>

      <p>
        <strong>Última atualização:</strong> 17 de julho de 2026.
      </p>
    </LegalPage>
  );
}
