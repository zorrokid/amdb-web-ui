const fs = require('fs');
const { parse } = require('csv-parse');
console.log("Converts csv file to json");
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Enter path to csv to be converted");
}
console.log(args);
const filePath = args[0];

const processFile = async () => {
    const records = [];
    const parser = fs
      .createReadStream(filePath)
      .pipe(parse({
      // CSV options if any
      }));
    for await (const record of parser) {
      // Work with each record
      records.push(record);
    }
    return records;
};

const processRecords = async (records) => {
    const fieldNames = records[0];

    const objPrototype = {};

    for (const field of fieldNames) {
        objPrototype[field] = undefined;
    }

    var result = [];
    for(var i = 1; i < records.length; i++) {
        var obj = Object.create(objPrototype);
        for(var j = 0; j < fieldNames.length; j++) {
            obj[fieldNames[j]] = records[i][j];
        }
        result.push(obj);
    }
    const ws = fs.createWriteStream('./data/test.json');
    ws.write(JSON.stringify(result));
}
  
(async () => {
    const records = await processFile();
    await processRecords(records);
})();
  
  