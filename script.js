onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document.getElementById('envelopeButton').addEventListener('click', function() {
  document.getElementById('messageModal').style.display = 'block';
});