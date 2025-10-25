const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static(__dirname))

let products = []

// CREATE
app.post('/products', (req, res) => {
  const product = req.body
  products.push(product)
  res.json({ message: 'Product added successfully', product })
})

// READ
app.get('/products', (req, res) => {
  res.json(products)
})

// UPDATE
app.put('/products/:index', (req, res) => {
  const index = req.params.index
  if (products[index]) {
    products[index] = req.body
    res.json({ message: 'Product updated successfully', product: products[index] })
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

// DELETE
app.delete('/products/:index', (req, res) => {
  const index = req.params.index
  if (products[index]) {
    const deleted = products.splice(index, 1)
    res.json({ message: 'Product deleted successfully', deleted })
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
