import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

const user1 = await createUserUseCase('Samara', 'samara@mail.com', 'samara');
const user2 = await createUserUseCase('Maria', 'maria@mail.com', '123senha');

console.log(user1, user2);