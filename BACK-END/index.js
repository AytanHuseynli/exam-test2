const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String
  });


  const Product = mongoose.model('products', productSchema);

app.get('/',async (req, res) => {
    const data = await Product.find()
    res.send(data)
  })
app.get('/:id',async (req, res) => {
    const {id} = req.params
    const data = await Product.findById(id)
    res.send('Hello World!')
  })

  
  app.post('/', async(req, res) => {
    const data = await Product.create(req.body)
    res.send(data)
  })

  

  app.put('/',async (req, res) => {
    const {id} = req.params
    const data = await Product.findByIdAndUpdate(id, req.body)
    res.send('Got a PUT request at /user')
  })


  

  app.delete('/:id',async (req, res) => {
    const {id} = req.params
    const data = await Product.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
    mongoose.connect('mongodb+srv://aytenhhbp109:aytenhuseynli3224@bp109.9sxgz.mongodb.net/')
    .then(()=> console.log("Db connected"))

})
      