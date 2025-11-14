
<script>
  document.addEventListener("DOMContentLoaded", function() {
  
  
  const projets = document.querySelectorAll('.projet');
  projets.forEach(projet => {
    projet.addEventListener('mouseenter', () => {
      projet.style.background = '#441010ff';
      projet.style.color = 'white';
    });
    projet.addEventListener('mouseleave', () => {
      projet.style.background = '#ecf0f1';
      projet.style.color = '#333';
    });
  });

  
  const form = document.getElementById('contactForm');
  const messageEnvoye = document.getElementById('messageEnvoye'); 

  if (form && messageEnvoye) {  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const prenom = document.getElementById('prenom').value.trim();
      const nom = document.getElementById('nom').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if ( prenom ==='' || nom === '' || email === '' || message === '') {
        messageEnvoye.innerHTML = '<p style="color:red; text-align:center;">Tous les champs sont obligatoires !</p>';
        return;
      }
      
      if (!email.includes('@') || !email.includes('.')) {
        messageEnvoye.innerHTML = '<p style="color:red; text-align:center;">Email invalide !</p>';
        return;
      }
      
     
      messageEnvoye.innerHTML = `
        <p style="color:green; text-align:center; font-weight:bold;">
          Merci ${nom} ! Ton message a été envoyé avec succès.
        </p>`;
      
      form.reset();
      
     
      setTimeout(() => {
        messageEnvoye.innerHTML = '';
      }, 5000);
    });
     },
});
</script>