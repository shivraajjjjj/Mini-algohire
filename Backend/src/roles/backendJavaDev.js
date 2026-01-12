export const backend_java_dev_weight = {
  roleId: 3,
  title: "Backend Java Developer (Entry-Level)",
    weights: {  
    languages: {
      Java: 35,
      cap: 35
    },  
    runtime: {
      JVM: 5,
      cap: 5
    },

    frameworks: {
        core: {
        Spring: 20,
        SpringBoot: 20,
        Micronaut: 15,
        Quarkus: 15
      },
      optional: {       
        Hibernate: 5,
        JPA: 5,
        Vertx: 5
      },
      cap: 30
    },
    structure: {
      controllers: 2,
      services: 2,
      repositories: 2,
      config: 2,
      cap: 10
    },  
    build: {
      maven_gradle: 10,
      cap: 10
    },
    penalties: {
      tutorial_max: 25
    },

    totalCap :115
  }
}