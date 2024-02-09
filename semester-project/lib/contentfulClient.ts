import { TypeCategory } from "@/app/(contentful)/types/TypeCategory";
import {
  //TypeProductDetailItem,
  TypeProductListItem,
} from "@/app/(contentful)/types/TypeProduct";

const gqlAllProductsQuery = `query ProductList {
  productCollection {
    items {
      sys {
        id
      }
      name,
      description,
      image {
        url,
        title
      }
      categoryCollection {
        items {
          category
        }
      }
    }
  }
}`;

const getAllCategoriesQuery = `query {
  categoryCollection {
    items {
        category
      }
    }
  }`;

const gqlProductByIdQuery = `query getProductById($productId: String!) {
  product(id: $productId) {
    name,
    description,
    image {
      url,
      title
    }
    categoryCollection {
      items {
        category
      }
    }
  }
}
`;

interface ProductCollectionResponse {
  productCollection: {
    items: ProductItem[];
  };
}

interface ProductItem {
  product: any;
  categoryCollection: any;
  sys: {
    id: string;
  };
  name: string;
  description: string;
  image: {
    url: string;
    title: string;
  };
  categoriesCollection: {
    items: {
      label: TypeCategory["label"];
    }[];
  };
}

interface CategoryCollectionResponse {
  categoryCollection: {
    items: TypeCategory[];
  };
}

interface DetailProductResponse {
  product: {
    image: any;
    name: string;
    imagesCollection: {
      items: {
        url: string;
      }[];
    };
    richTextDescription: {
      json: any;
      links: any;
    };
    price: number;
    currencyCode: "CHF" | "EUR" | "GBP" | "USD";
    listed: boolean;
    categories: {
      label: TypeCategory["label"];
    }[];
    description: string;
    heroImage: {
      url: string;
    };
    categoriesCollection: {
      items: {
        label: TypeCategory["label"];
      }[];
    };
  };
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllProducts = async (): Promise<TypeProductListItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllProductsQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const body = (await response.json()) as {
      data: ProductCollectionResponse;
    };

    // Map the response to the format we want
    const products: TypeProductListItem[] =
      body.data.productCollection.items.map((item) => ({
        id: item.sys.id,
        name: item.name,
        description: item.description,
        image: item.image.url,
        category: item.categoryCollection.items.map((category: any) => category),
      }));

    return products;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAllCategories = async (): Promise<TypeCategory[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: getAllCategoriesQuery }),
    });
    const body = (await response.json()) as {
      data: CategoryCollectionResponse;
    };

    const categories: TypeCategory[] = body.data.categoryCollection.items.map(
      (item) => ({
        label: item.label,
      })
    );

    return categories;
  } catch (error) {
    console.log(error);

    return [];
  }
};


const getProductById = async (id: string): Promise<TypeProductListItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: gqlProductByIdQuery,
        variables: { productId: id },
      }),
    });

    const body = (await response.json()) as {
      data: ProductItem;
    };

    const responseProduct = body.data.product;

    const product: TypeProductListItem = {
      id: id,
      name: responseProduct.name,
      description: responseProduct.description,
      category: responseProduct.categoryCollection.items.map((c: any) => c),
      image: responseProduct.image.url,
    };

    return product;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const contentfulService = {
  getAllProducts,
  getAllCategories,
  getProductById,
};

export default contentfulService;