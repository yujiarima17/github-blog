interface Size {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
	xxl: string;
}

const size: Size = {
	xs: "400px", // for small screen mobile
	sm: "700px", // for mobile screen
	md: "950px", // for tablets
	lg: "1280px", // for laptops
	xl: "1450px", // for desktop / monitors
	xxl: "1920px", // for big screens
};

export const device = {
	xs: `(max-width: ${size.xs})`,
	sm: `(max-width: ${size.sm})`,
	md: `(max-width: ${size.md})`,
	lg: `(max-width: ${size.lg})`,
	xl: `(max-width: ${size.xl})`,
	xxl: `(max-width: ${size.xxl})`,
};
