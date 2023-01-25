import { Asset } from "contentful";
import { ComponentInstance } from '@uniformdev/canvas';

export const contentfulModelConverter = ({ component, parameter }: { component: ComponentInstance; parameter: any }) => {

  //adjust component type to match - adjust mapping capabilities to match
  if (component.type === 'HeroContentful') {   

    const returnValue = {
      title: parameter?.value?.fields?.title || '', 
      description: parameter?.value?.fields?.description || '', 
      buttonText: parameter?.value?.fields?.buttonText || '', 
      buttonLink: parameter?.value?.fields?.buttonLinkSlug || '', 
      image: transformContentfulImage(parameter?.value?.fields?.image) || '',
    };

    return returnValue;
  }

  //Just return everything
  return parameter?.value;
}

function transformContentfulImage(imageField: Asset) {
  let imageUrl = imageField?.fields?.file?.url;
  // Contentful image urls typically start with a double whack
  if (imageUrl.startsWith("//")) {
    imageUrl = imageUrl.replace("//", "https://");
  }

  const { image } = imageField?.fields?.file?.details || {};
  if (image?.width && image?.height) {
    return {
      src: imageUrl,
      alt: imageField?.fields?.title,
      width: image.width,
      height: image.height,
    };
  }

  return {
    src: imageUrl,
    alt: imageField?.fields?.title,
  };
}
