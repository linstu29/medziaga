const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(express.json());

const automobiliuFailas = require('./automobiliai.json');

// endpoint arba route
// get post put patch delete ....
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/about', (req, res) => {
    let data = {
        title: 'Apie mus',
        description: 'Mes esame super komanda',
        members: ['Jonas', 'Petras', 'Antanas'],
        yearEstablished: 2021
    };

    res.send(data);
    // res.json(data);
})

app.get('/some-info', (req, res) => {
    res.send('Some info');
})

app.get('/contacts', (req, res) => {
    res.send({ phone: '37012345678', email: 'info@company.lt', address: 'Gatviu gatve, 78-2, Vilnius' })
})

app.get('/cars', (req, res) => {
    res.send(automobiliuFailas);
})

// REST API
// gyvunai:
// GET /gyvunai - grazina visus gyvunus
// GET /gyvunai/:id - grazina viena gyvuna pagal id
// POST /gyvunai - sukuria nauja gyvuna
// PUT /gyvunai/:id - atnaujina gyvuna pagal id
// DELETE /gyvunai/:id - istrina gyvuna pagal id

app.get('/apskaiciuoti/:zodis', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    // res.send('kol kas nieko')
    res.send({
        gautasZodis: req.params.zodis,
        ilgis: req.params.zodis.length
    });
})

app.get('/lyginis/:skaicius', (req, res) => {
    let skaicius = parseInt(req.params.skaicius);
    res.send({ gautasSkaicius: skaicius, lyginis: skaicius % 2 === 0 });
})

app.get('/sakinys/:vardas/:pareigos', (req, res) => {
    // console.log(req.params);
    let gautasVardas = req.params.vardas;
    let gautosPareigos = req.params.pareigos;
    // res.send('kol kas nieko');
    res.send(`Labas, ${gautasVardas}, jūs esate ${gautosPareigos}`);
})

app.post('/sukurti-studenta', (req, res) => {
    // console.log(req.body);
    let gautasVardas = req.body.vardas;
    let gautaPavarde = req.body.pavarde;
    let gautasAmzius = req.body.amzius;
    let gautasKursas = req.body.kursas;
    // res.send('Studentas kuriamas');
    res.send(`${gautasVardas} ${gautaPavarde} (${gautasAmzius} m.) mokosi ${gautasKursas} kurse`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
