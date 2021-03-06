const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql_pool');

//mysqlConnection.connect();
// { MÉTODO : "GET" }
router.get('/pedido', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM `pedido`', (error, rows, fields) => {
      if(error){
        res.status(503).json({mensaje : "Error en el servidor.", error : true})
      }
      res.json(rows)
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true});
  }
})

router.get('/pedido/:id',(req,res)=>{
  const {id}= req.params;
  mysqlConnection.query('SELECT * FROM farmacia WHERE id_farmacia = ?',[id],(err, rows, fields)=>{
    if(!err){
        res.json(rows[0]);
      } else {
        console.log(err);
      }
  })
})

router.post('/pedido',(req,res)=>{
  const {documento, documento_formula, id_usuario, nombre_farmacia} = req.body;
  let datauser = [documento, documento_formula, id_usuario, nombre_farmacia];
mysqlConnection.query('INSERT INTO pedido (documento, documento_formula, id_usuario, nombre_farmacia) VALUES (?,?,?,?)',datauser,(err, results, fields)=>{
  if(err){
    return console.error(err.message)
  }
  console.log(results);
  res.json({ mensaje:`Pedido añadido !!`})
})
})

router.delete('/pedido/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM pedido WHERE id_pedido = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Pedido eliminado!!'});
    } else {
      console.log(err);
    }
  });
});
module.exports = router;