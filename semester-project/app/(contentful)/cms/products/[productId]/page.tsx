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
import { HeroImage } from "../page";
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
    <main className="container flex flex-col items-center gap-10 mb-10">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        {product?.name}
      </h1>
      <div className="grid grid-cols-2 gap-4 w-3/4 relative">
        <HeroImage
          image={product?.image}
          productName={product.name}
          className="w-full h-[400px]"
        />
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col">
            <div className="mb-2">{product.description}</div>
            <Button variant="emph">+ Add to cart </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;