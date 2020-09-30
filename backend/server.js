const express = require('express')

const app = express();

app.get('/api/items', (req, res) => {
    const items = [
        {id: 1, name:'milk', price: 4},
        {id: 2, name:'oreo', price: 5},
        {id: 3, name:'kitkat', price: 2},
        {id: 4, name:'chips', price: 3}
    ]

    res.json(items)
})



const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))