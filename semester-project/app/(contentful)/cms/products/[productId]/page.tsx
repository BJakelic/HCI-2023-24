import Image from "next/image";
import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";

import {
  CommonNode,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github-dark.css";
//import { RichTextLinksFragment } from "@/specschecks/app/gql/graphql";
//import { HeroImage } from "../page";
import HeroImage from '@/app/(contentful)/cms/products/HeroImage';
import contentfulService from "@/lib/contentfulClient";
import { Key } from "react";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

// SOURCE: https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/
/*function renderOptions(links: RichTextLinksFragment["links"] | undefined) {
  if (!links) return;

  const entryMap = new Map();
  for (const entry of links.entries.block) {
    entryMap.set(entry?.sys.id, entry);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: CommonNode) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlockSection") {
          const highlightedCode = hljs.highlight(entry.content, {
            language: entry.language,
          }).value;

          return (
            <pre>
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
          );
        }
      },
    },
  };
}*/

interface CurrencySymbolMapping {
  [code: string]: string;
}

const currencySymbolMapping: CurrencySymbolMapping = {
  USD: "$",
  GBP: "£",
  EUR: "€",
};

type Params = {
  productId: string;
};

const ProductPage = async ({ params }: { params: Params }) => {
  const product = await contentfulService.getProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  function documentToHtmlString(json: any): string | TrustedHTML {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="container flex flex-col items-center gap-10 pt-8 pb-24">
      <h1 className="text-center mt-5 mb-5 font-tahoma font-bold text-brand-special-100 text-4xl">
        <u>{product?.name}</u>
      </h1>
      <div className="grid md:grid-cols-2 gap-4 w-3/5 relative">
        <HeroImage
          image={product?.image}
          productName={product.name}
          className="w-full md:h-[400px]"
        />
        <div className="flex flex-col gap-4 justify-between mb-20">
          <div className="flex flex-col">
            <div className="mb-2 font-tahoma text-lg text-brand-special-100 bg-brand-blue-200 p-2 rounded">{product.description}</div>
            <Button className="font-tahoma font-bold text-sm bg-white hover:bg-brand-special-300 border-2 border-brand-special-300 text-brand-special-300 hover:text-white rounded-full">+ Add to cart </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
