import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.Chirps.allChirps());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/users', async (req, res) => {
    try {
        res.json(await db.Users.allUsers());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/users/:id', async (req, res) => {
    let id = Number(Number(req.params.id))
    try {
        res.json((await db.Users.oneUser(id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirps/:id', async (req, res) => {
    let id = Number(Number(req.params.id))
    try {
        res.json((await db.Chirps.oneChirp(id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/users/:id', async (req, res) => {
    let id = Number(Number(req.params.id))
    try {
        res.json((await db.Users.updateUser(id, 'name', 'email', 'password', Date.now()))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/chirps/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        res.json((await db.Chirps.updateChirp(id, 'userid', 'content', 'location', Date.now()))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/users/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        res.json((await db.Users.createUser(id, 'name', 'email', 'password', Date.now()))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/chirps/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        res.json((await db.Chirps.createChirp(id, 'userid', 'content', 'location', Date.now()))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/api/users/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        res.json((await db.Users.deleteUser(id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/api/chirps/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        res.json((await db.Chirps.deleteChirp(id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


export default router;