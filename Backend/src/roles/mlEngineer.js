export const ml_engineer_weight = {
  roleId: 4,
  title: "Machine Learning Engineer / Intern",

  weights: {
    
    languages: {
      Python: 35,
      cap: 35
    },

    ml_frameworks: {
      core: {
        "scikit-learn": 20,
        "TensorFlow": 20,
        "PyTorch": 20
      },
      optional: {
        "Keras": 5,
        "XGBoost": 5,
        "LightGBM": 5
      },
      cap: 30
    },

    data_tools: {
      Pandas: 10,
      NumPy: 10,
      cap: 15
    },

    structure: {
      notebooks: 3,   
      data: 3,
      models: 2,
      scripts: 2,
      cap: 10
    },

    dependencies: {
      requirements_txt: 5,
      pyproject_toml: 5,
      environment_yml: 5,
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

    totalCap :100
  }
};
