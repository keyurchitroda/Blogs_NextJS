// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  // first way
  const data = await fs.promises.readdir("blogdata");
  let myFile;
  const filesRecord = data.map(async (item) => {
    myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    return JSON.parse(myFile);
  });
  const allBlogs = await Promise.all(filesRecord);
  res.status(200).json(allBlogs);

  // second way

  // for (let index = 0; index < data.length; index++) {
  //   const item = data[index];
  //   myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
  //   allBlogs.push(JSON.parse(myFile));
  // }
}
