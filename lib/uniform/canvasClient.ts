import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";
import runEnhancers from "./enhancers";
import getConfig from "next/config";
import { getNodes, getProjectMapDefinition, getSubtree } from "lib/projectMapClient";

const {
  serverRuntimeConfig: { apiKey, apiHost, projectId, projectMapId },
} = getConfig();

export const getState = (preview: boolean | undefined) =>
  process.env.NODE_ENV === "development" || preview
    ? CANVAS_DRAFT_STATE
    : CANVAS_PUBLISHED_STATE;

export const canvasClient = new CanvasClient({
  apiKey,
  apiHost,
  projectId,
});

export async function getCompositionByNodePath(slug: string, preview: boolean){
  const {composition} = await canvasClient.unstable_getCompositionByNodePath({
    projectMapNodePath: slug ? `/${slug}` : "/",
    state: getState(preview),
    projectMapId: projectMapId,
    unstable_resolveData: true});
  
  await runEnhancers(composition, { preview });  

  return composition;
}

export async function getCompositionBySlug(slug: string, preview: boolean) {
  const { composition } = await canvasClient.getCompositionBySlug({
    slug,
    state: getState(preview),
  });
  await runEnhancers(composition, { preview });
  return composition;
}

export async function getCompositionsForNavigation() {
  const nodes = await getNodes(projectMapId);
  return nodes.filter((node)=> node.path).map((node) => {
    return {title: node.name, url: node.path};
  });
}

export const getCompositionPaths = async () => {
  const pages = await canvasClient.getCompositionList({
    skipEnhance: true,
    state: getState(undefined),
  });

  return pages.compositions
    .filter((c) => c.composition._slug)
    .map((c) =>
      c.composition._slug?.startsWith("/")
        ? `${c.composition._slug}`
        : `/${c.composition._slug}`
    );
};
