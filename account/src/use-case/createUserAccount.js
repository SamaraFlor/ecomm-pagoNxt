import joi from 'joi';
import { existsByEmail,saveAccount } from '../repositories/accountRepository.js';
import { hashPassword } from '../helpers/password.js';

const accountValidator = joi.object({
    email: joi.string().email(),
    password: joi.string().trim().min(8),
})

export async function createUserUseCase(name, email, password) {

    const { error } = accountValidator.validate({email, password}, { abortEarly: false });

    if (error) {
        return {
            hasError: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            account: {}
        }
    }

    const alreadyRegistered = await existsByEmail(email);

    if(alreadyRegistered) {
        return {
            hasError: true,
            errors: [
                {
                    property: 'email',
                    message: 'email already used'
                }
            ],
            account: {}
        }
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
    return {
        hasError: false,
        errors: undefined,
        account: {...user, id: user._id, password: undefined, _id: undefined}
    };
}