docker run --name mongodb -p 27017:27017 -v c:/data:/data/db -d mongodb/mongodb-community-server:latest

npm run server -> nodemon

https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#nested-writes

body da rota /cadastro

          nome: user.nome,
          email: user.email,
          senha: hashPassword,