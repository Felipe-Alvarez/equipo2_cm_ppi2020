const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql');

//mysqlConnection.connect(); GENERA CONFLICTO, SOLO DEJAR LA CONEXIÓN DE mysql.js

// { MÉTODO : "GET" }
router.get('/farmacia', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM `farmacia`', (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true, errorDB : error})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})
// { MÉTODO : "GET/ID" }
router.get('/farmacia/:id', (req, res) => {
  const {id} = req.params;
  mysqlConnection.query('SELECT * FROM farmacia WHERE id_farmacia =? ',[id],(err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });
// {  MÉTODO : "POST" }
router.post('/farmacia',(req,res)=>{
const {nombre, correo, contraseña, nit, rol} = req.body;
let datafarmacia = [nombre, correo, contraseña, nit, rol];
let newfarmacia = `INSERT INTO farmacia (nombre, correo, contraseña, nit, rol) VALUES (?,?,?,?,Farmacia)`;
mysqlConnection.query(newfarmacia, datafarmacia, (err, results, fields)=>{
  if(err){
    return console.error(err.message)
  }
  res.json({ message:`Farmacia Creada!!`, })
})
})

// {  MÉTODO : "PUT"  }
router.put('/farmacia/:id', (req, res) => {
  const {nombre, correo, contraseña, nit, rol} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE farmacia SET nombre= ?, correo= ?, contraseña= ?, nit= ?, rol = ? WHERE id_farmacia = ?`, 
  [nombre, correo, contraseña, nit, rol, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Farmacia  Actualizada!!'});
    } else {
      console.log(err);
    }
  });
});
// {  MÉTODO : "DELETE"  }
router.delete('/farmacia/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM farmacia WHERE id_farmacia = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Farmacia eliminada :C!'});
    } else {
      console.log(err);
    }
  });
});
module.exports = router;