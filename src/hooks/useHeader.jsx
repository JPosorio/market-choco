const useHeader = () => {
  const scroollTop = (id) => {
    const container = document.querySelector(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      container.scrollTop = 0;
    }, 800);
  };

  return { scroollTop };
};

export default useHeader;
