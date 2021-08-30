import { Router } from 'express';
import userService from '../service/user';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    await userService.register(req.body.firstName, req.body.email);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).json('something went wrong')
  }
});

export default router;

