import React from "react";
import Head from "next/head";
import getConfig from "next/config";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  Composition,
  Slot,
  useContextualEditing,
  createApiEnhancer,
} from "@uniformdev/canvas-react";
import { ToggleEmbeddedContextDevTools } from "@uniformdev/context-devtools";
import Navigation, { NavLink } from "./Navigation";
import Footer from "./Footer";

// IMPORTANT: importing all components registered in Canvas
import "./canvasComponents";

const { serverRuntimeConfig } = getConfig();
const { projectId, apiKey, apiHost } = serverRuntimeConfig;

export default function PageComposition({
  preview,
  composition: initialCompositionValue,
  navLinks,
}: {
  preview: boolean;
  composition: RootComponentInstance;
  navLinks: Array<NavLink>;
}) {

  const { composition } = useContextualEditing({
    initialCompositionValue,
    enhance: createApiEnhancer({
      apiUrl: "/api/preview",
    }),
  });
  const { metaTitle } = composition?.parameters || {};

  return (
    <>
      <Head>
        <title>{metaTitle?.value as string}</title>
      </Head>
      <>
        <Navigation navLinks={navLinks} />
        <Composition data={composition}>
          <Slot name="header" />
          <Slot name="content" />
          <Slot name="footer" />
        </Composition>
        <ToggleEmbeddedContextDevTools
          initialSettings={{
            apiHost: apiHost,
            apiKey: apiKey,
            projectId: projectId,
          }}
        />
        {/* <Footer /> */}
      </>
    </>
  );
}
