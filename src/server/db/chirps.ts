import { Query } from './index';

const allChirps = async () => Query('SELECT * FROM chirps');
const oneChirp = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);
const createChirp = async (id: number, userid: string, content: string, location: string, _created: number) => Query(`INSERT INTO users VALUES(${id}, ${userid}, ${content}, ${location}, ${_created})`);
const updateChirp = async (id: number, userid: string, content: string, location: string, _created: number) => Query(`UPDATE users SET id=${id} SET userid=${userid} SET content=${content} SET location=${location} SET _created=${_created} WHERE id = ?`, [id]);
const deleteChirp = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);

export default{
    allChirps,
    oneChirp,
    createChirp,
    updateChirp,
    deleteChirp
}