# Docker Exercicio 08 – PostgreSQL + pgAdmin + Compose

Este projeto faz parte da lista prática de Docker e tem como objetivo configurar, via **Docker Compose**, uma aplicação com:

- Um container PostgreSQL com banco de dados nomeado
- Um container com pgAdmin para gerenciar esse banco via interface web
- Um mini projeto de treino

---

## Tecnologias

- Docker
- Docker Compose
- PostgreSQL
- pgAdmin 4
- SQL (DDL e DML)

---

## Estrutura dos Containers

| Serviço  | Imagem             | Porta Local | Descrição                     |
|----------|--------------------|-------------|-------------------------------|
| `db`     | postgres:latest    | 5432        | Banco de dados relacional     |
| `pgadmin`| dpage/pgadmin4     | 8888        | Interface de administração    |

---

## Variáveis de Ambiente (.env)

```env
POSTGRES_USER=seu_usuario   
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=seu_banco_de_dados

PGADMIN_DEFAULT_EMAIL=seu_email
PGADMIN_DEFAULT_PASSWORD=sua_senha
````

---

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/oig04/desafio_docker
cd desafio_docker/docker-exercicio-08
```

2. Suba os containers:

```bash
docker-compose up -d
```

3. Acesse:

* **pgAdmin**: [http://localhost:8888](http://localhost:8888)
* **PostgreSQL**: usado internamente pela aplicação (porta 5432)

---

## Criando o banco de treino

No pgAdmin:

1. Acesse o banco `meu_banco_02` no menu lateral
2. Clique com botão direito > **Query Tool**
3. Execute os comandos SQL que criam as tabelas:

   * `treinos`
   * `exercicios`
   * `registros`
4. Insira dados de exemplo e consulte treinos realizados

---

## Exemplo de consulta SQL usada

```sql
SELECT 
  r.data,
  e.nome AS exercicio,
  e.grupo_muscular,
  t.nome AS treino,
  r.carga_kg,
  r.repeticoes,
  r.series
FROM registros r
JOIN exercicios e ON r.exercicio_id = e.id
JOIN treinos t ON e.treino_id = t.id
ORDER BY r.data DESC;
```

---

## Projeto Wellness Mode On

Esse projeto simula uma base de dados para controle de treinos, sendo uma aplicação base que pode futuramente:

* Virar uma API RESTful
* Ser conectada a um frontend React
* Gerar relatórios de progresso e performance
---

