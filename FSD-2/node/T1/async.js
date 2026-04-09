const fs = require("fs/promises");

const data = {
  "First Post": [
    "commenter.one@example.com",
    "commenter.two@example.com",
    "commenter.nine@example.com",
  ],
  "Second Post": ["commenter.three@example.com"],
  "Third Post": [
    "commenter.four@example.com",
    "commenter.seven@example.com",
    "commenter.eight@example.com",
  ],
  "Fourth Post": ["commenter.five@example.com"],
  "Fifth Post": ["commenter.six@example.com"],
};

async function run() {
  try {
    // 1. Write file
    await fs.writeFile("./first.txt", JSON.stringify(data, null, 2));
    console.log("File write successfully...");

    // 2. Read file
    const fileData = await fs.readFile("./first.txt", "utf-8");
    const obj = JSON.parse(fileData);

    console.log("File Data:");
    let upost = [];

    for (let post in obj) {
      console.log(post);
      upost.push(post);
    }

    // 3. Append data
    const datatoAppend = "\n# Total Posts\n" + upost.join("\n");
    await fs.appendFile("./first.txt", datatoAppend);
    console.log("Data append successfully...");

    // 4. Copy file
    await fs.copyFile("./first.txt", "./first2.txt");
    console.log("File copied successfully.");

    // 5. Delete after 5 seconds
    setTimeout(async () => {
      try {
        await fs.unlink("./first2.txt");
        console.log("File Unlinked...");
      } catch (err) {
        console.error(err);
      }
    }, 5000);

  } catch (err) {
    console.error(err);
  }
}

run();