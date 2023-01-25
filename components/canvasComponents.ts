// IMPORTANT: all Canvas managed components have to be imported here in order to be discovered by the <Slot /> and rendered:

import {
	ComponentProps,
	DefaultNotImplementedComponent,
	registerUniformComponent,
} from "@uniformdev/canvas-react";

import Hero from "./Hero";
import Footer from "./Footer";
import { HeroCms } from "./HeroCms";
import MyComponent from "./MyComponent";

const components: UniformComponent[] = [
	{
		type: [
			"hero",
		],
		component: Hero,
	},
	{
		type: "heroCms",
		component: HeroCms,
	},
    {
        type: "mycomponent",
        component: MyComponent,
    },
	{
		type: "test",
		component:DefaultNotImplementedComponent,
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