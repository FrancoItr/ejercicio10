import * as controller from './modulos/controller.js'
import chalk from 'chalk';

const suma1 = controller.suma(1, 2);
console.log(suma1);
const suma2 = controller.suma(4, 5);
console.log(suma2);


console.log(chalk.green(controller.multiplica(suma1, suma2)));