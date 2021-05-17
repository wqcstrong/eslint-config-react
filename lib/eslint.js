const defaultRules = require('./default-rules')

module.exports = {
  extends: [require.resolve('@blucass/eslint-config-typescript/lib/eslint')],
  ...defaultRules
}
