
import { Router } from 'express';
import { createUserUseCase } from '../use-case/createUserAccount.js';

const router = new Router();

router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    createAccountUseCase(name, email, password)
        .then(createdAccount => {
            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});

router.get('/accounts', function(request, response) {
    listAccountsUseCase().then(accounts => {
        response.json(accounts);
    });
});

