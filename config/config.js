var current_env  = "staging";

function config_function(){
    var config = {};    
    switch (current_env) {
      case 'production':
        config = require('./env/production.json');
        break;
  
      case 'development':
        config = require('./env/development.json');
        break;
  
      case 'staging':
        config = require('./env/staging.json');
        break;
  
      default:
        console.error('NODE_ENV environment variable not set');
        process.exit(1);
    }
    return config; 
}

module.exports = config_function;


      











