#Imagem do Node.js
FROM node:20-alpine

# Criar um diretório para o app
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./
RUN npm install

COPY . .

# Criar usuário não-root
RUN addgroup appgroup && adduser -S appuser -G appgroup
USER appuser

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]

