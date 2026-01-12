export const backend_js_dev_weight = {
  "roleId": 1,
  "title": "Backend JavaScript Developer (Entry-Level)",

  "weights": {
    "languages": {
      "JavaScript": 25,
      "TypeScript": 10,
      "Node.js": 5,
      "cap": 35
    },

    "frameworks": {
      "core": {
        "Express": 20,
        "NestJS": 20,
        "Fastify": 20
      },
      "optional": {
        "Koa": 2.5,
        "Hapi": 2.5,
        "AdonisJS": 2.5,
        "Hono": 2.5
      },
      "cap": 30
    },

    "structure": {
      "controllers": 2,
      "services": 2,
      "routes": 2,
      "models": 2,
      "middlewares": 2,
      "cap": 10
    },

    "database": {
      "any": 10,
      "multiple": 15,
      "cap": 15
    },

    "infra": {
      "tests": 5,
      "docker_or_ci": 5,
      "cap": 10
    },

    "penalties": {
      "tutorial_max": 25
    }
  }
}
