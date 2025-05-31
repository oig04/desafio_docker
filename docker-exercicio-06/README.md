# Desafio 06 – Multi-stage build com aplicação Go

## Objetivo

Utilizar o recurso de **multi-stage build** no Docker para otimizar a construção de uma aplicação em Go, removendo arquivos e dependências desnecessárias da imagem final. O projeto base utilizado é o **GS Ping**, feito em Golang.

---

## Etapas do Desafio

### 1. Clonar o projeto base

Abra o terminal na pasta desejada e clone o repositório:

```bash
git clone https://github.com/docker/docker-gs-ping.git
````

Acesse a pasta:

```bash
cd docker-gs-ping
```

Remova os Dockerfiles antigos, se houverem:

```bash
rm Dockerfile*
```

---

### 2. Criar o Dockerfile com multi-stage

Crie um novo arquivo chamado `Dockerfile` e adicione o conteúdo abaixo:

```dockerfile
# Etapa de build
FROM golang:1.19 AS builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

# Etapa de execução
FROM gcr.io/distroless/base-debian11
WORKDIR /

COPY --from=builder /docker-gs-ping /docker-gs-ping
EXPOSE 8080

ENTRYPOINT ["/docker-gs-ping"]
```

---

### 3. Construir a imagem

No terminal, execute o comando abaixo para construir a imagem:

```bash
docker build -t gs-ping-app .
```

---

### 4. Executar o container

Para rodar a aplicação, execute:

```bash
docker run --name gs-ping -p 8080:8080 gs-ping-app
```

Agora a aplicação estará disponível localmente na porta 8080.

---

## Conceitos aplicados

* **Multi-stage build**: técnica que permite separar etapas de build e execução, tornando a imagem final menor e mais segura.
* **Distroless**: imagens Docker extremamente enxutas, que contêm apenas o necessário para a aplicação rodar.
* **Variáveis de ambiente Go**: como `CGO_ENABLED=0` e `GOOS=linux`, que ajudam a gerar binários otimizados.

---
