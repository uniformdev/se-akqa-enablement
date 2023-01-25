import { compose, enhance, EnhancerBuilder } from "@uniformdev/canvas";
import getConfig from "next/config";

import { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { contentfulEnhancer } from "../enhancers/contentful/contentfulEnhancer";
import { contentfulModelConverter } from "../enhancers/contentful/contentfulModelConverter";

import { CANVAS_CONTENTSTACK_PARAMETER_TYPES } from "@uniformdev/canvas-contentstack";
import { contentstackEnhancer } from "../enhancers/contentstack/contentstackEnhancer";
import { contentStackModelConverter } from "../enhancers/contentstack/contentstackModelConverter";

const { serverRuntimeConfig } = getConfig();
const {
  contentfulSpaceId,
  contentfulDeliveryToken,
  contentfulEnvironment,
  contentstackApiKey,
  contentstackDeliveryToken,
  contentstackEnvironment,
  contentstackRegion,
} = serverRuntimeConfig;

const contentfulConfigured: boolean =
  contentfulSpaceId !== undefined && contentfulDeliveryToken !== undefined && contentfulEnvironment !== undefined;

const contentstackConfigured: boolean = 
  contentstackApiKey !== undefined && contentstackDeliveryToken !== undefined && contentstackEnvironment !== undefined && contentstackRegion !== undefined;

export const enhancers = new EnhancerBuilder();

if (contentfulConfigured) {
  console.log("Registered Contentful Enhancer");
  enhancers.parameterType(CANVAS_CONTENTFUL_PARAMETER_TYPES, compose(contentfulEnhancer(), contentfulModelConverter))
}

if (contentstackConfigured) {
  console.log("Registered Contentstack Enhancer");
  enhancers.parameterType(CANVAS_CONTENTSTACK_PARAMETER_TYPES, compose(contentstackEnhancer(), contentStackModelConverter))
}

enhancers.parameter((e) => {
  if (typeof e.parameter.value === "string") {
    return e.parameter.value.replace(/personalization/gi, "p13n");
  }
});

export default async function runEnhancers(composition, context) {

  //TODO: uncomment and bring your desired enhancers here
  await enhance({
    composition,
    enhancers: enhancers,
    context,
  });
}