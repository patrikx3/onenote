module.exports = (grunt) => {
    const builder = require(`corifeus-builder`);
    const loader = new builder.loader(grunt);
    loader.js();
    grunt.registerTask('default', builder.config.task.build.js);
}
