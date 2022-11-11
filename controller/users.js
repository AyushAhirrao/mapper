import pool, { executeQuery } from "../config/db";

const getAllUser = async (req, res) => {
    // const query = "delete from emp where rn = 6";
    // console.log(executeQuery(`${query}`, []))

    const table_name = 'users';
    let userData = await executeQuery(`select * from ${table_name}`, [])
    res.send(userData)
};

// const setUserData = async (req, res) => {

//     if (req.method == 'POST') {

//         const table_name = 'User';
//         const query = `INSERT INTO ${table_name} values("${req.body.cName}","${req.body.cEmail}",${req.body.cPhone},"${req.body.cMessage}");`;

//         let UserData = executeQuery(`${query}`, [])

//         // console.log(query)

//         console.log(UserData);

//         // console.log(req.body.)

//     }
//     else {
//         res.status(200).json(["User data"])
//     }

// }


export { getAllUser }