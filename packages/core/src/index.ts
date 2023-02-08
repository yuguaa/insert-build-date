import  { Compiler } from "webpack";


class InsertBuildDate {
	apply(compiler: Compiler) {
		compiler.hooks.compilation.tap("InsertBuildDate", (compilation) => {
			(compilation.hooks as any).htmlWebpackPluginAfterHtmlProcessing.tap(
				"InsertBuildDate",
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

export default InsertBuildDate;
