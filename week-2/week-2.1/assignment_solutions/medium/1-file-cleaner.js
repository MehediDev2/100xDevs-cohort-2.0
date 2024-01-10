const fs = require('fs')

fs.readFile('a.txt', 'utf-8', (err, data) => {
    if(!err){
        // let filterData = data.split(" ").filter((ele) => ele !="").join(' ');
        let filterData = data.replace(/\s+/g," ").trim()
        fs.writeFile('a.txt',filterData , 'utf-8', (err) => {
            if(!err){
                console.log('success')
            }else{
                console.log('failed')
            }
        })
    }else{
        console.log("failed", err)
    }
})
