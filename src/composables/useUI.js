import { computed } from "vue";
import { useStore } from "vuex";
const useUI = () => {
  const store = useStore();
  return {
    // sideMenuOpen: computed(() => store.getters["ui/isSlideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/isSlideMenuOpen"];
      },
      set(val) {
        store.commit("ui/toggleSlideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSlideMenu");
    },
  };
};

export default useUI;
