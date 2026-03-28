import * as XLSX from 'xlsx';
import Path from 'path';

export function readData(){
    const fileName= Path.join(__dirname,"../data/testData.xlsx");
    const workbook=XLSX.readFile(fileName);
    const worksheet=workbook.Sheets["Sheet1"];
    const jsonData=XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
}