import { backend_js_dev_weight } from './backendJsDev.js';
import { fullstack_js_dev_weight } from './fullstackJsDev.js';
import { backend_java_dev_weight } from './backendJavaDev.js';
import { fullstack_java_dev_weights } from './fullstackJavaDev.js';
import { ml_engineer_weight } from './mlEngineer.js';
import { frontend_react_dev_weight } from './frontendReactDev.js';

export const ROLES = {
  BACKEND_JS: backend_js_dev_weight,
  FULLSTACK_JS: fullstack_js_dev_weight,
  BACKEND_JAVA: backend_java_dev_weight,
  FULLSTACK_JAVA: fullstack_java_dev_weights,
  ML_ENGINEER: ml_engineer_weight,
  FRONTEND_REACT: frontend_react_dev_weight
};

export const ALL_ROLES = Object.values(ROLES);

export function getRoleById(roleId) {
  return ALL_ROLES.find(role => role.roleId === roleId);
}

export function getRoleByName(name) {
  return ROLES[name];
}

export {
  backend_js_dev_weight,
  fullstack_js_dev_weight,
  backend_java_dev_weight,
  fullstack_java_dev_weights,
  ml_engineer_weight,
  frontend_react_dev_weight
};
