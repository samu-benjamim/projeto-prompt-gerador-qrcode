import prompt from "prompt";
import promptQRCode from "../../prompt-schema/schema-qrcode.js";
import hendle from "./handle.js";

async function createQRCode() {
  prompt.get(promptQRCode, hendle);

  prompt.start();
}

export default createQRCode;
