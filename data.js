// Banco de dados simples em arquivo JSON para Node.js (exemplo didático)
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'db.json');

function loadDB() {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, JSON.stringify({ usuarios: [], vendas: [], gastos: [], fiados: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function saveDB(db) {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

module.exports = {
    loadDB,
    saveDB,
    DB_FILE
};
