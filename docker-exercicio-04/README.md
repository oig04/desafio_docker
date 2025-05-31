### **Exercício 04 - Dockerfile com Python:3.11 e script para mostrar data e hora**

**Objetivo:**
Criar uma imagem Docker personalizada baseada na imagem oficial `python:3.11-slim`. O container deve executar um script Python simples que imprime a data e hora atual.

---

### Estrutura de pastas:

```
docker-exercicio-04/
├── Dockerfile
├── script.py
└── README.md
```

---

### `script.py`

```python
from datetime import datetime

print("Data e hora atual:", datetime.now().strftime("%d/%m/%Y %H:%M:%S"))
```

---

### `Dockerfile`

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY script.py .

CMD ["python", "script.py"]
```

---

### `README.md`

````markdown
# Exercício 04 - Imagem Docker com Python 3.11

## Objetivo

Criar uma imagem Docker personalizada baseada na imagem `python:3.11-slim`. O container deve executar um script Python que exibe a data e hora atual.

## Instruções

1. Crie o arquivo `script.py` com o seguinte conteúdo:

```python
from datetime import datetime

print("Data e hora atual:", datetime.now().strftime("%d/%m/%Y %H:%M:%S"))
````

2. Crie um `Dockerfile` com as instruções:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY script.py .

CMD ["python", "script.py"]
```

3. Para construir e executar a imagem:

```bash
docker build -t exercicio04-python .
docker run exercicio04-python
```

## Resultado Esperado

Ao executar o container, o terminal exibirá a data e hora atual no formato:

```
Data e hora atual: 30/05/2025 21:47:00
```
