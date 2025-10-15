import config from "@antfu/eslint-config"

export default config({
  stylistic: false,
  imports: {
    overrides: {
      "import/consistent-type-specifier-style": "off",
    },
  },
  typescript: {
    overrides: {
      "node/prefer-global/process": "off",
      "eslint-comments/no-unlimited-disable": "off",
    },
  },
  react: {
    overrides: {
      "react-refresh/only-export-components": "off",
      "react/no-array-index-key": "off",
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
      "react/no-unstable-context-value": "off",
      "react-dom/no-unsafe-target-blank": "off",
    },
  },
})
