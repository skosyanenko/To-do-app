const {alias, aliasJest, configPaths} = require('react-app-rewire-alias')

const aliasMap = configPaths('./tsconfig.paths.json');

console.log(aliasMap);

module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)