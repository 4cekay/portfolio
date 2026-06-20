document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      {
        const height = entry.borderBoxSize[0].blockSize;
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`,
        );
        document.documentElement.style.setProperty(
          "--bottom-tab-nav-height",
          `${height * 0.75}px`,
        );
      }
    }
  });
  observer.observe(header);
});
