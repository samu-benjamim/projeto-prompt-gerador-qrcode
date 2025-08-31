async function permittedCharacters() {
  let permitte = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permitte.push(..."ABCDEFGHIJKLMOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    permitte.push(..."abcdefghijklmopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "true") {
    permitte.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    permitte.push(
      ..."!@#$%^&*()_+-={}[]|<>,.?/~`¡¢£¤¥§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿÷×¤"
    );
  }

  return permitte;
}

export default permittedCharacters;
