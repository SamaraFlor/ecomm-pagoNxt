import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { Router }  from "express";

const router = new Router();

router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    createUserUseCase(name, email, password)
        .then(createUserUseCase => {
            delete createUserUseCase.password
            response.status(201).json(createUserUseCase)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});

export { router };