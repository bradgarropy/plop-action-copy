const fs = require("fs")
const path = require("path")

const actions = plop => {
    plop.setDefaultInclude({actionTypes: true})

    plop.setActionType("copy", (answers, config, plop) => {
        const src = plop.renderString(config.src, answers)
        const dest = plop.renderString(config.dest, answers)

        const dirname = path.dirname(dest)

        fs.mkdirSync(dirname, {recursive: true})
        fs.copyFileSync(src, dest)
    })
}

module.exports = actions
