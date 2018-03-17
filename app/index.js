var Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('babel'); // this method adds support for a '--babel' flag
  }


  step1() {
    this.log('Step 1')
  } 

  step2() {
    this.log('Step 2')
  } 
};
