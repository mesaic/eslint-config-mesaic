var resolve = require('resolve');
var node = require('eslint-import-resolver-node');

exports.interfaceVersion = 2;

exports.resolve = function(source_, file, config) {
  const source = Object.keys(config.alias || {}).reduce((src, alias) => {
    if (src && src.startsWith(alias)) {
      return config.alias[alias] + src.substring(alias.length);
    } else {
      return src;
    }
  }, source_);

  return node.resolve(source, file, config);
};
