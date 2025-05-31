# Exercício 01 — Imprimindo "Olá, Docker!" com Alpine

## Objetivo:

Este exercício consiste em criar uma imagem Docker baseada no Alpine Linux que, ao ser executada, imprime a mensagem:
![visão geral](./docker-exercicio-01/imagem_exe01.png)


---

## Estrutura de diretório

```

exercicio-01/
├── Dockerfile
└── README.md

````

---

## Dockerfile

```Dockerfile
# Usa a imagem mínima do Alpine Linux
FROM alpine:latest

# Comando padrão ao iniciar o container
CMD echo "Olá, Docker!"
````

---

## Como utilizar

### 1. Construa a imagem

```bash
docker build -t meu-echo .
```

### 2. Execute o container

```bash
docker run --rm meu-echo
```

---

## Resultado esperado

```bash
Olá, Docker!
```

---

## Imagem base utilizada

* [Alpine Linux (Docker Hub)](https://hub.docker.com/_/alpine)

---

## Aprendizados

* Como criar uma imagem Docker mínima com Alpine.
* Como usar o `CMD` para executar comandos simples.
* Como construir e executar uma imagem localmente.
# desafio_docker
