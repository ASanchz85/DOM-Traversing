const saveBG = (choice) => {
  if (localStorage.getItem("bg-theme") === null) {
    localStorage.setItem("bg-theme", choice);
  } else {
    localStorage.removeItem("bg-theme");
    localStorage.setItem("bg-theme", choice);
  }
};

export { saveBG };
