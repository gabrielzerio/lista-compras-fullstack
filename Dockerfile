# Usa uma imagem do Node.js para build
FROM node:20.12 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Usa uma imagem do Nginx para servir os arquivos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]