import { promises as fs } from "fs";
import * as esbuild from "esbuild";
import * as path from "path";

async function copyFilesToDirectory(fileList, targetDirectory) {
  try {
    await fs.mkdir(targetDirectory, { recursive: true });
    const copyPromises = fileList.map(async (file) => {
      const sourcePath = path.resolve(file);
      const targetPath = path.join(targetDirectory, path.basename(file));

      await fs.copyFile(sourcePath, targetPath);
      console.log(`Copied file '${file}' to '${targetPath}'`);
    });

    await Promise.all(copyPromises);
  } catch (error) {
    console.error(`Error copying files: ${error}`);
  }
}

const filesToCopy = [
  "manifest.json",
  "background.js",
  "background.html",
  "images/icon-16px.png",
  "images/icon-32px.png",
  "images/icon-64px.png",
];

const targetDirectory = "./build";

await Promise.all([
  copyFilesToDirectory(filesToCopy, targetDirectory),
  esbuild
    .build({
      entryPoints: ["src/content-script.js"],
      bundle: true,
      outfile: "./build/content-script.js",
    })
    .then(() => {
      console.log("Esbuild successful");
    }),
]);
