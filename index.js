const request = require('request')
request('http://pesquisa.in.gov.br/imprensa/core/start.action', function(error, response, body){


    if(error ===null && response.statusCode ===200)
    {
        console.log('Page loaded successfully')
    }
    else
    {

        console.log('error:', error)
        console.log('response:', response && response.statusCode)
        console.log('body:', body)
    }
})
