import { Query } from './index';

const allChirps = async () => Query('SELECT * FROM chirps');
const oneChirp = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const createChirp = async (userid: string, content: string, location: string) => Query(`INSERT INTO users VALUES(${userid}, ${content}, ${location})`);
const updateChirp = async (id: number, userid: string, content: string, location: string) => Query(`UPDATE users SET userid=${userid}, SET content=${content}, SET location=${location} WHERE id = ?`, [id]);
const deleteChirp = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);

export default{
    allChirps,
    oneChirp,
    createChirp,
    updateChirp,
    deleteChirp
}