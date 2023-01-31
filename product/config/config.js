const DATABASE_URL = process.env.DATABASE_URL_CLI;
const DATABASE_URL_REPLACER = process.env.DATABASE_URL_CLI_REPLACER;

const [dialect, username, password, host, port, database] = DATABASE_URL
  .replace('://', DATABASE_URL_REPLACER)
  .replace('@', DATABASE_URL_REPLACER)
  .replace('/', DATABASE_URL_REPLACER)
  .replaceAll(':', DATABASE_URL_REPLACER)
  .split(DATABASE_URL_REPLACER);

export default {
  "development": { username, password, database, host, dialect, port },
  "test": { username, password, database, host, dialect, port },
  "production": { username, password, database, host, dialect, port }
}