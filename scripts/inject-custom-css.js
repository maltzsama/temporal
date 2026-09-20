hexo.extend.injector.register('head_end', () => {
  return `<link rel="stylesheet" href="${hexo.config.root}css/custom.css">`;
});

hexo.extend.filter.register('after_render:html', (html) => {
  return html.replace('<html>', '<html lang="pt-BR">');
});
