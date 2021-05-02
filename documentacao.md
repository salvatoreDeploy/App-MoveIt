<!-- React -->

#Dia - 01

->Criar projeto react no Node;
    ->linux: yarn create react-app "nome do projeto" --template=typescript;
    ->windows: npx create-react-app "nome do projeto" --template=typescript;
    ->Se usa "--template=typescript" para instalar as propriedades do typescript junto;

->Estartar o servidor:
    ->yarn start;

->React seria um biblioteca de vizualização e a interface, sendo do lado do cliente, sendo a parte de vizulização;
->O React trabalho recebendo dados em formato Json, que seria Objetos em java script;
->React se baseia em componente, propriedades e estado;
->Mantemos no escopo do arquivo do css algo fixo, e inline algo q vamos alterar com js nas variaveis;

#Dia - 02
->Utilizar o Next.js, onde o mesmo substitui o create react-app
->Next usa muinto SPA, SSA, SSG
    ->SPA - Uma aplicação de uma unica pagina, quando mudamos o conteudo mas ficamos na mesma pagina não precisando de um novo recarregamento;
    ->SSR - Quando temos como next.js, que vai interceptar a busca do usuario no back-end, assim devolvendo pro react tudo pronto para vizualização, o mesmo interpreta js usando node, indo e buscando no servidor mas sem passar esta reponsabilidade pro back-end;
    ->Next se adapta bem com SSR e SSG;
->Next foi feito para ser indexado pelos motores de busca;
->Para criar um projeto usamos um comando proprio para o next;

Criar o projeto em next:
    ->yarn create next-app "nome do projeto";
Estartar o projeto:
    ->yarn dev;

->Trabalhando na operação Countdown:
    ->Usamos a funcionalidade Math.floor() para arredondamento;
    ->Usamos a funcionalidade .padStart(), onde passamos uma quantidade de caracteres para verificar se
    não tiver preenchemos com um caracter escolhido;
    ->Usamos a funcionalidade .split() para separar os valores num array de um unico valor;
    ->No js usamos o [], para destruturar um array assim podeno colocar seus novos indices;
    ->importamos o useEffect que é uma funcionalidade do react onde dispara efeitos colaterais,
    quando algo acontecer ou algo mudar deve acontecer algo, o mesmo recebe dois parametro, a primeira,
    sempre sera uma função, o segundo parametro quando mudar;
    ->Criamos para o countdown, um loop entre as propriedades, para cada um segundo a menos a funcionalidade do useEffect se inicia de novo;

#Dia - 03
    ->Uma boa pratica tanto no front e no back-end em variaveis que carregam um valor bool colocar is
    antes;
    ->Agora precisamos que ambos componentes se comuniquem e um evento se inteligue com outro, assim,
    se usa uma api de contexto do react;
    ->Contexto no react, são formas de compartilhar informações mais de um componente da aplicação
    ->Criamos uma pasta com um arquivo de contexto, e na pages no arquivo _app que resposanvel por englobar, toda a aplicação. Colocamos o componente centra da aplicação dentro do contexto;
    ->Apos isso vemos com teste que adicionar um value no objeto context, e ir em algum componente da aplicação e importa uma função que é o "useContext()" do proprio react, criar uma constante que vai armazenar essa funçao que usara como paarmetro o nosso objeto, poderemos ver usando console.log q o dado ja existe, assim vendo a comunicaçao entre contexto e componente;
    ->Assim um contexto é uma forma de ter acesso de informação de qualquer lugar;
    ->E um contexto pode estar enviando uma string, um objeto, uma função
    ->Como boa pratica deve se tipar,alguma propriedade no typescript, usando type ou interface,assim informamos o tipo da propriedade do componente, quando ele tbm for um elemento react usamos "ReactNode" assim o mesmo no caso do children ele vai aceitar qualque elemento como elemento filho sendo um texto ou tag html;
    ->Dentro dos componente, ao trazer as funções dos contexto não sugerido assim podemos usar o typescript para criar uma interface;
    ->Vamos trabalhar agora em cima da regra de negocio, o deve acontecer na utilidade da aplicação;
    ->Colocamos os execicios num array de um arquivo json;
    ->Dentro do nosso contexto, importamos o arquivo json, na nossa função de start atribuimos a uma constante, a funcionalidade Math.random() que cria um numero randomico, para criarmos mais numeros de algo para ser usado aleatoricamente seria a função * o objeto q nesse caso o arquivo json concatenando com a propriedade length que faz a contagem de cada index, em caso que se tera numeros quebrados pode se usar o Math.floor que trata o numemor para menos;
    ->Em seguida pode atribuir a uma constante que acesse objeto do arquivo json que acesse usando a constante anterio como index do array;
    ->Criamos um estado para essas informações usando mais uma vez o useState;
    ->Adicionando esse novo estado onde necessario, precisamos criar uma nova interface para typar esse objeto, colocando as informações q temos no arquivo assim criamos essa typagem;
    ->Criamos umas função de reset para caso o usuario click no botao falhei, usando o estado e devolvendo ele a nulo sendo o estado que começou fazemos o processo de typagem e adicionalo para ser usado;
    ->Trabalhando na barra de experiencia, criamos uma constante que armazena uma operação usando Math.pow que serve para exponenciação e um calculo utilizado em jogos rpg para calcular quanto de xp eh necessario para subir de level;
    ->Adicionamos o contexto nos chalenges completed;


#Dia - 04
    ->Estruturas de contexto sempre segue a mesma estrura usada inicialmente;
    ->Não copiamos certos dados, pois alguns segue uma regra para vizualização e nao como a aplicação funciona;
    ->Mantemos na _app componentes que avo se repetir por toda a aplicação;
    ->Um dos uso do useEffect é que quando se passa um array vazio dentro da estrura, ele vai executar a função uma unica vez quando o componente for mostrado em tela;
    -> Para mostrar a notificção em tela, usamos o useEffect com um array vazio como segundo parametro e usando a propria api do browser Notificatio,requestPermission(), apara assim dar permisão;

#Dia - 05
    ->Dentro do proprio browser tem ferramenta uteis de armazenamento de dados como o local storage, mesmo que ele so armazene texto, mesmo dando um f5 para atualizar;
    ->Temos tambem o session storage, mas o mesmo ao finalizar o navegador os dados sao perdidos, só fica salvo durante a mesma sessao;
    ->Tambem se tem indexedB que funciona como um banco de dados no navegador;
    -> E tambem temos o cookie que tambem armazena dados
    ->Usando o next, por ser um intermediario entre em back e front, e como o local storage eh uma ferramenta so do browser o mais indicado eh usar os cookie;
    -> adicionamos a biblioteca js-cookie

#Tecnologias usadas:

->NodeJs;
->nextJs;
->yarn;
->npm;
->typescript;
->js-cookie;