# Usa a imagem oficial do Nginx como base
FROM nginx:alpine

# Remove o conteúdo padrão da pasta html do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos da sua pasta local para dentro do container
COPY . /usr/share/nginx/html
