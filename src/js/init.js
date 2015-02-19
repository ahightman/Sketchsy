(function () {
  app.etsy = app.EtsyApi({ apiKey: 'jngc2dgbsqdqr7y7e2ng4kw0' });

  function processHash() {
    var hash = location.hash || '#';

    if (!app.router.run(hash.slice(1))) {
      app.notFound();
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();
})();
