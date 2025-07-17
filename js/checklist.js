document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('#lista-checklist input[type="checkbox"]');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const todosMarcados = Array.from(checkboxes).every(box => box.checked);
      if (todosMarcados) {
        alert("Parabéns, exorcizou o ex! 💅✨");
      }
    });
  });
});
