import {
  combine,
  ignores,
  imports,
  javascript,
  react,
  typescript,
} from "@antfu/eslint-config"

export default combine(
  ignores(["node_modules/**", "build/**", ".react-router/**"]),
  javascript(),
  imports({
    overrides: {
      "import/consistent-type-specifier-style": "off",
    },
  }),
  typescript(),
  react(),
  {
    rules: {
      "react-refresh/only-export-components": "off",
      "react/no-array-index-key": "off",
      "react-dom/no-dangerously-set-innerhtml": "off",
      "react-hooks-extra/no-direct-set-state-in-use-effect": "off",
      "react/no-unstable-context-value": "off",
    },
  },
)
