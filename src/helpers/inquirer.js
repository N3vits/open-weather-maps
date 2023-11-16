import 'colors';
import inquirer from 'inquirer';


export const menu = async () => {
    //console.clear();
    console.log('==========================='.green);
    console.log('   Select an option'.yellow  );
    console.log('===========================\n'.green);

    const opt = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [ {
                value: 1,
                name: `${'1.'.green} Search city`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value: 0,
                name: `${'0.'.green} Exit`
            },
            ],
        }
    ]);

    return opt.option;
}


export const input = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}


export const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`,
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}


