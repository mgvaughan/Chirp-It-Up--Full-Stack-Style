import { Query } from './index';

const allUsers = async () => Query('SELECT * FROM users');
const oneUser = async (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);
const createUser = async (id: number, name: string, email: string, password: string, _created: number) => Query(`INSERT INTO users VALUES(${id}, ${name}, ${email}, ${password}, ${_created})`);
const updateUser = async (id: number, name: string, email: string, password: string, _created: number) => Query(`UPDATE users SET id=${id} SET name=${name} SET email=${email} SET password=${password} SET _created=${_created} WHERE id = ?`, [id]);
const deleteUser = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);

export default{
    allUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser
}

