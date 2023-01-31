import { hashPassword } from '../helpers/password.js';
import { existsByEmail, saveAccount} from '../repositories/accountRepository.js';


export async function createUserUseCase(name, email, password) {
    const alreadyRegistered = await existsByEmail(email);

    if(alreadyRegistered) {
        throw new Error('User already registered');
    }

    const createdDate = new Date().toISOString().substring(0, 10);
    const hashedPassword = await hashPassword(password);
    const user = {
        name, 
        email,
        password: hashedPassword,
        createdDate
    };

    await saveAccount(user);
    return user;
}
