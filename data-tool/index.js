const fs = require('fs');
const { parse } = require('csv-parse');

const config = require("./config/config.json");
const mapMovie = require('./config/mapMovie.json');
const mapRelease = require('./config/mapRelease.json');

console.log("Converts csv file to json");

const readArgs = () => {
    const args = process.argv.slice(2);

    let inputFile = args[0];
    let outputFile = args[1];

    if (!inputFile) inputFile = config.inputFile
    if (!outputFile) outputFile = config.outputFile;

    if (!inputFile) {
        console.log("Enter path to csv to be converted as first argument");
        return;
    }

    if (!outputFile) {
        console.log("Enter output file path as second argument.");
        return;
    }

    return {
        inputFile,
        outputFile
    };
}

const processFile = async (inputFile) => {
    const records = [];
    const parser = fs
      .createReadStream(inputFile)
      .pipe(parse({
        // CSV options if any
      }));
    for await (const record of parser) {
      records.push(record);
    }
    return records;
};

const processRecords = async (records, outputFile) => {
    const fieldNames = records[0];
    const valueRows = records.slice(1);
    var moviesResult = [];
    var releasesResult = [];

    for(const row of valueRows) {

        var movie = {};
        var release = {};

        for(var i = 0; i < fieldNames.length; i++) {
            const currField = fieldNames[i];

            if (mapMovie[currField]) {
                movie[mapMovie[currField]] = row[i];
            }            
            if (mapRelease[currField]) {
                release[mapRelease[currField]] = row[i];
            }
        }

        if (movie) {
            moviesResult.push(movie);
        }

        if (release) {
            releasesResult.push(release);
        }
    }
    const ws = fs.createWriteStream(outputFile);
    const dataResult = {
        movies: moviesResult,
        releases: releasesResult
    };
    ws.write(JSON.stringify(dataResult));
}
  
(async () => {
    console.log("Starting processing.");
    const args = readArgs();
    const records = await processFile(args.inputFile);
    console.log(`Got ${records.length} records.`);
    await processRecords(records, args.outputFile);
    console.log("Finished processing."); 
})();
  
  