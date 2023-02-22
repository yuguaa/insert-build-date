import { Compiler } from "webpack";

class InsertBuildDate {
	apply(compiler: Compiler) {
		compiler.hooks.compilation.tap("Compilation", (compilation) => {
			(compilation.hooks as any).htmlWebpackPluginAfterHtmlProcessing.tap(
				"htmlWebpackPluginAfterHtmlProcessing",
				(data: { html: string }) => {
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
