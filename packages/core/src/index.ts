class InsertBuildDate {
  apply(compiler) {
    compiler.hooks.compilation.tap('InsertBuildDate', compilation => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(
        'InsertBuildDate',
        data => {
          data.html = data.html.replace(
            '<head>',
            `<head><meta name="build-date" content="${new Date().toLocaleString()}">`
          );
        }
      );
    });
  }
}

export default InsertBuildDate

