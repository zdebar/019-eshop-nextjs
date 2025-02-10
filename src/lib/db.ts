import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Otevření databáze (nebo vytvoření nové, pokud neexistuje)
export const openDb = async () => {
  const db = await open({
    filename: './my-database.db',
    driver: sqlite3.Database,
  });

  // Vytvoření tabulky (pokud neexistuje)
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    )
  `);

  return db;
};

// Funkce pro získání všech uživatelů
export const getUsers = async () => {
  const db = await openDb();
  const users = await db.all('SELECT * FROM users');
  await db.close();
  return users;
};

// Funkce pro přidání uživatele
export const addUser = async (name: string, email: string) => {
  const db = await openDb();
  const stmt = await db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  await stmt.run(name, email);
  await stmt.finalize();
  await db.close();
};
