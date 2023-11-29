# Instruções para versionamento e componentização

Será necessário manter uma organização dentro desse projeto, mantendo assim facilitado a criação do editor de temas

- Criar uma branch com o nome do que está desenvolvendo

- Criar o snippet no caminho `views/partials/explorer/views`

- Chamar o snippet no rodapé seguindo o exemplo:
> {{> explorer/views/instafeed}}

- Utilizar o snippet para aplicar Html, Css e Javascript/Jquery

- Estaremos seguindo utilizando o BEM para o Css, em caso de dúvida [clique aqui](https://desenvolvimentoparaweb.com/css/bem/ "link BEM") 

- Após validação realizar o pull request e explicar o que sua aplicação irá adiconar

- Avisar ao Luiz (Tubarão) para validar e aprovar o pull request

- Voltará para você uma explicação do motivo de recusa ou aceite do request


# Instruções para utilizar o npm:

`Node Version >= 14.* <= 16.*`

`npm install`
> Será utilizado para instalação do tema

`npm start`
> Será utlizado para iniciar o localhost (Utilizar somente se tiver sido feito o install em algum momento)

`npm run create-zip`
> Será utilizado para criar o .ZIP que será enviado para upload na Mshops
