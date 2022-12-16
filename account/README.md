O que é BCrypt?

O BCrypt foi desenvolvido por Niels Provos e David Mazières (1999) com o propósito de esconder senhas criadas pelos usuários em forma de texto “puro” em dados indecifráveis, utilizando o algoritmo hash. Essa é uma ferramenta segura para armazenar senhas no banco de dados e pode ser utilizada por qualquer linguagem (C, C ++, C #, Go, Java, JavaScript, Elixir, Perl, PHP, Python, Ruby e outros).

O BCrypt possui dois critérios importantes:

O salt é uma das vantagens do BCrypt, pois acrescenta aleatoriamente sequências de caracteres a senha, projetando resultados criptográficos complexos e aumentando a segurança contra ataques de força bruta, como o rainbow tables, ou seja, um hash sempre será diferente, mesmo que a senha seja igual.

A outra vantagem do BCrypt é a possibilidade de alterar valores do saltRounds (relacionado a custos), onde quanto maior o número fornecido, mais lento será o processamento para calcular o hash associado a senha. Por padrão, o valor utilizado é 10, mas é importante salientar que um valor mais alto demandará mais tempo para encontrar as possíveis senhas nos casos de ataque de força bruta. Então esse valor deve ser pequeno o suficiente para não demorar na verificação no login do usuário.

Como funciona o processo de login?

O cadastro e a autenticação de usuários baseados em hash funcionam da seguinte forma:

1º O usuário cria um conta;

2º A senha é criptografada e salva no banco de dados;

3º Quando o usuário entrar com o login, o hash da senha digitada é verificado com o hash da senha original, ou seja, é feita uma comparação das senhas por meio do banco de dados;

4º No caso dos hashes corresponderem, o usuário conseguirá permissão de acesso. Caso contrário, retornará dados de login incorretos;

Esse processo ocorre sempre que o usuário pretende acessar a conta.

Criptografando com BCrypt no Node.JS

Para instalar o BCrypt é só rodar o seguinte comando:

npm install bcrypt