import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,  // host:'127.0.0.1',
    user: process.env.MYSQL_USER,  // user: 'root',
    password: process.env.MYSQL_PASSWORD, // password:'root',
    database: process.env.MYSQL_DATABASE// database:'b1db'
}).promise();

export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
}

export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?
    `,[id])
    return rows[0]

}

export async function createNote(title,contents) {
    const [result] = await pool.query(`
    INSERT INTO notes (title,contents)
    VALUES (?,?)
    `,[title,contents])
    const id = result.insertId;
    return await getNote(id);
}

// const note = await getNote(1)
// console.log(note);



