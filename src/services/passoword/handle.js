import permittedCharacters from "./utils/permitted-characteres.js";

async function handle() {
  let characters = [];
  let passoword = "";

  const passowordLength = process.env.PASSWORD_LENGTH;

  characters = await permittedCharacters();

  for (let i = 0; i < passowordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    passoword += characters[index];
  }
  return passoword;
}

export default handle;
