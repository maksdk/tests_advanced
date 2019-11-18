import _ from 'lodash';
import klawSync from 'klaw-sync';
import winston from 'winston';

const defaultLogger = winston.createLogger({
   level: 'info',
   transports: [{
      log: () => {
         throw new Error('Cannot send data to log!');
      },
      on: _.noop
   }, ],
});


const functions = {
   right1: (filepath, log = () => defaultLogger.log()) => {
      log('Go!');
      return klawSync(filepath, {
         nodir: true
      }).length;
   },
   wrong1: (filepath) => klawSync(filepath),
};

export default () => {
   const name = process.env.FUNCTION_VERSION || 'right1';
   return functions[name];
};