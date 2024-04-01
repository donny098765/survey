
(async () => {
const { prompt } = require('enquirer')
const questions = require('./question.json')

console.log(await prompt(questions))

})()

/*async function main() { (this is a reg function)
    
    const {prompt} = require('enquirer')
    const questions = require('./question.json')

    console.log(await prompt(questions))

}

main()*/