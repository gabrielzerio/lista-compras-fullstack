docker pull prismagraphql/mongo-single-replica:5.0.3
docker run --name mongoreplica -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME="gabriel" -e MONGO_INITDB_ROOT_PASSWORD="senha@123" -d prismagraphql/mongo-single-replica:5.0.3


npm run server -> nodemon

https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#nested-writes

body da rota /cadastro

          nome: user.nome,
          email: user.email,
          senha: hashPassword,v