import express from 'express';
import { getAllUsers,userSignup,userLogin, getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/',getAllUsers)
router.get('/:id',getUser)
router.post('/login',userLogin)
router.post('/signup',userSignup)


export default router;