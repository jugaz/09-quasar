export function someMutation(/* state */) {}

export function toggleSlideMenu(state) {
  state.isSideMenuOpen = !state.isSideMenuOpen;
}
