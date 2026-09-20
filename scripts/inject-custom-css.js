hexo.extend.injector.register('head_end', () => {
  const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com">' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap" rel="stylesheet">';
  const customCss = `<link rel="stylesheet" href="${hexo.config.root}css/custom.css">`;
  return fonts + customCss;
});

hexo.extend.filter.register('after_render:html', (html) => {
  return html.replace('<html>', '<html lang="pt-BR">');
});

// As crônicas usam um único <p> com quebras <br>.
// Converte cada <br> em fim/começo de parágrafo para que
// recuo de primeira linha e espaçamento funcionem via CSS.
hexo.extend.filter.register('after_post_render', (data) => {
  data.content = data.content.replace(/<br\s*\/?>/gi, '</p><p>');
  return data;
});
