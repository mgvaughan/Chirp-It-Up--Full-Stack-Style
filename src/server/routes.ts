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
    try {
        res.json((await db.Users.oneUser(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirps/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.oneChirp(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/users/:id', async (req, res) => {
    try {
        res.json((await db.Users.updateUser(req.params.id, 'name', 'email', 'password'))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/chirps/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.updateChirp(req.params.id, 'userid', 'content', 'location'))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/', async (req, res) => {
    try {
        res.json((await db.Users.createUser('name', 'email', 'password'))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/', async (req, res) => {
    try {
        res.json((await db.Chirps.createChirp('userid', 'content', 'location'))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.json((await db.Users.deleteUser(req.params.id))[0]);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.deleteChirp(req.params.id))[0]);
    }
});


export default router;