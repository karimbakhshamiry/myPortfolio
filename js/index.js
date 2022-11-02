const paths = ["home", "my-stack", "my-projects", "contact"];
// const themeToggler = document.querySelector(".themeToggler");
// if (window.matchMedia) {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     localStorage.setItem("portTheme", "dark");
//     themeToggler.innerHTML = `<svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke-width="1.5"
//     stroke="currentColor"
//     class="w-6 h-6"
//   >
//     <path
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//     />
//   </svg>`;
//   } else {
//     localStorage.setItem("portTheme", "light");
//     themeToggler.innerHTML = `
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="w-6 h-6"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//         />
//       </svg>`;
//   }
// }

// themeToggler.addEventListener("click", () => {
//   const theme = localStorage.getItem("portTheme");
//   console.log("clicked");
//   if (theme === "dark") {
//     document.getElementsByTagName("html")[0].dataset.theme = "light";
//     localStorage.setItem("portTheme", "light");
//   } else {
//     document.getElementsByTagName("html")[0].dataset.theme = "dark";
//     localStorage.setItem("portTheme", "dark");
//   }
// });

document.querySelectorAll(".navItems").forEach((element) => {
  element.addEventListener("click", (e) => {
    for (let i = 0; i < paths.length; i++) {
      const shownSection = document.querySelector(`.${paths[i]}.show`);
      if (shownSection) {
        shownSection.classList.remove("show");
        shownSection.classList.add("hidden");
        break;
      }
    }
    const section = document.querySelector(`.${e.target.dataset.dir}`);
    section.classList.remove("hidden");
    section.classList.add("show");
  });
});
