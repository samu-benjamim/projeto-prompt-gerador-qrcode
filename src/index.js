import prompt from "prompt";
import schemaMainPrompt from "./prompt-schema/schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/passoword/create.js";

async function main() {
  prompt.get(schemaMainPrompt, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
