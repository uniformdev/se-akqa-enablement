import { ProjectMapClient } from "@uniformdev/project-map";
import getConfig from "next/config";

const {
  serverRuntimeConfig: { apiKey, apiHost, projectId },
} = getConfig();

export const projectMapClient = new ProjectMapClient({
  apiKey,
  apiHost,
  projectId,
});

//High level Projectmap definition
export async function getProjectMapDefinition(projectMapId: string) {
  const mapDefinition = await projectMapClient.getProjectMapDefinition({projectMapId});
  
  //console.log("Projectmap def", mapDefinition);
  return mapDefinition;
}


//Get tree with children as arrays
export async function getSubtree(projectMapId: string) {
  const tree = await projectMapClient.getSubtree({projectMapId});

  //console.log("Projectmap tree", JSON.stringify(tree, null, 2));
  return tree; 
}

//Flattened tree
export async function getNodes(projectMapId: string) {
  const {nodes} = await projectMapClient.getNodes({projectMapId});

  //console.log("Projectmap flattend tree nodes", nodes)
  return nodes;
}
