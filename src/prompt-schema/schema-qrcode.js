import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bgBlue.bold("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow.bgBlue.bold(
      "Escolha entre o tipo ( 1 - QR CODE em Imagem ( 2 - QR CODE no Terminal"
    ),
    pattern: /^[1-2]+$/,
    message: "Escolha apenas entre 1 e 2",
    require: true,
  },
];

export default promptQRCode;
