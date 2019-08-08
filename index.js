const request = require('request')
request('http://pesquisa.in.gov.br/imprensa/core/start.action',{json:true}, function(error, response, body){


    if(error ===null && response.statusCode ===200)
    {
        console.log('Page loaded successfully')
        console.log(body)
       
    }
    else
    {

        console.log('error:', error)
        console.log('response:', response && response.statusCode)
        console.log('body:', body)
    }
})
