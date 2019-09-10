const routes = require('next-routes');

module.exports = routes()
  .add('/', 'Home')
  .add('/projetos', 'Projects')
  .add('/projeto/:slug', 'Project');
