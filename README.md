# L.A. Loar
Sistema de leilão online desenvolvido para a disciplina de Sistemas Distribuídos na Universidade Federal Rural de Pernambuco
##
#### O sistema conta com 6 módulos
* Gerenciador de leilão
* Gerenciador de estoque
* Autenticação de usuários
* Comunicação
* Notificação
* Frontend

# Módulos
![arq_leilao](https://user-images.githubusercontent.com/74150316/231307237-d44b8571-8976-435c-823c-5e6a48bf28e3.png)

### Gerenciador de leilão - `Python` `Django` `Django Rest Framework`
Faz o gerenciamento do banco de dados e as regras de negócio do leilão e dos lances
Desenvolvido usando o framework de desenvolvimento web Django, na linguagem python, utilizando o Django Rest Framework, que é capaz de criar uma API Rest.


### Gerenciador de estoque - `Python` `Django` `Django Rest Framework`
Gerencia o estoque de itens do leilão (por exemplo, o galpão da empresa). Assim como o gerenciador de leilão, também foi desenvolvido usando Django Rest Framework


### Autenticação de usuários - `Typescript` `Prisma` `JWT`
Cuida do banco de dados de usuário e a autenticação.
Este módulo é desenvolvido em TypeScript e o banco de dados é gerenciado usando o pacote [Prisma](prisma.io).
A autenticação é baseada em JWT, o usuário faz login e o módulo gera um token JWT que é utilizado para garantir a identidade dele nas requisições entre os módulos.


### Comunicação - `Typescript` `Prisma` `Socket`
Módulo que implementa algumas formas dos usuários se comunicarem entre si e com a equipe do site.
Cada leilão conta com sua área de comentários, que funciona como um chat implementado usando Sockets
Fornece rotas para criar tickets de suporte, para que o usuários possa solicitar ajuda da equipe do sistema


### Notificação - `Typescript` `Mailgun`
Conta com um conjunto de formas de notificar por email os usuários sobre ações ou novidades do sistema. Pode notificar os usuários sobre a criação do seu leilão, caso seu lance tenha sido superado, além de ter agendamento de notificações, como uma atualização diária sobre os leilões ativos ou que irão encerrar.
Utiliza o [Mailgun](https://www.mailgun.com), que fornece um serviço de envio de emails e gerencia a fila de solicitacões feita pelo sistema


### Frontend - `Javascript` `React`
O Frontend do sistema foi feito usando o framework React, e fornece ao usuário a interface para ter acesso às funcionalidades e os dados do sistema.

## 

Toda a troca de dados entre os módulos é feita com a estrutura de objetos JSON, usando a arquitetura de software API REST
