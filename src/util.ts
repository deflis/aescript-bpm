export function getCompotion(): CompItem {
  const proj = app.project;
  if (!proj) {
    throw "";
  }
  const comp = proj.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    throw "";
  }
  return comp;
}
