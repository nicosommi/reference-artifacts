module.exports = {
  opts: {
    encoding: "utf8",
    destination: "./docs",
    recurse: true,
    package: "./package.json",
    readme: "./README.md",
    tutorials: "./docs/tutorials",
    template: "node_modules/minami"
  },
  plugins: ["plugins/markdown"],
  source: {
    include: ["rawjs"]
  },
  tags: {
    dictionaries: ["jsdoc"]
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      outputSourceFiles: true,
      includeDate: true
    }
  }
}
