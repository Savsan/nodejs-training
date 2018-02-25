import config from './config/cfg';
import * as models from './models';

console.log(config.appName)
const user = new models.User();
const product = new models.Product();
