const express = require('express');
const route = express.Router();

import  {index, share} from "./controller.mjs";

route.get("/",index)
route.get("/about",share)
module.exports = route;