# Desafio 1 - To-Do List com Padrão MVC

## Objetivo

Neste desafio, você deve criar uma aplicação React de uma To-Do List (Lista de Tarefas) seguindo o padrão Model-View-Controller (MVC). A aplicação deve permitir que os usuários adicionem, editem, marquem como concluídas e excluam tarefas.

## Especificações

- **Model (Modelo)**: Defina um modelo de dados para representar uma tarefa. Cada tarefa deve ter, pelo menos, um `id`, `title` (título) e `completed` (se está completa ou não).

- **View (Visualização)**: A aplicação deve apresentar uma lista das tarefas, um campo de entrada para adicionar novas tarefas, e botões ou ícones para editar, marcar como concluída e excluir tarefas.

- **Controller (Controlador)**: Implemente lógicas para interagir com o modelo e atualizar a visualização. As ações básicas que o controlador deve gerenciar são: adicionar tarefa, editar tarefa, marcar tarefa como concluída e excluir tarefa.

- **Dados Locais**: Utilize o `localStorage` do navegador para armazenar as tarefas e garantir que elas não sejam perdidas ao recarregar a página.

## Requisitos Avançados (Opcionais)

- **Filtro de Tarefas**: Permita que os usuários filtrem tarefas por seu status (todas, concluídas, pendentes).

- **Estilização**: Utilize CSS ou bibliotecas de componentes para tornar sua aplicação visualmente atraente.

## Critérios de Avaliação

- Funcionalidade: A aplicação cumpre os requisitos básicos?
- Estrutura do código: O código segue o padrão MVC de forma clara e organizada?
- Uso do React: As funcionalidades foram implementadas utilizando os recursos do React de forma eficaz?
- Persistência de dados: As tarefas são mantidas após o recarregamento da página?

## Dicas

- Organize seus componentes de forma que reflitam o padrão MVC.
- Considere usar o `useState` e `useEffect` do React para gerenciar o estado e os efeitos colaterais da aplicação (como a leitura e gravação no `localStorage`).
- Mantenha o modelo, a visualização e o controlador claramente separados para garantir que sua aplicação siga o padrão MVC.
