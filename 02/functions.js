//@ts-check
import fs from 'fs';

const functions = {
   right1: fs.readFileSync,
   wrong1: (path) => {
      try {
         return fs.readFileSync(path);
      } catch (e) {
         return '';
      }
   },
};

export default () => {
   const name = process.env.FUNCTION_VERSION || 'right1';
   return functions[name];
};

