import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

const user1 = await createUserUseCase('Rita', 'rita@mail.com', 'ritalinda');
const user2 = await createUserUseCase('Josué', 'josue@mail.com', '123bacana');

console.log(user1, user2);