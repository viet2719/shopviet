module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "transform-imports",
      {
        "@fortawesome/free-solid-svg-icons": {
          transform: "@fortawesome/free-solid-svg-icons/${member}",
          preventFullImport: true,
        },
      },
    ],
  ],
};
