## Exercício 03 - Container Ubuntu com Curl

**Objetivo:** Rodar um container interativo com Ubuntu, navegar pelo sistema e instalar o pacote `curl`.
![visão geral](./imagem_exe03.png)

### Comandos utilizados:

```bash
docker run -it ubuntu bash
apt update
apt install curl -y
curl --version
