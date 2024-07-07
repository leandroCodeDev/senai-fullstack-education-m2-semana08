# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 08 - Módulo 02

### M2S08 | Roteiro Projeto: Portal Educational - parte 2

Olá!

Nesta semana, vamos continuar com o nosso projeto de Portal Educacional, complementando-o com as funcionalidades que faltaram, e aprimorando as que já temos construídas.

### M2S08 | Ex. 01 - Criação do header

Neste primeiro exercício, vamos criar o header da nossa aplicação.

Ele será apresentado em todas as telas do sistema, EXCETO a tela de login.

Ele irá conter:

- Alinhado a esquerda:
  - O logo do nosso portal estudantil (logo a livre escolha).
- Alinhado a direita:
  - O nome do usuário logado.
  - Um avatar/ícone do usuário que ao ser clicado abrirá a opção de ‘Sair’.
    - Caso o botão de Sair seja clicado, o usuário será deslogado e será redirecionado para a tela de login.

### M2S08 | Ex. 02 - Criação do sidebar

Agora, iremos criar o sidebar da nossa aplicação.

Ele deverá ser apresentado em todas as telas do sistema, EXCETO a tela de login.

Ele irá conter:

- Botão Disciplinas
  - Que, ao ser clicado, irá redirecionar para tela de disciplinas.
- Botão Atividades Avaliativas
  - Que não terá ação.
- Botão Solicitações
  - Que não terá ação.
- Botão Biblioteca Online
  - Que não terá ação.
- Botão Usuários
  - O botão usuários só deverá ser apresentados para usuários administradores, não sendo apresentado para alunos.
  - Ao ser clicado, o botão deverá redirecionar para a tela de listagem de usuários.

### M2S08 | Ex. 03 - Tratar login

Para iniciarmos o tratamento de login, vamos criar um mock de usuários cadastrados. Cada objeto desse mock representará um usuário do sistema e, ele deverá conter:

- e-mail;
- senha;
- admin (flag para indicar se o usuário é administrador ou não).

Após criado o mock, vamos criar uma service que será responsável por gerenciar o fluxo de login:

Ela deverá conter duas funções:

- logar:
  - A função logar receberá o usuário e senha digitados na tela de login; irá procurar na nossa lista de usuários cadastrados (mock) e, caso o usuário exista e a senha esteja correta, irá armazenar esse usuário como usuário logado na SESSION STORAGE e retornará sucesso; caso contrário, essa função retornará um erro.
- deslogar
  - Função que irá retirar o usuário logado da SESSION STORAGE.

\--

Após criado o mock e a service, integre esse serviço aos componentes de login e ao header.

### M2S08 | Ex. 04 - Tratar alunos

Nesta atividade, vamos criar uma service que será responsável pelo tratamento do fluxo de alunos. Esta service irá conter:

- getAlunos:
  - Função que retornará as informações todos os alunos cadastrados em sistema;
- getAluno:
  - Função que retornará as informações de um aluno específico;
- cadastrarAluno:
  - Função que irá criar um novo registro de aluno com base nos dados enviados;
- excluirAluno:
  - Função que irá excluir um aluno específico;

Após criada a service, realize a integração desta com os componentes de listagem de alunos e de cadastro de aluno.

_**PS.:** Os nome das função são sugestão. Fique livre para alterar de acordo com o padrão que você estiver utilizando._

### M2S08 | Ex. 05 - Mock Cursos e Disciplinas

Esta atividade consiste em estruturarmos os mocks de cursos e disciplinas que exibiremos em nosso sistema.

Primeiramente, vamos criar um mock de cursos. Nele, teremos uma lista de cursos disponíveis em nosso sistema (identificador e nome do curso).

Depois, construiremos o mock de disciplinas, onde teremos uma lista de todas as disciplinas por curso (nome da disciplina, curso, semestre).

A forma de construção desses mocks e suas vinculações é livre.

### M2S08 | Ex. 06 - Tratar cursos e disciplinas

Nesse exercício, vamos construir duas services, uma para os cursos e outra para as disciplinas.

A service de cursos irá conter:

- getCursos
  - Função para retornar a listagem de todos os cursos disponíveis em sistema;

Após a construção da service, integrá-la à tela de cadastro de alunos.

\--

A service de disciplinas irá conter:

- getDisciplinasCurso
  - Função que irá retornar todas as disciplinas para um determinado curso;
- getDisciplinasCursoSemestre
  - Função que, a partir do curso e do semestre desejado, irá retornar as disciplinas daquele semestre para aquele curso;

Após a construção da service, integrá-la às telas de disciplinas e tela inicial/home.

# SenaiFullstackEducationM2Semana08

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
