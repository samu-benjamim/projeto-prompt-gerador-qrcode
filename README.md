# 🔧 QRCode & Password CLI Tool

Uma aplicação **Node.js** em linha de comando que permite:

1. **Gerar QR Codes** a partir de links (exibição no terminal ou em imagem).
2. **Gerar senhas seguras** com base em critérios configuráveis.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Prompt](https://www.npmjs.com/package/prompt) – Captura entradas do usuário
- [Chalk](https://www.npmjs.com/package/chalk) – Estiliza os textos do terminal
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) – Geração de QR Codes no terminal

---

## 📂 Estrutura do Projeto

```
📦 project
├── 📂 prompt-schema
│   ├── schema-main.js           # Prompt principal (menu inicial)
│   └── schema-qrcode.js         # Prompt para criação de QR Code
├── 📂 services
│   ├── 📂 qr-code
│   │   ├── create.js            # Serviço principal de QR Code
│   │   └── handle.js            # Lógica de geração do QR Code
│   ├── 📂 password
│   │   ├── create.js            # Serviço principal de Password
│   │   └── handle.js            # Lógica de geração de senhas
│   └── 📂 utils
│       └── permitted-characters.js # Configuração dos caracteres permitidos
├── index.js                     # Arquivo principal
├── .env                         # Configurações do gerador de senhas
└── README.md
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as configurações do gerador de senhas:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

**Parâmetros:**

- `PASSWORD_LENGTH` → Tamanho da senha gerada
- `UPPERCASE_LETTERS` → Incluir letras maiúsculas (`true`/`false`)
- `LOWERCASE_LETTERS` → Incluir letras minúsculas (`true`/`false`)
- `NUMBERS` → Incluir números (`true`/`false`)
- `SPECIAL_CHARACTERS` → Incluir caracteres especiais (`true`/`false`)

---

## ▶️ Como Executar

Clone o repositório:

```bash
git clone https://github.com/seuusuario/projeto-gerador-de-qr-code.git
cd projeto-gerador-de-qr-code
```

Instale as dependências:

```bash
npm install
```

Execute em modo desenvolvimento:

```bash
npm run start:dev
```

Ou em modo watch (reinicia ao salvar alterações):

```bash
npm run start:watch
```

---

## 📌 Uso

Ao rodar a aplicação, será exibido o menu inicial:

**Escolha a ferramenta:**

- `1` → QR Code
- `2` → Password

### 🔹 Opção 1 – Gerar QR Code

- Informe o link desejado.
- Escolha o tipo de exibição:
  - `1` → QR Code em imagem _(a implementar)_
  - `2` → QR Code exibido no terminal

### 🔹 Opção 2 – Gerar Password

- Uma senha será criada automaticamente com base nas configurações do `.env`.

---

## 💡 Exemplos

**QR Code no terminal:**

```
Digite o link para gerar o QR CODE: https://github.com
Escolha entre o tipo (1 - Imagem, 2 - Terminal): 2
```

**QR Code gerado com sucesso:**

```
█████████████████████████████
████ ▄▄▄▄▄ ██▀▄▀█ ▄▄▄▄▄ ████
████ █ █ █▄▀▀▄█ █ █ ████
████ █▄▄▄█ █ ▄▀▄█ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄█▄█▄█▄▄▄▄▄▄▄████
```

**Senha gerada:**

```
> R9$fpL1@zQ7!
```

---

## 👨‍💻 Autor

**Samuel Mendes**
