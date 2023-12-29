// var mysql = require("mysql2")
import mysql from "mysql2"


const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'sumu'
}).promise();

export async function getEmps(){
    const emps = await pool.query("select * from employee");
    return emps[0];
    console.log(emps[0]);
}

export async function getEmp(id){
    const emps = await pool.query("select * from employee where id=?",[id]);
    // const emps = await pool.query(`select * from employee where id=${id}`);
    console.log(emps[0]);
}
export async function createEmp(name,age){
    const [emps] = await pool.query("insert into employee(name,age) values(?,?)",[name,age])
    console.log(emps.insertId)

}

export async function deleteEmp(id){
    const emps = await pool.query("delete from employee where id = ?",[id])
    console.log(emps);
}

export async function updateEmp(id,name,age){
    const emps = await pool.query("update employee set name = ? ,age = ? where id=?",[name,age,id] )
    console.log(emps);
}

// updateEmp(3,"om",53);
// deleteEmp(4);
getEmps();