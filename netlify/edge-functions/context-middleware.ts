import {
    createEdgeContext,
    createUniformEdgeHandler,
  } from "../../lib/uniform/index.deno.js";
  import manifest from '../../lib/uniform/contextManifest.json' assert { type: 'json' };
  // @ts-ignore: deno imports failing next build
  import type { Context } from "netlify:edge";

  export default async (request: Request, netlifyContext: Context) => {
    const IGNORED_PATHS = /\/.*\.(ico|png|jpg|jpeg|svg|css|js|json)(?:\?.*|$)$/g;
  
    if (request.method.toUpperCase() !== "GET" || request.url.match(IGNORED_PATHS)) {
      return await netlifyContext.next({ sendConditionalRequest: true });
    }
  
    // this creates the context object that has controls how the personalization process works.
    const context = createEdgeContext({
      manifest,
      request,
    });
  
    // This code creates the component that makes a request
    // to the origin and executes any personalization instructions in the response.
    const originResponse = await netlifyContext.next();
    const handler = createUniformEdgeHandler();
  
    // This code uses the proxy edge handler to make a request to the 
    // origin and execute the personalization instructions in the response.
    const { processed, response } = await handler({
      context,
      request,
      response: originResponse,
    });
  
    if (!processed) {
      return response;
    }
  
    return new Response(response.body, {
      ...response,
      headers: {
        // ...response.headers, Symbol cannot be destructured
        'Cache-Control': 'no-store, must-revalidate',
        'Content-Type': 'text/html; charset=utf-8', // To apply automatic deno compression, more info https://deno.com/deploy/docs/compression
        Expires: '0',
      },
    });
  };