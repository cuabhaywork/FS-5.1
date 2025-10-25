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


//index.html// 


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Product CRUD App</title>
<style>
  body {
    font-family: 'Segoe UI', sans-serif;
    background: #f7f8fa;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
  .container {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    width: 450px;
  }
  h1 { text-align: center; color: #333; }
  input { width: calc(100% - 20px); padding: 10px; margin: 8px 0; border-radius: 6px; border: 1px solid #ccc; }
  button { background: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; transition: 0.3s; margin: 5px; }
  button:hover { background: #0056b3; }
  ul { list-style: none; padding: 0; margin-top: 20px; }
  li {
    background: #f0f4ff;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .actions button { font-size: 13px; padding: 5px 10px; }
  .delete-btn { background: #dc3545; }
  .delete-btn:hover { background: #a71d2a; }
</style>
</head>
<body>
<div class="container">
  <h1>Product CRUD App</h1>
  <input id="name" placeholder="Product Name">
  <input id="price" placeholder="Price" type="number">
  <input id="category" placeholder="Category">
  <button onclick="addProduct()">Add Product</button>

  <ul id="productList"></ul>
</div>

<script>
const api = '/products'

async function loadProducts() {
  const res = await fetch(api)
  const products = await res.json()
  const list = document.getElementById('productList')
  list.innerHTML = ''
  products.forEach((p, i) => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${p.name} - ₹${p.price} (${p.category})</span>
      <div class="actions">
        <button onclick="updateProduct(${i})">Update</button>
        <button class="delete-btn" onclick="deleteProduct(${i})">Delete</button>
      </div>`
    list.appendChild(li)
  })
}

async function addProduct() {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const category = document.getElementById('category').value
  if(!name || !price || !category) return alert('Fill all fields')
  await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price, category })
  })
  document.getElementById('name').value = ''
  document.getElementById('price').value = ''
  document.getElementById('category').value = ''
  loadProducts()
}

async function deleteProduct(i) {
  await fetch(`${api}/${i}`, { method: 'DELETE' })
  loadProducts()
}

async function updateProduct(i) {
  const name = prompt('Enter new name:')
  const price = prompt('Enter new price:')
  const category = prompt('Enter new category:')
  if(!name || !price || !category) return
  await fetch(`${api}/${i}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price, category })
  })
  loadProducts()
}

loadProducts()
</script>
</body>
</html>

