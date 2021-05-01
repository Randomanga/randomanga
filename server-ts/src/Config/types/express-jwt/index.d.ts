import { IUserModel } from 'Data/Models/User.model';
import jwt = require('express-jwt');
import express = require('express');

declare global {
  namespace Express {
    interface User extends IUserModel {}
  }
}
