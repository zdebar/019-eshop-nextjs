import Database from 'better-sqlite3';

// Otevření databáze (vytvoření nové, pokud neexistuje)
const db = new Database('./my-database.db', {
  verbose: console.log, // Volitelné pro debugování
});

// Funkce pro získání všech uživatelů
export const getUsers = () => {
  return db.prepare('SELECT * FROM users').all();
};

// Funkce pro vložení nového uživatele
export const addUser = (name: string, email: string) => {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  stmt.run(name, email);
};

// Vytvoření tabulky (pokud neexistuje)
db.prepare('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)').run();
