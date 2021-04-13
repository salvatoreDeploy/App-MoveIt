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
->yarn dev;

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

#Dia - 03


#Dia - 04


#Dia - 05

#Tecnologias usadas:

->Node;
->yarn;
->npm;
->typescript;