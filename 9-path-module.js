import { sep,join,basename,resolve,dirname } from "node:path";
import { fileURLToPath } from 'node:url';
console.log(sep);

const filePath=join('/content','subfolder','test.txt');
console.log(filePath);

const base=basename(filePath);
console.log(base);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const absolute=resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);