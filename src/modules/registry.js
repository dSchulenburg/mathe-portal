const modules = new Map();

export function registerModule(module) {
  if (!module.id) throw new Error('Module must have an id');
  modules.set(module.id, module);
}

export function getModule(id) {
  return modules.get(id);
}

export function getAllModules() {
  return Array.from(modules.values());
}
