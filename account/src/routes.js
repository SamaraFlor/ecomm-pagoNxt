import { Router } from "express";
import { createUserUseCase } from "./use-case/createUserAccount.js";


const router = Router();

router.post('/accounts', async (request, response) => {
    const { name, email, password } = request.body;
    const createdUser = await createUserUseCase(name, email, password);

    return response.status(201).json({
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        createdDate: createdUser.createdDate,
    });
});

export { router };