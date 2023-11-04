'use strict'

const { exec, spawn } = require('child_process')

exec('node -v', (err, stdout, stderr) => {
    console.log(stdout)
})