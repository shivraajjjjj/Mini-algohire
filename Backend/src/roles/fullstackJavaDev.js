export const fullstack_java_dev_weights = {
    roleId: 6,
    title: "Fullstack Java Developer / Intern",

    weights: {
        languages: {
            Java: 25,
            JavaScript: 10,
            cap: 35
        },
        frameworks: {
            backend_core: {
                Spring: 15, 
                SpringBoot: 15,
                Micronaut: 10,
                Quarkus: 10
            },
            frontend_core: {
                React: 10,
                Angular: 10,
                Vue: 10
            },
            optional: {
                Hibernate: 5,
                JPA: 5,
                NextJS: 5,
                NuxtJS: 5
            },
            cap: 40
        },
        structure: {
            // Backend
            controllers: 2,
            services: 2,
            routes: 2,
            models: 2,
            config: 2,
            // Frontend
            components: 2,
            pages: 2,
            styles: 2,
            assets: 2,
            cap: 15
        },
        build: {
            maven_gradle: 10,
            npm_yarn: 5,
            cap: 15
        },
        penalties: {
            tutorial_max: 25
        },
        totalCap: 105
    }
}