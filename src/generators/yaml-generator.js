/**
Definition of the YAMLGenerator class.
@module yaml-generator.js
@license MIT. See LICENSE.md for details.
*/


let YAMLGenerator;
const TemplateGenerator = require('./template-generator');

/**
YamlGenerator generates a YAML-formatted resume via TemplateGenerator.
*/

module.exports = (YAMLGenerator = class YAMLGenerator extends TemplateGenerator {

  constructor() { super('yml', 'yml'); }
});
