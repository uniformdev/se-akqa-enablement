import Link from "next/link";

export type HeroProps = {
  content: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: {
      src: string;
      alt: string;
    }
  }
};

 export function HeroCms(props: HeroProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: props?.content?.title }}
            />
            <p
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{ __html: props?.content?.description }}
            />
            {props?.content?.buttonText ? (
              <Link prefetch={false} href={props?.content ? props?.content?.buttonLink : "#"}>
                <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {props?.content?.buttonText}
                </button>
              </Link>
            ) : null}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {props?.content?.image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={props?.content?.image?.src}
                alt={props?.content?.image?.alt}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
