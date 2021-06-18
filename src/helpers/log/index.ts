
import winston from 'winston'

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.prettyPrint(),
  winston.format.json(),
)

const Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      silent: process.env.NODE_ENV === 'test'
    }),
  ],
  format,
});


export default Logger;
