function useMobile() {
  const isMobile = ref(false);
  const checkIsMobile = () => {
    isMobile.value = window.innerWidth < 1280; // 1024px 以下视为移动端
  };

  onMounted(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkIsMobile);
  });
  return {
    isMobile,
  };
}

export { useMobile };
