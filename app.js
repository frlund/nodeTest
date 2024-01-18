import chalk from 'chalk';

const kjuttaVits = `${chalk.red('Fortelle')} ${chalk.yellow('en')} ${chalk.green('vits ?')} 
                ${chalk.cyan('Kjutta')}? ${chalk.blue('med')} ${chalk.magenta('slips')}`;

console.log(kjuttaVits);
git add .
git commit -m "Første commit med farget vits"
git remote add origin https://github.com/frlund/nodeTest
git push -u origin master
