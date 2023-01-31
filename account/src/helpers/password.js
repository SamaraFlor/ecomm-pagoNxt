import bcrypt from 'bcryptjs';

export async function hashPassword(password) {
    const salt = Number(process.env.PASSWORD_SALT);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export async function comparePassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}