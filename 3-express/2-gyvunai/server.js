const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let gyvunai = [
    { id: 1, name: 'Murka', age: 3 },
    { id: 2, name: 'Reksas', age: 4 }
];

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// REST API
// GYVUNAI
// GET /gyvunai - grazina visus gyvunus
// GET /gyvunai/:id - grazina viena gyvuna pagal id
// POST /gyvunai - sukuria nauja gyvuna
// PUT /gyvunai/:id - atnaujina gyvuna pagal id
// PATCH /gyvunai/:id - atnaujina gyvuna pagal id
// DELETE /gyvunai/:id - istrina gyvuna pagal id

app.get('/gyvunai', (req, res) => {
    res.send(gyvunai);
})

app.get('/gyvunai/:id', (req, res) => {
    let id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).send('Truksta gyvuno id');
    }

    // res.send('gautas id: ' + req.params.id);

    let gyvunas = gyvunai.find(gyvunas => gyvunas.id === id); // objektas | undefined

    if (!gyvunas) {
        return res.status(404).send('Gyvunas nerastas');
    }

    res.send(gyvunas);
})

app.post('/gyvunai', (req, res) => {
    // res.send('ok')
    // res.send(req.body)

    // if (!req.body || !req.body.name || !req.body.age) {
    //     return res.status(400).send('Truksta duomenu');
    // }

    if (!req.body?.name) {
        return res.status(400).send('Reikia nurodyti name');
    }

    if (!req.body?.age) {
        return res.status(400).send('Reikia nurodyti age');
    }

    if (req.body.age < 0) {
        return res.status(400).send('Amzius negali buti mazesnis uz 0');
    }

    // res.send('ok');

    let naujasGyvunas = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }

    // res.send(naujasGyvunas);

    gyvunai.push(naujasGyvunas);
    res.status(201).send(naujasGyvunas);
})

app.patch('/gyvunai/:id', (req, res) => {
    let id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).send('Truksta gyvuno id');
    }

    // res.send('atnaujinsim gyvuna kurio id yra ' + id);

    let gyvunas = gyvunai.find(gyvunas => gyvunas.id === id);

    if (!gyvunas) {
        return res.status(404).send('Gyvunas nerastas');
    }

    if (req.body.name) {
        gyvunas.name = req.body.name;
    }

    if (req.body.age) {
        if (req.body.age < 0) {
            return res.status(400).send('Amzius negali buti mazesnis uz 0');
        }
        
        gyvunas.age = req.body.age;
    }

    res.send(gyvunas);
})

app.delete('/gyvunai/:id', (req, res) => {
    let id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).send('Truksta gyvuno id');
    }

    // res.send('trinsim gyvuna kurio id yra ' + id);

    gyvunai = gyvunai.filter(gyvunas => gyvunas.id !== id);
    res.status(200).send('ok');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
