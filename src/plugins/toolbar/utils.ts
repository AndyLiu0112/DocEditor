export const maskMenuToolBar = (element: HTMLDivElement) => {
  element.style.opacity = "0";
  element.style.left = "-1000px";
  element.style.top = "-1000px";
};

export const getSelectionRect = () => {
  const domSelection = window.getSelection();
  if (domSelection) {
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    return rect;
  }
  return null;
};
