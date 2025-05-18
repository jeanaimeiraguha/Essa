// starting time is :  10:43
//11:11 stoped
//11:25 continued
import mysql from 'mysql'
import express from 'express'
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors())
const db=mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database:"Nyarugunga"
})
db.connect((err)=>{
     if(err){
          console.log("Failed")
     }
     else{
          console.log("connected")
     }
})
app.get('/selectuser',(req,res)=>{
     const sql="SELECT * FROM users";
     db.query(sql,(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

app.post('/adduser',(req,res)=>{
     const sql="INSERT INTO users (name,password) VALUES(?,?)";
     const{name,password}=req.body;
     db.query(sql,[name,password],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

app.delete('/deluser/:id',(req,res)=>{
     const sql="DELETE FROM users where id=?";
     const{id}=req.params;
     db.query(sql,[id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})


app.put('/upduser/:id',(req,res)=>{
     const sql="UPDATE users set name=? , password=? where id=?";
     const{id}=req.params;
     const {name,password}=req.body;
     db.query(sql,[ name,password,id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

///////////////////TRADE /////////////////////////////

app.get('/selecttrade',(req,res)=>{
     const sql="SELECT * FROM trade";
     db.query(sql,(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})
app.get('/selectupd/:id',(req,res)=>{
     const{id}=req.params;
     const sql="SELECT * FROM trade where id=?";
     db.query(sql,[id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result[0])
     })
})


app.post('/addtrade',(req,res)=>{
     const sql="INSERT INTO users (name) VALUES(?)";
     const{name}=req.body;
     db.query(sql,[name],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

app.delete('/deltrade/:id',(req,res)=>{
     const sql="DELETE FROM trade where id=?";
     const{id}=req.params;
     db.query(sql,[id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})


app.put('/updtrade/:id',(req,res)=>{
     const sql="UPDATE trade set name=? where id=?";
     const{id}=req.params;
     const {name}=req.body;
     db.query(sql,[name,id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

///////////////////TRAINEES ////////////////////////



app.get('/selecttrainees',(req,res)=>{
     const sql="SELECT * FROM trainees";
     db.query(sql,(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})



app.post('/addtrainees',(req,res)=>{
     const sql="INSERT INTO trainees (fname,lname,gender,t_id) VALUES(?,?,?,?)";
     const{fname,lname,gender,t_id}=req.body;
     db.query(sql,[fname,lname,gender,t_id],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})





// Backend Route: Delete Trainee
app.delete('/deltrainee/:t_id', (req, res) => {
    const sql = "DELETE FROM trainees WHERE t_id = ?";
    const { t_id } = req.params;
    
    db.query(sql, [t_id], (err, result) => {
        if (err) return res.status(404).json("Failed");
        return res.status(200).json(result);
    });
});


app.use(express.json());

app.put('/updtrainees/:tid', (req, res) => {
    const sql = "UPDATE trainee SET lname = ?, fname = ?, gender = ?, t_id = ? WHERE tid = ?";
    const { tid } = req.params;
    const { fname, lname, gender, t_id } = req.body;

    if (!fname || !lname || !gender || !t_id) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    db.query(sql, [lname, fname, gender, t_id, tid], (err, result) => {
        if (err) return res.status(500).json({ message: "Failed to update trainee", error: err });
        return res.status(200).json({ message: "Trainee updated successfully" });
    });
});



app.get('/traineeupd/:tid',(req,res)=>{
     const{tid}=req.params;
     const sql="SELECT * FROM trainees where tid=?";
     db.query(sql,[tid],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result[0])
     })
})

//////////////////////MARKS ////////////////////////


app.get('/mselect',(req,res)=>{
     const sql="SELECT * FROM marks";
     db.query(sql,(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result)
     })
})

app.get('/mselectupd/:tid',(req,res)=>{
     const {tid}=req.params;
     const sql="SELECT * FROM marks where tid=?";
     db.query(sql,[tid],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result[0])
     })
})



app.post('/minsert', (req, res) => {
    const sql = "INSERT INTO marks (tid, t_id, m_name, f_assessment, s_assessment, T_marks) VALUES (?, ?, ?, ?, ?, ?)";
    const { tid, t_id, m_name, f_assessment, s_assessment } = req.body;
    const T_marks = parseInt(f_assessment) + parseInt(s_assessment) || 0; // Calculate T_marks

    db.query(sql, [tid, t_id, m_name, f_assessment, s_assessment, T_marks], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json("Failed to add marks");
        }
        return res.status(200).json({ message: "Marks added successfully", result });
    });
});





// Backend Route: Delete Trainee
app.delete('/mdelete/:tid', (req, res) => {
    const sql = "DELETE FROM marks WHERE tid = ?";
    const { tid } = req.params;
    
    db.query(sql, [tid], (err, result) => {
        if (err) return res.status(404).json("Failed");
        return res.status(200).json(result);
    });
});


// app.use(express.json());

app.put('/mupdate/:tid', (req, res) => {
    const sql = "UPDATE marks SET t_id=?, m_name=?, f_assessment=?, s_assessment=? WHERE tid = ?";
    const { tid } = req.params;
    const { t_id, m_name, f_assessment, s_assessment } = req.body;

    db.query(sql, [t_id, m_name, f_assessment, s_assessment, tid], (err, result) => {
        if (err) return res.status(500).json({ message: "Failed to update trainee", error: err });
        return res.status(200).json({ message: "Trainee updated successfully" });
    });
});




app.get('/traineeupd/:tid',(req,res)=>{
     const{tid}=req.params;
     const sql="SELECT * FROM trainees where tid=?";
     db.query(sql,[tid],(err,result)=>{
          if(err) return res.status(404).json("Failed")
         return res.status(200).json(result[0])
     })
})





app.listen(3000,()=>{
     console.log("My app is running on http://localhost:3000")
})