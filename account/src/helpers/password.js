import bcrypt from 'bcryptjs';

export function hashPassword(password) {
    const saltRounds = 10;
    const oncodePassword = bcrypt.hashSync(password, saltRounds);
    return oncodePassword;
}