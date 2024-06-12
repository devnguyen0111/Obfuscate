const fs = require('fs');
const obfuscator = require('javascript-obfuscator');

const args = process.argv.slice(2);
const inputFile = args[0];
const outputFile = args[1];

try {
    const code = fs.readFileSync(inputFile, 'utf8');
    const obfuscatedCode = obfuscator.obfuscate(code).getObfuscatedCode();
    fs.writeFileSync(outputFile, obfuscatedCode);
    console.log("Obfuscation complete.");
} catch (error) {
    console.error(`Error during obfuscation: ${error.message}`);
    process.exit(1);
}