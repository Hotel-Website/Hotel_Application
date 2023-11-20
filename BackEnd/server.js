const express = require('express');
const mysql= require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db =  mysql.createConnection({
    host:"localhost",
    user: 'root',
    password: '6445',
    database: 'hotel'


});

app.get('/', (re,res)=> {
    return res.json("from backed");
})

app.get('/user', (req,res)=>{
    const sql = "select * from user";
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get('/category', (req,res)=>{
    const sql = "select * from category";
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/user', (req, res) => {
    const { name, email, phone, password } = req.body;

    // Construct the SQL query to insert a new user
    const sql = "INSERT INTO user (name, email, phone, password) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [name, email, phone, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create a new user' });
        }

        return res.json({ message: 'User created successfully', userId: result.insertId });
    });
});

// app.put('/bookingstatus/:email', (req, res) => {
//     const currentEmail = req.params.email;
//     const { newEmail, status } = req.body;

//     // Check if the new email exists in the referenced table (e.g., the users table)
//     const checkEmailQuery = "SELECT email FROM user WHERE email = ?";
    
//     db.query(checkEmailQuery, [newEmail], (err, emailCheckResult) => {
//         if (err) {
//             return res.status(500).json({ error: 'Failed to check email existence' });
//         }
        
//         if (emailCheckResult.length === 0) {
//             return res.status(404).json({ error: 'New email does not exist in the users table' });
//         }

//         // Construct the SQL query to update the bookingstatus
//         const updateQuery = "UPDATE bookingstatus SET email = ?, status = ? WHERE email = ?";
        
//         db.query(updateQuery, [newEmail, status, currentEmail], (err, result) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Failed to update bookingstatus' });
//             }
            
//             if (result.affectedRows === 0) {
//                 return res.status(404).json({ error: 'Booking status not found' });
//             }

//             return res.json({ message: 'Booking status updated successfully' });
//         });
//     });
// });

app.put('/rooms/:id', (req, res) => {
    const roomId = req.params.id;
    const { room_number } = req.body;

    // Construct the SQL query to update the room_number based on the room's ID
    const sql = "UPDATE rooms SET room_number = ? WHERE id = ?";
    
    db.query(sql, [room_number, roomId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update room number' });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Room not found' });
        }

        return res.json({ message: 'Room number updated successfully' });
    });
});




app.delete('/rooms/:id', (req, res) => {
    const id = req.params.id;

    // Construct the SQL query to delete the user based on their ID
    const sql = "DELETE FROM rooms WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete room' });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Room not found' });
        }

        return res.json({ message: 'Room deleted successfully' });
    });
});


app.listen(8081,()=>{
    console.log("listening");
})