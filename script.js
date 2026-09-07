// Simple interactive behaviors: mobile nav toggle, gallery modal, contact form simulate
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', () => {
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // gallery modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.gallery-item, .work-image').forEach(img => {
    img.addEventListener('click', (e) => {
      modalImg.src = e.currentTarget.src;
      modalImg.alt = e.currentTarget.alt || 'Foto';
      modal.setAttribute('aria-hidden','false');
    });
  });
  const closeModal = () => modal.setAttribute('aria-hidden','true');
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

  // contact form (client-side simulated send)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Pesan terkirim (simulasi). Terima kasih!';
    form.reset();
    setTimeout(()=> status.textContent = '', 5000);
  });
});
