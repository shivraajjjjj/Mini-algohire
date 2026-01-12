export const frontend_react_dev_weight = {
  roleId: 7,
  title: "Frontend React Developer (Entry-Level)",

  weights: {

    languages: {
      JavaScript: 25,
      TypeScript: 10,
      cap: 35
    },

    markup: {
      HTML: 5,
      CSS: 5,
      cap: 10
    },

    frameworks: {
      core: {
        React: 20
      },
      optional: {
        Redux: 5,
        ReactRouter: 5,
        NextJS: 5
      },
      cap: 25
    },

    structure: {
      components: 3,
      pages: 3,
      hooks: 2,
      styles: 2,
      cap: 10
    },

    infra: {
      tests: 5,
      docker_or_ci: 5,
      cap: 10
    },

    penalties: {
      tutorial_max: 25
    },

    totalCap :90
  }
};
