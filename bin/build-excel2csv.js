const { readFile, writeFile } = require('fs/promises');
const Papa = require('papaparse');
const { join } = require('path');
const readXlsxFile = require('read-excel-file/node');

const excel2csv = async (excelPath) => {
  const excel = await readFile(excelPath);
  let rows = await readXlsxFile(Buffer.from(excel));

  // Remove row[0]-row[2] and row[4]-row[5] headers
  rows.splice(0, 3);
  rows.splice(1, 2);

  // Remove first column
  rows = rows.map((row, i) => {
    row.shift();

    // 0000000001 → 1
    const num = parseInt(row[2]);
    if (!isNaN(num)) {
      row[2] = num;
    }

    return row;
  }).filter(row => { // remove empty lines ― This is required because Papaparse does not elimitate the row with all null cells
    if (!Array.isArray(row)) {
      return false;
    }

    for (const cell of row) {
      if (cell) {
        return true;
      }
    }

    return false;
  });

  const csv = Papa.unparse(rows, { quotes: true, skipEmptyLines: true });

  return csv.endsWith("\r\n") || csv.endsWith("\n") ? csv : csv + "\r\n";
};

(async () => {
  const excelPath = join(__dirname, '../data.xlsm');
  const csvPath = join(__dirname, '../public/data.csv');

  const csv = await excel2csv(excelPath);
  await writeFile(csvPath, csv);
})();

module.exports = { excel2csv };
