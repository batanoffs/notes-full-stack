const fs = require("fs").promises;

async function readNotes() {
  try {
    const data = await fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });

    console.log(data.toString());
    return data;
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function addNotes(string) {
  try {
    await fs.writeFile("data.json", notes.push(string));
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function deleteNote() {
  try {
    console.log(`Deleted ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
}

module.exports = { readNotes, addNotes, del: deleteNote };
