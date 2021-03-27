# Node-assert

A library of simple asserts because for crying out loud all I want is 

    assert.true()

not an entire tester-runner-webpacker-clier framework!

Add to package.json :

    {
        "dependencies": {
            "madscience-node-assert": "https://github.com/shukriadams/node-assert.git#0.0.1"
        }
    }

Import

    const assert = require('madscience-node-assert')
    assert.true(false, 'Turns out it was false after all')
    assert.empty([{}], 'Hey, that expected empty array? Well, it had stuff in it')
    assert.length([{}, {}], 3, "yo t'wadn't 3")
    
    
