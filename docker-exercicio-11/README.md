# Exercício 11 - Análise de Vulnerabilidades com Trivy

## Imagem Analisada
`python:3.9`

## Ferramenta Utilizada
**Trivy** – scanner de vulnerabilidades open source da Aqua Security.

Comando utilizado:
```bash
trivy image --severity HIGH,CRITICAL python:3.9
````

---

## Vulnerabilidades encontradas

A análise da imagem retornou **3 vulnerabilidades de severidade HIGH** relacionadas ao pacote `setuptools`.

| Biblioteca | Vulnerabilidade | Severidade | Versão instalada | Versão corrigida | Descrição                                                                                                               |
| ---------- | --------------- | ---------- | ---------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| setuptools | CVE-2022-40897  | HIGH       | 58.1.0           | 65.5.1           | Regular Expression Denial of Service (ReDoS) em `package_index.py` – [link](https://avd.aquasec.com/nvd/cve-2022-40897) |
| setuptools | CVE-2024-6345   | HIGH       | 58.1.0           | 70.0.0           | Possível execução remota de código via funções de download – [link](https://avd.aquasec.com/nvd/cve-2024-6345)          |

---

![visão geral](./imagem_exe011.png)

---

## Ações Recomendadas

* **Atualizar o pacote `setuptools`** para pelo menos a versão `70.0.0`, que corrige as vulnerabilidades detectadas.
* **Considerar o uso da imagem `python:3.9-slim`**, que possui menos dependências e menor superfície de ataque.
* Caso o `setuptools` esteja sendo adicionado via `pip` em etapas posteriores no Dockerfile, garantir que a versão usada seja a mais atual e segura.
* Adicionar o scan com Trivy como etapa de CI para análises contínuas em builds futuros.

---

## Considerações Finais

Este exercício mostrou a importância de escanear imagens Docker mesmo quando utilizamos imagens oficiais. Vulnerabilidades como ReDoS e execução remota de código podem comprometer a aplicação e seu ambiente. Ferramentas como o Trivy ajudam a antecipar riscos e manter a segurança no ciclo de desenvolvimento.
