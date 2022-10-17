import { Query } from './index';

const allUsers = async () => Query('SELECT * FROM users');
const oneUser = async (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);
const createUser = async (name: string, email: string, password: string) => Query(`INSERT INTO users VALUES(${name}, ${email}, ${password})`);
const updateUser = async (id: number, name: string, email: string, password: string) => Query(`UPDATE users SET name=${name}, SET email=${email}, SET password=${password} WHERE id = ?`, [id]);
const deleteUser = async (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);

export default{
    allUsers,
    oneUser,
    createUser,
    updateUser,
    deleteUser
}