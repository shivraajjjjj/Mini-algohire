export const fullstack_js_dev_weight = {
  roleId: 2,
  title: "Full Stack JavaScript Developer (Entry-Level)",

  weights: {
    languages: {
      JavaScript: 25,
      TypeScript: 10,
      cap: 35
    },

    runtime: {
      "Node.js": 5,
      cap: 5
    },

    frameworks: {
      backend_core: {
        Express: 12,
        NestJS: 12,
        Fastify: 12
      },
      frontend_core: {
        React: 12,
        Vue: 12,
        Angular: 12
      },
      optional: {
        "Next.js": 4,
        "Nuxt.js": 4,
        "SvelteKit": 4
      },
      cap: 30
    },

    structure: {
      backend_group: {
        controllers: 2,
        services: 2,
        routes: 2,
        models: 2,
        middlewares: 2
      },
      frontend_group: {
        components: 2,
        pages: 2,
        hooks: 2
      },
      cap: 10
    },

    database: {
      any: 10,
      multiple: 15,
      cap: 15
    },

    infra: {
      tests: 5,
      docker_or_ci: 5,
      cap: 10
    },

    penalties: {
      tutorial_max: 25
    },

    TotalCap :105
  }
};
