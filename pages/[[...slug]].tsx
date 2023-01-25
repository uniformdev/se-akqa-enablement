import { GetStaticPropsContext } from "next";
import PageComposition from "@/components/PageComposition";
import {
  getCompositionByNodePath,
  getCompositionPaths,
  getCompositionsForNavigation,
} from "lib/uniform/canvasClient";
import runEnhancers from "lib/uniform/enhancers";
const CanvasPage = (props) => PageComposition(props);

export default CanvasPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context?.params || {};
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const { preview } = context;
    
  const composition  = await getCompositionByNodePath(slugString, preview);
  const navLinks = await getCompositionsForNavigation();

  return {
    props: {
      composition,
      navLinks,
      preview: preview ?? false,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCompositionPaths();
  return { paths, fallback: true };
}
