const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function write(name, quantity, price) {
  try {
    const csvLine = `\n${name},${quantity},${price}`;
    await fs.writeFile("groceries.csv", csvLine, { flag: "a" });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}
