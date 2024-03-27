const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: ['src/**/*.graphql'],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
