export default function makeDynamicPathRegex(dynamicPath) {
	return new RegExp(
		`^${dynamicPath.replace(/\/:[^\/]+/g, (match) => {
			if (/\?$/.test(match)) {
				return "(/([^\/]+))?";
			}
			return "/([^\/]+)";
		})}$`,
	);
}
