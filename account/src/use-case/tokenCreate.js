import { comparePassword } from "../helpers/password.js";
import { generateToken } from "../helpers/token.js";
import { findUserByEmail } from "../repositories/accountRepository.js";

export async function createUserTokenUseCase(email, password) {
    const possibleUser = await findUserByEmail(email);

    if(!possibleUser) {
        return null;
    }

    const passwordIsMatch = await comparePassword(password, possibleUser.password);

    if(passwordIsMatch) {
        //_id vem do mongo 
        return generateToken(possibleUser._id);
    }

    return null;
}