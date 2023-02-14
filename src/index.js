const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // Set Morse code representation of a space, dot, and dash
  const space = "**********";
  const dot = "10";
  const dash = "11";

  // Split the input string into an array of encoded words
  const arrWordCode = expr.split(space);

  // Map over the array of encoded words to decode each word
  const arrWordDecode = arrWordCode.map((item) => {
    // Initialize an array to hold the decoded characters of the current word
    let arrDecode = [];

    // Loop over the encoded word in groups of 10, corresponding to each character
    for (let i = 0; i < item.length; i += 10) {
      // Extract the current encoded character and replace dot and dash
      const decode = item
        .slice(i, i + 10)
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "");

      // Append the decoded character to the array of decoded characters
      arrDecode.push(MORSE_TABLE[decode]);
    }

    // Return the array of decoded characters as a single string
    return arrDecode.join("");
  });

  // Return the array of decoded words as a single string
  return arrWordDecode.join(" ");
}

module.exports = {
  decode,
};
