const { author, description, homepage } = require('./package.json')

const README = `
Search across your OS processes by name, port, PID or path - and kill them if needed.

See the workflow codebase in here:
${homepage}
`.trim()

/**
 * @type {import('fast-alfred').FastAlfredConfig}
 */
module.exports = {
    bundlerOptions: {
        esmHelpers: true,
        outputFormat: 'esm',
    },
    workflowMetadata: {
        name: 'Kill Process',
        category: 'Tools',
        createdby: author.name,
        webaddress: homepage,
        description,
        readme: README,
    },
    tabSize: 4,
}
