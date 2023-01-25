import { hashPassword } from '../helpers/password.js';
import { saveAccount } from '../repositories/accountRepository.js';

export async function createUserUseCase(name, email, password) {
    const createdDate = new Date().toISOString().substring(0, 10);
    const hashedPassword = await hashPassword(password);
    const email = await isValidEmail (email, cb);
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(email)) {
            // nao é um email valido, nao vale a pena perguntar se existe na DB
            cb(new Error('RegEx: Email nao é valido'));
            return;
        }
    const user = {
        name, 
        email,
        password: hashedPassword,
        createdDate
    };

    await saveAccount(user);
    return user;
}

 
