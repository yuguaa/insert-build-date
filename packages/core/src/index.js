class InsertBuildDate {
	apply(compiler) {
		compiler.hooks.compilation.tap("Compilation", (compilation) => {
			compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(
				"htmlWebpackPluginAfterHtmlProcessing",
				(data) => {
					data.html = data.html.replace(
						"<head>",
						`<head><meta name="build-date" content="${new Date().toLocaleString()}">`
					);
				}
			);
		});
	}
}

module.exports = InsertBuildDate;
