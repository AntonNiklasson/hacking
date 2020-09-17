#! /usr/bin/env/node

const fs = require("fs");
const process = require("process");
const path = require("path");
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));

const config = {
  path: path.join(process.env.HOME, "notes")
};

async function directoryExists(dir) {
  return new Promise((resolve, reject) => {
    fs.exists(dir, exists => {
      resolve(exists);
    });
  });
}

async function main() {
  const configDirectoryExists = await directoryExists(config.path);

  console.log({
    configDirectoryExists
  });
}

console.log("Current config:", config);
main();
