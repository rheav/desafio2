var btnUser = document.getElementById("btn-user");
var btnProd = document.getElementById("btn-product");

/* Armazenar Usuário */

btnUser.onclick = function () {
  /* Declarando os inputs */
  var clientNome = document.getElementById("nomeCompleto");
  var clientMail = document.getElementById("email");
  var clientEndereco = document.getElementById("endereco");
  var clientSessao = document.getElementById("sessao");

  /* Capturando os valores */
  var nome = clientNome.value;
  var mail = clientMail.value;
  var endereco = clientEndereco.value;
  var sessao = clientSessao.value;

  /* Armazenando no localStorage */
  localStorage.setItem("nome", nome);
  localStorage.setItem("email", mail);
  localStorage.setItem("endereço", endereco);
  localStorage.setItem("Data da primeira sessão", sessao);

  /* Exibindo no card#3 */
  var lastClientName = localStorage.getItem("nome");
  var lastClientFirstSession = localStorage.getItem("Data da primeira sessão");
  document.getElementById("last-user").innerHTML = lastClientName;
  document.getElementById("last-session").innerHTML = lastClientFirstSession;
};

/* Armazenar Produto */

btnProd.onclick = function () {
  /* Declarando os inputs */
  var sessaoNome = document.getElementById("nomeSessao");
  var sessaoCodigo = document.getElementById("codSessao");
  var sessaoDuracao = document.getElementById("duracao");
  var sessaoPreco = document.getElementById("preco");

  /* Capturando os valores */
  var sessaoNick = sessaoNome.value;
  var sessaoIdenti = sessaoCodigo.value;
  var sessaoDuracaoTotal = sessaoDuracao.value;
  var sessaoValor = sessaoPreco.value;

  /* Armazenando no localStorage */
  localStorage.setItem("Sessão", sessaoNick);
  localStorage.setItem("ID", sessaoIdenti);
  localStorage.setItem("Duração", sessaoDuracaoTotal);
  localStorage.setItem("Preço", sessaoValor);

  /* Exibindo no card#3 */
  var lastSessionTitle = localStorage.getItem("Sessão");
  var lastSessionId = localStorage.getItem("ID");
  document.getElementById("last-session-title").innerHTML = lastSessionTitle;
  document.getElementById("last-session-id").innerHTML = lastSessionId;
};
