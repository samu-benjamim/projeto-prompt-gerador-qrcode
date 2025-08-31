import handle from "./handle.js";

async function createPassword() {
  console.log("password");
  const passoword = await handle();
  console.log(passoword);
}

export default createPassword;
