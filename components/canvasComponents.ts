// IMPORTANT: all Canvas managed components have to be imported here in order to be discovered by the <Slot /> and rendered:

import {
	ComponentProps,
	DefaultNotImplementedComponent,
	registerUniformComponent,
} from "@uniformdev/canvas-react";

import Hero from "./Hero";
import Test from "./Test";
import Footer from "./Footer";

const components: UniformComponent[] = [
	{
		type: [
			"hero",
		],
		component: Hero,
	},
    {
        type: "test",
        component: Test,
    },
	// {
	// 	type: "navigation",
	// 	component: DefaultNotImplementedComponent,
	// },
	{
		type: "footer",
		component: Footer,
	}
];

components.forEach((component) => {
	registerUniformComponent(component);
});

type UniformComponent = {
	type: string | string[];
	component: React.ComponentType<ComponentProps<any>>;
};