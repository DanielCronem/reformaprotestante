"use strict";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const BOARD_SIZE = 8;


/* =========================================================
   ELEMENTOS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const themeToggle =
    document.getElementById("themeToggle");


const blockBoard =
    document.getElementById("blockBoard");

const pieceTray =
    document.getElementById("pieceTray");


const mainScore =
    document.getElementById("mainScore");

const bestScore =
    document.getElementById("bestScore");

const correctAnswers =
    document.getElementById("correctAnswers");

const clearedSections =
    document.getElementById("clearedSections");

const selectedPieceInfo =
    document.getElementById("selectedPieceInfo");

const statusText =
    document.getElementById("statusText");

const gameStatus =
    document.getElementById("gameStatus");


/* PERGUNTAS */

const questionModal =
    document.getElementById("questionModal");

const questionCounter =
    document.getElementById("questionCounter");

const questionCategory =
    document.getElementById("questionCategory");

const questionText =
    document.getElementById("questionText");

const questionOptions =
    document.getElementById("questionOptions");

const answerFeedback =
    document.getElementById("answerFeedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackExplanation =
    document.getElementById("feedbackExplanation");

const continueButton =
    document.getElementById("continueButton");


/* FIM */

const gameOverModal =
    document.getElementById("gameOverModal");

const finalScore =
    document.getElementById("finalScore");

const finalCorrect =
    document.getElementById("finalCorrect");

const finalSections =
    document.getElementById("finalSections");


/* =========================================================
   FORMATOS DAS PEÇAS
========================================================= */

/*
    Cada coordenada representa um bloco.

    Exemplo:

    [0,0]
    [0,1]
    [0,2]

    representa uma linha horizontal
    com três blocos.
*/

const SHAPES = [

    {
        name: "Bloco único",
        cells: [
            [0, 0]
        ]
    },

    {
        name: "Dupla horizontal",
        cells: [
            [0, 0],
            [0, 1]
        ]
    },

    {
        name: "Dupla vertical",
        cells: [
            [0, 0],
            [1, 0]
        ]
    },

    {
        name: "Trio horizontal",
        cells: [
            [0, 0],
            [0, 1],
            [0, 2]
        ]
    },

    {
        name: "Trio vertical",
        cells: [
            [0, 0],
            [1, 0],
            [2, 0]
        ]
    },

    {
        name: "Quarteto horizontal",
        cells: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ]
    },

    {
        name: "Quarteto vertical",
        cells: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0]
        ]
    },

    {
        name: "Quadrado pequeno",
        cells: [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ]
    },

    {
        name: "L pequeno",
        cells: [
            [0, 0],
            [1, 0],
            [1, 1]
        ]
    },

    {
        name: "L invertido",
        cells: [
            [0, 1],
            [1, 0],
            [1, 1]
        ]
    },

    {
        name: "Canto",
        cells: [
            [0, 0],
            [0, 1],
            [1, 0]
        ]
    },

    {
        name: "T",
        cells: [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 1]
        ]
    },

    {
        name: "Z",
        cells: [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 2]
        ]
    },

    {
        name: "Z invertido",
        cells: [
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1]
        ]
    },

    {
        name: "L grande",
        cells: [
            [0, 0],
            [1, 0],
            [2, 0],
            [2, 1]
        ]
    },

    {
        name: "Cruz",
        cells: [
            [0, 1],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 1]
        ]
    },

    {
        name: "Quadrado 3 por 3",
        cells: [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2]
        ]
    }

];


/* =========================================================
   PERGUNTAS
========================================================= */

const QUESTION_BANK = [

    {
        category: "Contexto histórico",

        question:
            "Qual problema contribuiu para aumentar as críticas contra a Igreja Católica no início da Idade Moderna?",

        options: [
            "Práticas consideradas abusivas por parte do clero",
            "Desaparecimento completo das cidades europeias",
            "Proibição absoluta do comércio",
            "Fim das monarquias europeias"
        ],

        answer: 0,

        explanation:
            "Diversos críticos denunciavam problemas como corrupção, luxo excessivo de membros do clero e práticas religiosas consideradas abusivas."
    },

    {
        category: "Indulgências",

        question:
            "As críticas de Martinho Lutero estavam especialmente relacionadas à prática da:",

        options: [
            "Venda de indulgências",
            "Construção de universidades",
            "Tradução de textos antigos",
            "Produção agrícola"
        ],

        answer: 0,

        explanation:
            "A comercialização de indulgências tornou-se um dos principais pontos criticados por Lutero."
    },

    {
        category: "Martinho Lutero",

        question:
            "Quem foi Martinho Lutero?",

        options: [
            "Um religioso alemão ligado ao início da Reforma Protestante",
            "Um imperador romano da Antiguidade",
            "Um pintor renascentista italiano",
            "Um navegador português"
        ],

        answer: 0,

        explanation:
            "Martinho Lutero era um monge e professor de teologia alemão que se tornou uma das principais figuras da Reforma Protestante."
    },

    {
        category: "95 Teses",

        question:
            "Em 1517, Martinho Lutero tornou-se conhecido pela divulgação de:",

        options: [
            "95 Teses",
            "Magna Carta",
            "Código de Hamurábi",
            "Declaração dos Direitos do Homem"
        ],

        answer: 0,

        explanation:
            "As 95 Teses questionavam especialmente práticas relacionadas às indulgências e desencadearam intenso debate religioso."
    },

    {
        category: "Luteranismo",

        question:
            "Segundo a doutrina luterana, a salvação estava relacionada principalmente à:",

        options: [
            "Fé",
            "Compra de indulgências",
            "Posse de terras",
            "Origem nobre"
        ],

        answer: 0,

        explanation:
            "A justificação pela fé tornou-se um princípio central do pensamento religioso defendido por Lutero."
    },

    {
        category: "Bíblia",

        question:
            "Uma importante defesa de Lutero foi a maior valorização:",

        options: [
            "Das Escrituras",
            "Dos privilégios feudais",
            "Do comércio de indulgências",
            "Da autoridade dos nobres sobre a Bíblia"
        ],

        answer: 0,

        explanation:
            "Lutero defendia as Escrituras como fundamento essencial da fé cristã."
    },

    {
        category: "Bíblia",

        question:
            "Por que a tradução da Bíblia para línguas locais teve importância durante a Reforma?",

        options: [
            "Facilitou o acesso de mais pessoas ao texto bíblico",
            "Impediu a leitura das Escrituras",
            "Eliminou a imprensa",
            "Proibiu a alfabetização"
        ],

        answer: 0,

        explanation:
            "As traduções permitiram que leitores que não dominavam o latim tivessem maior acesso às Escrituras."
    },

    {
        category: "Imprensa",

        question:
            "Qual inovação ajudou as ideias reformistas a circularem rapidamente pela Europa?",

        options: [
            "Imprensa de tipos móveis",
            "Máquina a vapor",
            "Telégrafo",
            "Telefone"
        ],

        answer: 0,

        explanation:
            "A imprensa tornou possível produzir e distribuir textos em escala muito maior."
    },

    {
        category: "Crise da Igreja",

        question:
            "Uma das críticas feitas à Igreja Católica no período estava relacionada ao:",

        options: [
            "Luxo e riqueza de parte do clero",
            "Uso de computadores",
            "Desenvolvimento industrial",
            "Sistema ferroviário europeu"
        ],

        answer: 0,

        explanation:
            "Críticos questionavam a riqueza, o comportamento e os privilégios de alguns membros do clero."
    },

    {
        category: "Reforma Protestante",

        question:
            "A Reforma Protestante ocorreu principalmente durante qual período histórico?",

        options: [
            "Idade Moderna",
            "Pré-História",
            "Antiguidade Oriental",
            "Idade Contemporânea"
        ],

        answer: 0,

        explanation:
            "A Reforma Protestante começou no século XVI, já no contexto da Idade Moderna."
    },

    {
        category: "Luteranismo",

        question:
            "Qual região está diretamente relacionada ao início do movimento de Martinho Lutero?",

        options: [
            "Territórios alemães",
            "Japão",
            "Egito",
            "México"
        ],

        answer: 0,

        explanation:
            "Lutero atuava no Sacro Império Romano Germânico, em territórios que hoje fazem parte principalmente da Alemanha."
    },

    {
        category: "Autoridade religiosa",

        question:
            "As ideias reformistas contribuíram para questionar:",

        options: [
            "A autoridade religiosa centralizada da Igreja Católica",
            "A existência das cidades",
            "O uso da escrita",
            "O desenvolvimento das universidades"
        ],

        answer: 0,

        explanation:
            "Os reformadores contestaram diferentes doutrinas e aspectos da autoridade religiosa da Igreja Católica."
    },

    {
        category: "Calvinismo",

        question:
            "João Calvino ficou associado principalmente ao:",

        options: [
            "Calvinismo",
            "Luteranismo alemão",
            "Anglicanismo",
            "Catolicismo medieval exclusivamente"
        ],

        answer: 0,

        explanation:
            "João Calvino foi um importante reformador protestante e tornou-se a principal referência do Calvinismo."
    },

    {
        category: "Calvinismo",

        question:
            "Qual conceito ficou especialmente associado ao Calvinismo?",

        options: [
            "Predestinação",
            "Venda de indulgências",
            "Politeísmo",
            "Direito divino dos faraós"
        ],

        answer: 0,

        explanation:
            "A doutrina da predestinação tornou-se um dos elementos mais conhecidos do pensamento calvinista."
    },

    {
        category: "João Calvino",

        question:
            "Em qual cidade João Calvino desenvolveu parte importante de sua atuação religiosa?",

        options: [
            "Genebra",
            "Atenas",
            "Moscou",
            "Constantinopla"
        ],

        answer: 0,

        explanation:
            "Genebra, na atual Suíça, tornou-se um importante centro do Calvinismo."
    },

    {
        category: "Anglicanismo",

        question:
            "O Anglicanismo surgiu principalmente em qual país?",

        options: [
            "Inglaterra",
            "Alemanha",
            "Itália",
            "Portugal"
        ],

        answer: 0,

        explanation:
            "O Anglicanismo surgiu na Inglaterra durante o reinado de Henrique VIII."
    },

    {
        category: "Henrique VIII",

        question:
            "Qual monarca está diretamente relacionado ao surgimento da Igreja Anglicana?",

        options: [
            "Henrique VIII",
            "Luís XIV",
            "Carlos Magno",
            "Napoleão Bonaparte"
        ],

        answer: 0,

        explanation:
            "Henrique VIII rompeu com a autoridade papal e tornou-se figura central na formação da Igreja da Inglaterra."
    },

    {
        category: "Anglicanismo",

        question:
            "Um dos acontecimentos relacionados ao surgimento do Anglicanismo foi:",

        options: [
            "O rompimento do rei inglês com a autoridade do papa",
            "A queda do Império Romano do Ocidente",
            "A Revolução Francesa",
            "A independência dos Estados Unidos"
        ],

        answer: 0,

        explanation:
            "Henrique VIII rompeu com Roma e consolidou uma igreja sob autoridade da monarquia inglesa."
    },

    {
        category: "Política",

        question:
            "Além das questões religiosas, a Reforma Protestante também esteve relacionada a interesses:",

        options: [
            "Políticos e econômicos",
            "Somente esportivos",
            "Exclusivamente agrícolas",
            "Apenas tecnológicos"
        ],

        answer: 0,

        explanation:
            "Príncipes, reis e grupos sociais também possuíam interesses políticos e econômicos envolvidos nos conflitos religiosos."
    },

    {
        category: "Política",

        question:
            "Por que alguns príncipes alemães apoiaram Lutero?",

        options: [
            "Também possuíam interesses políticos e econômicos diante da Igreja e do imperador",
            "Queriam restaurar o Império Romano antigo",
            "Desejavam acabar com a escrita",
            "Pretendiam impedir qualquer religião"
        ],

        answer: 0,

        explanation:
            "O apoio à Reforma não ocorreu apenas por razões religiosas, alguns governantes buscavam maior autonomia e controle político."
    },

    {
        category: "Contrarreforma",

        question:
            "Como ficou conhecido o conjunto de medidas adotadas pela Igreja Católica diante do avanço protestante?",

        options: [
            "Contrarreforma",
            "Iluminismo",
            "Mercantilismo",
            "Feudalismo"
        ],

        answer: 0,

        explanation:
            "A Contrarreforma, também chamada Reforma Católica, envolveu iniciativas de reorganização e reafirmação doutrinária."
    },

    {
        category: "Concílio de Trento",

        question:
            "Qual reunião teve grande importância na resposta católica à Reforma Protestante?",

        options: [
            "Concílio de Trento",
            "Congresso de Viena",
            "Conferência de Berlim",
            "Concílio de Niceia exclusivamente"
        ],

        answer: 0,

        explanation:
            "O Concílio de Trento, realizado no século XVI, foi fundamental para reafirmar doutrinas e promover reformas internas."
    },

    {
        category: "Concílio de Trento",

        question:
            "Uma das consequências do Concílio de Trento foi:",

        options: [
            "Reafirmação de doutrinas católicas e maior disciplina do clero",
            "Fim do cristianismo europeu",
            "Adoção oficial do Calvinismo",
            "Extinção das ordens religiosas"
        ],

        answer: 0,

        explanation:
            "O Concílio reafirmou ensinamentos católicos e estabeleceu medidas voltadas à formação e disciplina do clero."
    },

    {
        category: "Jesuítas",

        question:
            "Qual ordem religiosa teve grande importância durante a Contrarreforma?",

        options: [
            "Companhia de Jesus",
            "Ordem dos Templários",
            "Vikings",
            "Liga Hanseática"
        ],

        answer: 0,

        explanation:
            "A Companhia de Jesus, fundada por Inácio de Loyola, destacou-se na educação e na atividade missionária."
    },

    {
        category: "Inácio de Loyola",

        question:
            "Quem esteve diretamente relacionado à fundação da Companhia de Jesus?",

        options: [
            "Inácio de Loyola",
            "Martinho Lutero",
            "João Calvino",
            "Henrique VIII"
        ],

        answer: 0,

        explanation:
            "Inácio de Loyola foi o principal fundador da Companhia de Jesus."
    },

    {
        category: "Contrarreforma",

        question:
            "Durante a Contrarreforma, a educação foi utilizada principalmente para:",

        options: [
            "Fortalecer a formação religiosa e a atuação católica",
            "Acabar com todas as escolas",
            "Proibir completamente os estudos",
            "Eliminar universidades"
        ],

        answer: 0,

        explanation:
            "Ordens como os jesuítas tiveram forte atuação educacional como parte da renovação católica."
    },

    {
        category: "Inquisição",

        question:
            "No contexto da Contrarreforma, instituições inquisitoriais tinham como objetivo:",

        options: [
            "Combater ideias consideradas heréticas",
            "Organizar competições esportivas",
            "Construir ferrovias",
            "Promover eleições modernas"
        ],

        answer: 0,

        explanation:
            "A Inquisição investigava e reprimia práticas e ideias consideradas contrárias à doutrina católica."
    },

    {
        category: "Index",

        question:
            "O Index Librorum Prohibitorum era:",

        options: [
            "Uma lista de livros considerados proibidos pela Igreja Católica",
            "Um catálogo de pinturas renascentistas",
            "Uma lista de reis europeus",
            "Um registro comercial"
        ],

        answer: 0,

        explanation:
            "O Index reunia obras cuja leitura era proibida ou restringida pelas autoridades eclesiásticas."
    },

    {
        category: "Consequências",

        question:
            "Uma consequência importante da Reforma Protestante foi:",

        options: [
            "A fragmentação religiosa do cristianismo ocidental",
            "O desaparecimento imediato de todas as religiões",
            "O fim das monarquias europeias",
            "A unificação religiosa completa da Europa"
        ],

        answer: 0,

        explanation:
            "A Reforma contribuiu para o surgimento e fortalecimento de diferentes confissões protestantes na Europa."
    },

    {
        category: "Consequências",

        question:
            "Após a Reforma, a Europa viveu diversos conflitos relacionados a:",

        options: [
            "Diferenças religiosas e disputas políticas",
            "Somente competições artísticas",
            "Tecnologia digital",
            "Industrialização ferroviária"
        ],

        answer: 0,

        explanation:
            "Questões religiosas se combinaram a rivalidades políticas e contribuíram para guerras e conflitos em várias regiões."
    },

    {
        category: "Transformações",

        question:
            "Qual relação pode ser estabelecida entre imprensa e Reforma Protestante?",

        options: [
            "A imprensa facilitou a rápida divulgação de textos e ideias reformistas",
            "A imprensa impediu a circulação das ideias de Lutero",
            "A imprensa surgiu somente no século XIX",
            "A Reforma eliminou todos os livros impressos"
        ],

        answer: 0,

        explanation:
            "Panfletos, traduções bíblicas e escritos religiosos puderam circular em escala muito maior graças à imprensa."
    },

    {
        category: "Sociedade",

        question:
            "A Reforma Protestante pode ser entendida apenas como um acontecimento religioso?",

        options: [
            "Não, também envolveu questões políticas, econômicas e sociais",
            "Sim, não teve qualquer relação com a política",
            "Sim, ocorreu sem participação de governantes",
            "Sim, não gerou consequências sociais"
        ],

        answer: 0,

        explanation:
            "A Reforma envolveu religião, mas suas causas e consequências também se relacionaram ao poder político, economia e sociedade."
    }

];


/* =========================================================
   ESTADO
========================================================= */

let state = {

    board: [],

    pieces: [],

    selectedPieceIndex: null,

    score: 0,

    correct: 0,

    sections: 0,

    questionIndex: 0,

    questions: [],

    currentQuestion: null,

    questionOpen: false,

    gameOver: false,

    previewCells: []

};


/* =========================================================
   UTILITÁRIOS
========================================================= */

function createEmptyBoard() {

    return Array.from(
        { length: BOARD_SIZE },
        () =>
            Array(
                BOARD_SIZE
            ).fill(false)
    );

}


function shuffle(array) {

    const copy =
        [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }

    return copy;

}


function randomShape() {

    const index =
        Math.floor(
            Math.random() *
            SHAPES.length
        );

    const source =
        SHAPES[index];

    return {

        name:
            source.name,

        cells:
            source.cells.map(
                cell => [...cell]
            ),

        used:
            false

    };

}


function generatePieces() {

    state.pieces = [

        randomShape(),

        randomShape(),

        randomShape()

    ];

}


/* =========================================================
   DIMENSÕES DA PEÇA
========================================================= */

function getShapeBounds(piece) {

    let maxRow = 0;

    let maxCol = 0;


    piece.cells.forEach(
        ([row, col]) => {

            maxRow =
                Math.max(
                    maxRow,
                    row
                );

            maxCol =
                Math.max(
                    maxCol,
                    col
                );

        }
    );


    return {

        rows:
            maxRow + 1,

        cols:
            maxCol + 1

    };

}


/* =========================================================
   RENDER TABULEIRO
========================================================= */

function renderBoard() {

    blockBoard.innerHTML =
        "";


    for (
        let row = 0;
        row < BOARD_SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < BOARD_SIZE;
            col++
        ) {

            const cell =
                document.createElement(
                    "button"
                );

            cell.type =
                "button";

            cell.className =
                "board-cell";


            if (
                state.board[row][col]
            ) {

                cell.classList.add(
                    "filled"
                );

            }


            cell.dataset.row =
                row;

            cell.dataset.col =
                col;


            cell.addEventListener(
                "click",
                () => {

                    handleBoardClick(
                        row,
                        col
                    );

                }
            );


            cell.addEventListener(
                "mouseenter",
                () => {

                    showPlacementPreview(
                        row,
                        col
                    );

                }
            );


            cell.addEventListener(
                "mouseleave",
                () => {

                    clearPreview();

                }
            );


            cell.addEventListener(
                "dragover",
                event => {

                    event.preventDefault();

                    showPlacementPreview(
                        row,
                        col
                    );

                }
            );


            cell.addEventListener(
                "dragleave",
                () => {

                    clearPreview();

                }
            );


            cell.addEventListener(
                "drop",
                event => {

                    event.preventDefault();

                    clearPreview();


                    const pieceIndex =
                        Number(
                            event.dataTransfer
                                .getData(
                                    "text/plain"
                                )
                        );


                    if (
                        Number.isNaN(
                            pieceIndex
                        )
                    ) {

                        return;

                    }


                    tryPlacePiece(
                        pieceIndex,
                        row,
                        col
                    );

                }
            );


            blockBoard.appendChild(
                cell
            );

        }

    }

}


/* =========================================================
   RENDER PEÇAS
========================================================= */

function renderPieces() {

    pieceTray.innerHTML =
        "";


    state.pieces.forEach(
        (piece, index) => {

            const slot =
                document.createElement(
                    "div"
                );

            slot.className =
                "piece-slot";


            if (piece.used) {

                slot.classList.add(
                    "used"
                );

            }


            if (
                state.selectedPieceIndex ===
                index &&
                !piece.used
            ) {

                slot.classList.add(
                    "selected"
                );

            }


            slot.draggable =
                !piece.used;


            slot.addEventListener(
                "click",
                () => {

                    if (
                        piece.used ||
                        state.questionOpen ||
                        state.gameOver
                    ) {

                        return;

                    }


                    if (
                        state.selectedPieceIndex ===
                        index
                    ) {

                        state.selectedPieceIndex =
                            null;

                    } else {

                        state.selectedPieceIndex =
                            index;

                    }


                    renderPieces();

                    updateSelectedPiece();

                }
            );


            slot.addEventListener(
                "dragstart",
                event => {

                    if (
                        piece.used ||
                        state.questionOpen ||
                        state.gameOver
                    ) {

                        event.preventDefault();

                        return;

                    }


                    state.selectedPieceIndex =
                        index;


                    event.dataTransfer
                        .setData(
                            "text/plain",
                            String(index)
                        );


                    event.dataTransfer
                        .effectAllowed =
                            "move";


                    renderPieces();

                    updateSelectedPiece();

                }
            );


            const preview =
                buildPiecePreview(
                    piece
                );


            slot.appendChild(
                preview
            );


            pieceTray.appendChild(
                slot
            );

        }
    );

}


/* =========================================================
   MINIATURA DA PEÇA
========================================================= */

function buildPiecePreview(piece) {

    const preview =
        document.createElement(
            "div"
        );

    preview.className =
        "piece-preview";


    const bounds =
        getShapeBounds(
            piece
        );


    preview.style
        .gridTemplateColumns =
            `repeat(${bounds.cols}, 1fr)`;


    for (
        let row = 0;
        row < bounds.rows;
        row++
    ) {

        for (
            let col = 0;
            col < bounds.cols;
            col++
        ) {

            const miniCell =
                document.createElement(
                    "div"
                );


            const active =
                piece.cells.some(
                    ([r, c]) =>
                        r === row &&
                        c === col
                );


            miniCell.className =
                active
                    ? "piece-mini-cell active"
                    : "piece-mini-cell empty";


            preview.appendChild(
                miniCell
            );

        }

    }


    return preview;

}


/* =========================================================
   CLIQUE NO TABULEIRO
========================================================= */

function handleBoardClick(
    row,
    col
) {

    if (
        state.gameOver ||
        state.questionOpen
    ) {

        return;

    }


    if (
        state.selectedPieceIndex ===
        null
    ) {

        return;

    }


    tryPlacePiece(
        state.selectedPieceIndex,
        row,
        col
    );

}


/* =========================================================
   VALIDAÇÃO
========================================================= */

function canPlacePiece(
    piece,
    startRow,
    startCol
) {

    if (!piece || piece.used) {
        return false;
    }


    for (
        const [offsetRow, offsetCol]
        of piece.cells
    ) {

        const row =
            startRow +
            offsetRow;

        const col =
            startCol +
            offsetCol;


        if (
            row < 0 ||
            row >= BOARD_SIZE ||
            col < 0 ||
            col >= BOARD_SIZE
        ) {

            return false;

        }


        if (
            state.board[row][col]
        ) {

            return false;

        }

    }


    return true;

}


/* =========================================================
   PREVIEW NO TABULEIRO
========================================================= */

function showPlacementPreview(
    row,
    col
) {

    clearPreview();


    if (
        state.selectedPieceIndex ===
        null
    ) {

        return;

    }


    const piece =
        state.pieces[
            state.selectedPieceIndex
        ];


    if (
        !piece ||
        piece.used
    ) {

        return;

    }


    const valid =
        canPlacePiece(
            piece,
            row,
            col
        );


    piece.cells.forEach(
        ([offsetRow, offsetCol]) => {

            const targetRow =
                row +
                offsetRow;

            const targetCol =
                col +
                offsetCol;


            if (
                targetRow < 0 ||
                targetRow >= BOARD_SIZE ||
                targetCol < 0 ||
                targetCol >= BOARD_SIZE
            ) {

                return;

            }


            const index =
                targetRow *
                BOARD_SIZE +
                targetCol;


            const element =
                blockBoard
                    .children[
                        index
                    ];


            if (!element) {
                return;
            }


            element.classList.add(
                valid
                    ? "preview-valid"
                    : "preview-invalid"
            );


            state.previewCells.push(
                element
            );

        }
    );

}


function clearPreview() {

    state.previewCells
        .forEach(
            element => {

                element.classList.remove(
                    "preview-valid",
                    "preview-invalid"
                );

            }
        );


    state.previewCells = [];

}


/* =========================================================
   POSICIONAR PEÇA
========================================================= */

function tryPlacePiece(
    pieceIndex,
    startRow,
    startCol
) {

    if (
        state.questionOpen ||
        state.gameOver
    ) {

        return;

    }


    const piece =
        state.pieces[
            pieceIndex
        ];


    if (!piece) {
        return;
    }


    if (
        !canPlacePiece(
            piece,
            startRow,
            startCol
        )
    ) {

        flashInvalidPlacement();

        return;

    }


    placePiece(
        piece,
        startRow,
        startCol
    );


    piece.used =
        true;


    state.score +=
        piece.cells.length *
        10;


    state.selectedPieceIndex =
        null;


    updateScore();

    renderBoard();

    renderPieces();

    updateSelectedPiece();


    const completed =
        findCompletedSections();


    if (
        completed.rows.length > 0 ||
        completed.cols.length > 0
    ) {

        clearCompletedSections(
            completed
        );

        return;

    }


    continueGameAfterMove();

}


/* =========================================================
   POSICIONAR NA MATRIZ
========================================================= */

function placePiece(
    piece,
    startRow,
    startCol
) {

    piece.cells.forEach(
        ([offsetRow, offsetCol]) => {

            const row =
                startRow +
                offsetRow;

            const col =
                startCol +
                offsetCol;


            state.board[row][col] =
                true;

        }
    );

}


/* =========================================================
   POSIÇÃO INVÁLIDA
========================================================= */

function flashInvalidPlacement() {

    gameStatus.textContent =
        "A peça não cabe nessa posição";


    setTimeout(
        () => {

            if (
                !state.gameOver
            ) {

                gameStatus.textContent =
                    "Partida em andamento";

            }

        },
        1200
    );

}


/* =========================================================
   LOCALIZAR LINHAS E COLUNAS COMPLETAS
========================================================= */

function findCompletedSections() {

    const rows = [];

    const cols = [];


    for (
        let row = 0;
        row < BOARD_SIZE;
        row++
    ) {

        const complete =
            state.board[row]
                .every(
                    Boolean
                );


        if (complete) {

            rows.push(row);

        }

    }


    for (
        let col = 0;
        col < BOARD_SIZE;
        col++
    ) {

        let complete =
            true;


        for (
            let row = 0;
            row < BOARD_SIZE;
            row++
        ) {

            if (
                !state.board[row][col]
            ) {

                complete =
                    false;

                break;

            }

        }


        if (complete) {

            cols.push(col);

        }

    }


    return {
        rows,
        cols
    };

}


/* =========================================================
   ELIMINAR SEÇÕES
========================================================= */

function clearCompletedSections(
    completed
) {

    const cellsToClear =
        new Set();


    completed.rows.forEach(
        row => {

            for (
                let col = 0;
                col < BOARD_SIZE;
                col++
            ) {

                cellsToClear.add(
                    `${row},${col}`
                );

            }

        }
    );


    completed.cols.forEach(
        col => {

            for (
                let row = 0;
                row < BOARD_SIZE;
                row++
            ) {

                cellsToClear.add(
                    `${row},${col}`
                );

            }

        }
    );


    cellsToClear.forEach(
        key => {

            const [
                row,
                col
            ] =
                key
                    .split(",")
                    .map(Number);


            const index =
                row *
                BOARD_SIZE +
                col;


            const element =
                blockBoard
                    .children[
                        index
                    ];


            if (element) {

                element.classList.add(
                    "clearing"
                );

            }

        }
    );


    const totalSections =
        completed.rows.length +
        completed.cols.length;


    state.sections +=
        totalSections;


    state.score +=
        100 *
        totalSections;


    if (
        totalSections > 1
    ) {

        state.score +=
            50 *
            (
                totalSections - 1
            );

    }


    updateScore();


    setTimeout(
        () => {

            cellsToClear.forEach(
                key => {

                    const [
                        row,
                        col
                    ] =
                        key
                            .split(",")
                            .map(Number);


                    state.board[row][col] =
                        false;

                }
            );


            renderBoard();

            updateSidebar();


            openQuestion();

        },
        300
    );

}


/* =========================================================
   CONTINUAR JOGO
========================================================= */

function continueGameAfterMove() {

    if (
        state.pieces.every(
            piece =>
                piece.used
        )
    ) {

        generatePieces();

        renderPieces();

    }


    updateSidebar();


    if (
        !hasAnyPossibleMove()
    ) {

        endGame();

    }

}


/* =========================================================
   EXISTE MOVIMENTO POSSÍVEL?
========================================================= */

function hasAnyPossibleMove() {

    const availablePieces =
        state.pieces.filter(
            piece =>
                !piece.used
        );


    if (
        availablePieces.length === 0
    ) {

        return true;

    }


    for (
        const piece
        of availablePieces
    ) {

        if (
            canPieceFitAnywhere(
                piece
            )
        ) {

            return true;

        }

    }


    return false;

}


function canPieceFitAnywhere(
    piece
) {

    for (
        let row = 0;
        row < BOARD_SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < BOARD_SIZE;
            col++
        ) {

            if (
                canPlacePiece(
                    piece,
                    row,
                    col
                )
            ) {

                return true;

            }

        }

    }


    return false;

}


/* =========================================================
   PERGUNTAS
========================================================= */

function openQuestion() {

    if (
        state.questions.length === 0
    ) {

        state.questions =
            shuffle(
                QUESTION_BANK
            );

        state.questionIndex =
            0;

    }


    if (
        state.questionIndex >=
        state.questions.length
    ) {

        state.questions =
            shuffle(
                QUESTION_BANK
            );

        state.questionIndex =
            0;

    }


    const question =
        state.questions[
            state.questionIndex
        ];


    state.currentQuestion =
        question;

    state.questionOpen =
        true;


    questionCounter.textContent =
        state.questionIndex +
        1;


    questionCategory.textContent =
        question.category;


    questionText.textContent =
        question.question;


    questionOptions.innerHTML =
        "";


    answerFeedback
        .classList
        .add("hidden");


    answerFeedback
        .classList
        .remove(
            "correct-feedback",
            "incorrect-feedback"
        );


    continueButton
        .classList
        .add("hidden");


    const options =
        question.options
            .map(
                (text, index) => ({

                    text,

                    originalIndex:
                        index

                })
            );


    const shuffledOptions =
        shuffle(
            options
        );


    shuffledOptions.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option-button";


            button.textContent =
                option.text;


            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        option.originalIndex,
                        button
                    );

                }
            );


            questionOptions.appendChild(
                button
            );

        }
    );


    questionModal
        .classList
        .remove("hidden");

}


/* =========================================================
   RESPONDER QUESTÃO
========================================================= */

function answerQuestion(
    selectedIndex,
    selectedButton
) {

    const question =
        state.currentQuestion;


    if (!question) {
        return;
    }


    const buttons =
        [
            ...questionOptions
                .querySelectorAll(
                    ".option-button"
                )
        ];


    buttons.forEach(
        button => {

            button.disabled =
                true;


            if (
                button.textContent ===
                question.options[
                    question.answer
                ]
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    const correct =
        selectedIndex ===
        question.answer;


    if (correct) {

        state.correct++;

        state.score +=
            50;


        selectedButton
            .classList
            .add("correct");


        feedbackTitle.textContent =
            "Resposta correta";


        answerFeedback
            .classList
            .add(
                "correct-feedback"
            );

    } else {

        selectedButton
            .classList
            .add("incorrect");


        feedbackTitle.textContent =
            "Resposta incorreta";


        answerFeedback
            .classList
            .add(
                "incorrect-feedback"
            );

    }


    feedbackExplanation.textContent =
        question.explanation;


    answerFeedback
        .classList
        .remove("hidden");


    continueButton
        .classList
        .remove("hidden");


    updateScore();

    updateSidebar();

}


/* =========================================================
   CONTINUAR DEPOIS DA QUESTÃO
========================================================= */

continueButton.addEventListener(
    "click",
    () => {

        state.questionIndex++;

        state.currentQuestion =
            null;

        state.questionOpen =
            false;


        questionModal
            .classList
            .add("hidden");


        continueGameAfterMove();

    }
);


/* =========================================================
   INTERFACE
========================================================= */

function updateScore() {

    mainScore.textContent =
        state.score;


    const oldBest =
        Number(
            localStorage.getItem(
                "reformaBlockBest"
            )
        ) || 0;


    if (
        state.score >
        oldBest
    ) {

        localStorage.setItem(
            "reformaBlockBest",
            String(
                state.score
            )
        );

    }


    bestScore.textContent =
        Math.max(
            oldBest,
            state.score
        );

}


function updateSidebar() {

    correctAnswers.textContent =
        state.correct;


    clearedSections.textContent =
        state.sections;


    if (
        state.gameOver
    ) {

        statusText.textContent =
            "Finalizado";

    } else if (
        state.questionOpen
    ) {

        statusText.textContent =
            "Desafio histórico";

    } else {

        statusText.textContent =
            "Jogando";

    }

}


function updateSelectedPiece() {

    if (
        state.selectedPieceIndex ===
        null
    ) {

        selectedPieceInfo.innerHTML = `

            <span class="empty-selection">
                Nenhuma peça selecionada
            </span>

        `;

        return;

    }


    const piece =
        state.pieces[
            state.selectedPieceIndex
        ];


    if (
        !piece ||
        piece.used
    ) {

        selectedPieceInfo.innerHTML = `

            <span class="empty-selection">
                Nenhuma peça selecionada
            </span>

        `;

        return;

    }


    selectedPieceInfo.innerHTML =
        "";


    const preview =
        buildPiecePreview(
            piece
        );


    selectedPieceInfo.appendChild(
        preview
    );

}


/* =========================================================
   FIM DE JOGO
========================================================= */

function endGame() {

    state.gameOver =
        true;


    gameStatus.textContent =
        "Fim da partida";


    statusText.textContent =
        "Finalizado";


    finalScore.textContent =
        state.score;


    finalCorrect.textContent =
        state.correct;


    finalSections.textContent =
        state.sections;


    updateScore();


    gameOverModal
        .classList
        .remove("hidden");

}


/* =========================================================
   INICIAR
========================================================= */

function startGame() {

    state = {

        board:
            createEmptyBoard(),

        pieces: [],

        selectedPieceIndex:
            null,

        score:
            0,

        correct:
            0,

        sections:
            0,

        questionIndex:
            0,

        questions:
            shuffle(
                QUESTION_BANK
            ),

        currentQuestion:
            null,

        questionOpen:
            false,

        gameOver:
            false,

        previewCells:
            []

    };


    generatePieces();


    startScreen
        .classList
        .add("hidden");


    gameScreen
        .classList
        .remove("hidden");


    questionModal
        .classList
        .add("hidden");


    gameOverModal
        .classList
        .add("hidden");


    gameStatus.textContent =
        "Partida em andamento";


    renderBoard();

    renderPieces();

    updateScore();

    updateSidebar();

    updateSelectedPiece();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   EVENTOS
========================================================= */

startButton.addEventListener(
    "click",
    startGame
);


restartButton.addEventListener(
    "click",
    () => {

        const confirmed =
            window.confirm(
                "Deseja reiniciar a partida atual?"
            );


        if (confirmed) {

            startGame();

        }

    }
);


playAgainButton.addEventListener(
    "click",
    startGame
);


/* =========================================================
   TEMA
========================================================= */

function setTheme(theme) {

    if (
        theme === "dark"
    ) {

        document.body
            .classList
            .add(
                "dark-theme"
            );


        themeToggle.textContent =
            "☀";

    } else {

        document.body
            .classList
            .remove(
                "dark-theme"
            );


        themeToggle.textContent =
            "☾";

    }


    localStorage.setItem(
        "reformaBlockTheme",
        theme
    );

}


themeToggle.addEventListener(
    "click",
    () => {

        const dark =
            document.body
                .classList
                .contains(
                    "dark-theme"
                );


        setTheme(
            dark
                ? "light"
                : "dark"
        );

    }
);


/* =========================================================
   CARREGAR CONFIGURAÇÕES
========================================================= */

function loadSettings() {

    const savedTheme =
        localStorage.getItem(
            "reformaBlockTheme"
        );


    if (savedTheme) {

        setTheme(
            savedTheme
        );

    } else {

        const prefersDark =
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;


        setTheme(
            prefersDark
                ? "dark"
                : "light"
        );

    }


    const record =
        Number(
            localStorage.getItem(
                "reformaBlockBest"
            )
        ) || 0;


    bestScore.textContent =
        record;

}


loadSettings();