if(process.env.NODE_ENV === "production"){
    //load production config file
    module.exports = require('./prod')
}else{
    //load development config file
    module.exports = require('./dev');
}