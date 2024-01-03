export const resizeWindow = (width) => {
  jest.spyOn(window.screen, "width", "get").mockReturnValue(width);
}

