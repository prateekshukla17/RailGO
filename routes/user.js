const express = require('express');
const { Router } = require('express');
const userRouter = Router();
const { z } = require('zod');

userRouter.use(express.json());

userRouter.post('/signup', async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(1).max(20),
    password: z.string().min(1).max(20),
  });

  const parseData = requiredBody.safeParse(req.body);

  if (!parseData.success) {
    res.status(403).json({
      message: 'Incorrect Format',
      error: parseData.error.format(),
    });
  }
});

userRouter.post('/signin', async function (req, res) {
  res.json({
    message: 'SignIn Endpoint',
  });
});

module.exports = {
  userRouter: userRouter,
};
