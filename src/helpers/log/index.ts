
import winston from 'winston'

const format = winston.format.combine(
  // winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.prettyPrint(),
  winston.format.json(),
)

const Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'debug'}, ),
  ],
  format,
});

export default Logger;
