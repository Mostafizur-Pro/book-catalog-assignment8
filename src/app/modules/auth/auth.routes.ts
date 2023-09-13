import express from 'express';

import { authController } from './auth.controller';


const router = express.Router();
router.post('/signup', 
    // ValidateRequest(authValidation.signupValidation),
    authController.signupUser
);
router.post(
  '/signin',
  // ValidateRequest(authValidation.loginValidation),
  authController.loginUser
);

export const authRoutes = router;
