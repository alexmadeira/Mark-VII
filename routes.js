const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'Home')
  .add('projetos', '/projetos', 'Projects');
