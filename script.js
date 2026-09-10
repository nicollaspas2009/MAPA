const inicio = document.getElementById("inicio");
const telaMapa = document.getElementById("telaMapa");

document.getElementById("entrarMapa").addEventListener("click", function () {
  inicio.style.display = "none";
  telaMapa.style.display = "block";
});

document.getElementById("voltarInicio").addEventListener("click", function () {
  telaMapa.style.display = "none";
  inicio.style.display = "flex";
});

const paises = {
  BR: {
    nome: "🇧🇷 Brasil",
    forma: "República",
    sistema: "Presidencialismo",
    regime: "Democracia",
  },

  AR: {
    nome: "🇦🇷 Argentina",
    forma: "República",
    sistema: "Presidencialismo",
    regime: "Democracia",
  },

  CV: {
    nome: "🇨🇻 Cabo Verde",
    forma: "República",
    sistema: "Semipresidencialismo",
    regime: "Democracia",
  },

  QA: {
    nome: "🇶🇦 Catar",
    forma: "Monarquia",
    sistema: "Monarquia",
    regime: "Autoritarismo",
  },

  AE: {
    nome: "🇦🇪 Emirados Árabes Unidos",
    forma: "Federação de monarquias",
    sistema: "Monarquia",
    regime: "Autoritarismo",
  },

  SA: {
    nome: "🇸🇦 Arábia Saudita",
    forma: "Monarquia",
    sistema: "Monarquia",
    regime: "Autoritarismo",
  },

  IL: {
    nome: "🇮🇱 Israel",
    forma: "República",
    sistema: "Parlamentarismo",
    regime: "Democracia",
  },

  PT: {
    nome: "🇵🇹 Portugal",
    forma: "República",
    sistema: "Semipresidencialismo",
    regime: "Democracia",
  },

  FR: {
    nome: "🇫🇷 França",
    forma: "República",
    sistema: "Semipresidencialismo",
    regime: "Democracia",
  },

  RU: {
    nome: "🇷🇺 Rússia",
    forma: "República",
    sistema: "Semipresidencialismo",
    regime: "Autoritarismo",
  },

  EN: {
    nome: "🏴 Inglaterra",
    forma: "Monarquia",
    sistema: "Parlamentarismo",
    regime: "Democracia",
  },
};

const coresContinentes = {
  americaNorte: {
    clara: "#ffd9b3",
    escura: "#e67e22",
  },

  americaSul: {
    clara: "#c8f0d2",
    escura: "#198754",
  },

  europa: {
    clara: "#c9ddff",
    escura: "#2463c5",
  },

  africa: {
    clara: "#ffd0e2",
    escura: "#d63384",
  },

  asia: {
    clara: "#fff0b3",
    escura: "#d4a800",
  },

  oceania: {
    clara: "#ffc7c7",
    escura: "#d93636",
  },
};

const continentes = {
  americaNorte: new Set([
    "CA",
    "US",
    "MX",
    "GT",
    "BZ",
    "SV",
    "HN",
    "NI",
    "CR",
    "PA",
    "CU",
    "JM",
    "HT",
    "DO",
    "PR",
    "BS",
    "BB",
    "DM",
    "GD",
    "LC",
    "VC",
    "AG",
    "KN",
    "TT",
    "GL",
    "BM",
    "AI",
    "AW",
    "CW",
    "KY",
    "MS",
    "VG",
    "VI",
    "MF",
    "BL",
    "SX",
    "TC",
    "GP",
    "MQ",
  ]),

  americaSul: new Set([
    "AR",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "GY",
    "PE",
    "PY",
    "SR",
    "UY",
    "VE",
    "FK",
    "GF",
  ]),

  europa: new Set([
    "AL",
    "AD",
    "AT",
    "BY",
    "BE",
    "BA",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "DE",
    "GR",
    "HU",
    "IS",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "MD",
    "ME",
    "NL",
    "MK",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "SK",
    "SI",
    "ES",
    "SE",
    "CH",
    "UA",
    "XK",
    "FO",
  ]),

  africa: new Set([
    "DZ",
    "AO",
    "BJ",
    "BW",
    "BF",
    "BI",
    "CM",
    "CV",
    "CF",
    "TD",
    "KM",
    "CG",
    "CD",
    "CI",
    "DJ",
    "EG",
    "GQ",
    "ER",
    "SZ",
    "ET",
    "GA",
    "GM",
    "GH",
    "GN",
    "GW",
    "KE",
    "LS",
    "LR",
    "LY",
    "MG",
    "MW",
    "ML",
    "MR",
    "MU",
    "MA",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RW",
    "ST",
    "SN",
    "SC",
    "SL",
    "SO",
    "ZA",
    "SS",
    "SD",
    "TZ",
    "TG",
    "TN",
    "UG",
    "EH",
    "ZM",
    "ZW",
    "RE",
    "YT",
  ]),

  asia: new Set([
    "AF",
    "AM",
    "AZ",
    "BH",
    "BD",
    "BT",
    "BN",
    "KH",
    "CN",
    "CY",
    "GE",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IL",
    "JP",
    "JO",
    "KZ",
    "KW",
    "KG",
    "LA",
    "LB",
    "MY",
    "MV",
    "MN",
    "MM",
    "NP",
    "KP",
    "KR",
    "OM",
    "PK",
    "PS",
    "QA",
    "SA",
    "LK",
    "SY",
    "TJ",
    "TH",
    "TL",
    "TR",
    "TM",
    "TW",
    "AE",
    "UZ",
    "VN",
    "YE",
    "RU",
  ]),

  oceania: new Set([
    "AU",
    "FJ",
    "KI",
    "MH",
    "FM",
    "NR",
    "NZ",
    "PW",
    "PG",
    "WS",
    "SB",
    "TO",
    "TV",
    "VU",
    "NC",
    "PF",
    "GU",
    "MP",
    "AS",
  ]),
};

const classesContinentes = {
  americaNorte: [
    "Canada",
    "United States",
    "Greenland",
    "Bahamas",
    "Bermuda",
    "Cayman Islands",
    "Puerto Rico",
    "Turks and Caicos Islands",
    "American Samoa",
    "Antigua and Barbuda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Trinidad and Tobago",
    "Anguilla",
    "Montserrat",
    "Guadeloupe",
    "Martinique",
    "Saint-Barthélemy",
    "Saint-Martin",
    "United States Virgin Islands",
  ],

  americaSul: ["Argentina", "Chile", "French Guiana", "Falkland Islands"],

  europa: [
    "United Kingdom",
    "France",
    "Italy",
    "Greece",
    "Norway",
    "Denmark",
    "Cyprus",
    "Malta",
    "Faeroe Islands",
    "Canary Islands (Spain)",
  ],

  africa: [
    "Angola",
    "Cape Verde",
    "Comoros",
    "Mauritius",
    "Seychelles",
    "São Tomé and Principe",
  ],

  asia: [
    "Azerbaijan",
    "China",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Oman",
    "Philippines",
    "Russian Federation",
    "Turkey",
  ],

  oceania: [
    "Australia",
    "Fiji",
    "New Zealand",
    "Papua New Guinea",
    "Samoa",
    "Solomon Islands",
    "Tonga",
    "Vanuatu",
    "Federated States of Micronesia",
    "French Polynesia",
    "New Caledonia",
    "Nauru",
    "Palau",
    "Marshall Islands",
    "Northern Mariana Islands",
    "Guam",
    "Tuvalu",
  ],
};

function descobrirContinente(elemento) {
  const id = elemento.getAttribute("id");
  const classe = elemento.getAttribute("class");

  if (id) {
    for (const continente in continentes) {
      if (continentes[continente].has(id)) {
        return continente;
      }
    }
  }

  if (classe) {
    for (const continente in classesContinentes) {
      if (classesContinentes[continente].includes(classe)) {
        return continente;
      }
    }
  }

  return null;
}

const seletores = {
  BR: '[id="BR"]',

  AR: '[class="Argentina"]',

  CV: '[class="Cape Verde"]',

  QA: '[id="QA"]',

  AE: '[id="AE"]',

  SA: '[id="SA"]',

  IL: '[id="IL"]',

  PT: '[id="PT"]',

  FR: '[class="France"]',

  RU: '[class="Russian Federation"]',

  EN: '[class="United Kingdom"]',
};

fetch("world.svg")
  .then((resposta) => resposta.text())
  .then((svg) => {
    document.getElementById("mapa").innerHTML = svg;

    const mapa = document.getElementById("mapa");
    const mapaSvg = mapa.querySelector("svg");

    const instrucoes = document.createElement("div");

    instrucoes.id = "instrucoes";

    instrucoes.innerHTML = `
      <button id="fecharInstrucoes">×</button>

      <strong>🖱️ Como usar</strong>

      <p>Role o mouse para aproximar ou afastar</p>
      <p>Clique e arraste para mover o mapa</p>
      <p>Passe o mouse sobre um país para ver informações</p>
    `;

    mapa.appendChild(instrucoes);

    document
      .getElementById("fecharInstrucoes")
      .addEventListener("click", function () {
        instrucoes.style.display = "none";
      });

    let zoom = 1;
    let posX = 0;
    let posY = 0;

    function atualizarMapa() {
      mapaSvg.style.transform = `translate(${posX}px, ${posY}px) scale(${zoom})`;
    }
    document
      .getElementById("resetarMapa")
      .addEventListener("click", function () {
        zoom = 1;
        posX = 0;
        posY = 0;

        atualizarMapa();
      });

    mapa.addEventListener(
      "wheel",
      function (event) {
        event.preventDefault();
        const velocidade = 0.15;
        const zoomAnterior = zoom;
        if (event.deltaY < 0) {
          zoom += velocidade;
        } else {
          zoom -= velocidade;
        }
        zoom = Math.max(1, Math.min(5, zoom));
        const rect = mapa.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const fator = zoom / zoomAnterior;

        posX = mouseX - (mouseX - posX) * fator;

        posY = mouseY - (mouseY - posY) * fator;

        atualizarMapa();
      },
      { passive: false },
    );

    mapa.addEventListener("mousedown", function (event) {
      arrastando = true;

      inicioX = event.clientX - posX;
      inicioY = event.clientY - posY;
    });

    document.addEventListener("mousemove", function (event) {
      if (!arrastando) return;
      posX = event.clientX - inicioX;
      posY = event.clientY - inicioY;
      atualizarMapa();
    });

    document.addEventListener("mouseup", function () {
      arrastando = false;
    });

    const paths = document.querySelectorAll("#mapa svg path");

    paths.forEach((path) => {
      const continente = descobrirContinente(path);

      if (!continente) return;

      const cor = coresContinentes[continente];

      path.dataset.continente = continente;

      path.dataset.corOriginal = cor.clara;

      path.style.fill = cor.clara;

      path.style.transition = "fill 0.2s ease, opacity 0.2s ease";
    });

    Object.keys(seletores).forEach((codigo) => {
      const partes = document.querySelectorAll(seletores[codigo]);

      if (!partes.length) {
        console.warn("País não encontrado:", codigo);

        return;
      }

      const continente = descobrirContinente(partes[0]);

      if (!continente) return;

      partes.forEach((parte) => {
        parte.dataset.destacado = "true";

        parte.dataset.corEscura = coresContinentes[continente].escura;

        parte.style.fill = coresContinentes[continente].escura;
      });

      partes.forEach((pais) => {
        pais.addEventListener("mouseenter", function (event) {
          partes.forEach((parte) => {
            parte.style.filter = "brightness(0.65) saturate(1.5)";
            parte.style.stroke = "#111";
            parte.style.strokeWidth = "1.5px";
          });

          const informacoes = document.getElementById("informacoes");

          informacoes.innerHTML = `

          <h2>
           ${paises[codigo].nome}
          </h2>
          <p>
          <strong>
          Forma de governo:
          </strong>
          ${paises[codigo].forma}
          </p>
          <p>
          <strong>
          Sistema de governo:
          </strong>
          ${paises[codigo].sistema}
          </p>
          <p>
          <strong>
          Regime político:
          </strong>
          ${paises[codigo].regime}
          </p>
          `;
          informacoes.style.display = "block";

          informacoes.style.left = event.pageX + 15 + "px";

          informacoes.style.top = event.pageY + 15 + "px";
        });
        pais.addEventListener("mouseleave", function () {
          partes.forEach((parte) => {
            parte.style.filter = "";
            parte.style.stroke = "";
            parte.style.strokeWidth = "";
          });
          document.getElementById("informacoes").style.display = "none";
        });
      });
    });

    const legenda = document.createElement("div");

    legenda.id = "legenda";

    legenda.innerHTML = `

            <h3>Continentes</h3>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#ffd9b3">
                </span>
                América do Norte
            </div>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#c8f0d2">
                </span>
                América do Sul
            </div>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#c9ddff">
                </span>
                Europa
            </div>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#ffd0e2">
                </span>
                África
            </div>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#fff0b3">
                </span>
                Ásia
            </div>

            <div class="item-legenda">
                <span
                    class="cor-legenda"
                    style="background:#ffc7c7">
                </span>
                Oceania
            </div>
        `;
    mapa.appendChild(legenda);
  });

/*TRABALHO DA ANDREIA */

const botoesMenu = document.querySelectorAll("#menu-principal button");

const abas = {
  inicio: document.getElementById("inicio"),
  globalizacao: document.getElementById("globalizacao"),
  movimento: document.getElementById("movimento"),
  glossario: document.getElementById("glossario"),
  mapa: document.getElementById("telaMapa"),
};

botoesMenu.forEach((botao) => {
  botao.addEventListener("click", () => {
    Object.values(abas).forEach((aba) => {
      aba.style.display = "none";
    });

    const abaSelecionada = abas[botao.dataset.aba];

    if (botao.dataset.aba === "inicio") {
      abaSelecionada.style.display = "flex";
    } else {
      abaSelecionada.style.display = "block";
    }
  });
});

const botoesRisco = document.querySelectorAll(".botao-risco");
const detalhesRisco = document.getElementById("detalhesRisco");
const origemRisco = document.getElementById("origem-risco");
const destinoRisco = document.getElementById("destino-risco");

const dadosRiscos = {
  mediterraneo: {
    titulo: "🚨 Mediterrâneo",
    origemIcone: "🌍",
    origem: "Norte da África e Oriente Médio",
    destinoIcone: "🇪🇺",
    destino: "Europa",
    texto:
      "As travessias marítimas podem envolver longas distâncias, condições perigosas, falta de recursos e exposição a redes de exploração.",
    alertas: [
      "🌊 Travessia marítima",
      "⚠️ Condições perigosas",
      "🚨 Exploração",
      "🚫 Xenofobia",
    ],
  },

  "mexico-eua": {
    titulo: "🚨 México → EUA",
    origemIcone: "🇲🇽",
    origem: "México",
    destinoIcone: "🇺🇸",
    destino: "Estados Unidos",
    texto:
      "A fronteira apresenta barreiras físicas, controles migratórios e diferentes riscos para pessoas que tentam realizar travessias irregulares.",
    alertas: [
      "🧱 Barreiras físicas",
      "🛂 Controle migratório",
      "🏜️ Ambiente perigoso",
      "🚨 Exploração",
    ],
  },
};

botoesRisco.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesRisco.forEach((item) => item.classList.remove("ativo"));
    botao.classList.add("ativo");

    const rota = dadosRiscos[botao.dataset.rota];

    origemRisco.innerHTML = `
      <span>${rota.origemIcone}</span>
      <h4>${rota.origem}</h4>
      <p>Região de origem do fluxo migratório.</p>
    `;

    destinoRisco.innerHTML = `
      <span>${rota.destinoIcone}</span>
      <h4>${rota.destino}</h4>
      <p>Região de destino do fluxo migratório.</p>
    `;

    detalhesRisco.innerHTML = `
      <h4>${rota.titulo}</h4>
      <p>${rota.texto}</p>

      <div class="alertas-rota">
        ${rota.alertas.map((alerta) => `<span>${alerta}</span>`).join("")}
      </div>
    `;
  });
});

const buscaGlossario = document.getElementById("buscaGlossario");
const termosGlossario = document.querySelectorAll(".termo-card");

buscaGlossario.addEventListener("input", () => {
  const busca = buscaGlossario.value.toLowerCase().trim();

  termosGlossario.forEach((termo) => {
    const texto = termo.textContent.toLowerCase();

    termo.style.display = texto.includes(busca) ? "block" : "none";
  });
});