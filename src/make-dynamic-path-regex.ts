export default function makeDynamicPathRegex(dynamicPath: string): RegExp {
	return new RegExp(`^${dynamicPath.replace(/\/:[^\/]+/g, (match: string) => {
		if (/\?$/.test(match)) {
			return '(/([^\/]+))?';
		}
		return '/([^\/]+)';
	})}$`);
}
