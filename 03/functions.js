import {
   promises as fs
} from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import papa from 'papaparse';

const parsers1 = {
   cvs: (content) => papa.parse(content).data[0],
   json: JSON.parse,
   yml: yaml.safeLoad,
};

const parsers2 = {
   json: JSON.parse,
   yml: yaml.safeLoad,
};

const parsers3 = {
   cvs: (content) => papa.parse(content).data[0],
   json: JSON.parse,
};

const genSolution = (parsers) => async (filepath) => {
   const content = await fs.readFile(filepath, 'utf-8');
   const type = path.extname(filepath).slice(1);
   const items = parsers[type](content);
   console.log(items)
   const lis = items.map((item) => `  <li>${item}</li>`)
   return `<ul>\n${lis.join('\n')}\n</ul>`;
};

const functions = {
   right1: genSolution(parsers1),
   wrong1: genSolution(parsers2),
   wrong2: genSolution(parsers3),
};

export default () => {
   const name = process.env.FUNCTION_VERSION || 'right1';
   return functions[name];
};