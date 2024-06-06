"use server";
const ARTICLE_GRAPHQL_FIELDS = `
      sys {
        id
      }
      thumbnail {
        url
      }
      title
      date
      location
      imagesCollection {
      	items {
          title
          url
        }
      }
      details {
        json
      }
      description {
        json
      }
      slug
`;
const CHARACTERISTICS_GRAPHQL_FIELDS = `
      icon {
        url
      }
      title
      subtitle
      information {
        slug
      }
`;
const INFORMATION_GRAPHQL_FIELDS = `
      sys {
        id
      }
      background {
        url
      }
      title
      description {
        json
      }
      slug
`;
const DESCRIPTION_GRAPHQL_FIELDS = `
      description {
        json
      }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}
export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractArticleEntries(entry)[0];
}

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}
function extractDescriptionEntries(fetchResponse) {
  return fetchResponse?.data?.informationCollection?.items;
}

function extractInformationEntries(fetchResponse) {
  return fetchResponse?.data?.characteristicsPageCollection?.items;
}

export async function getAllArticles(
  limit = 6,
  skip = 0,
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        postCollection(where:{slug_exists: true}, skip: ${skip}, order: date_DESC, limit: ${limit}, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}
export async function getRecommendedArticles(
  limit = 6,
  except = ""
) {
  const articles = await fetchGraphQL(
    `query {
        postCollection(where:{slug_exists: true, slug_not: "${except}"}, order: date_DESC, limit: ${limit},

        ) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    false
  )
  return extractArticleEntries(articles);
}

export async function getDescription(slug) {
  const description = await fetchGraphQL(
    `query {
        informationCollection(where:{slug: "${slug}"}, limit: 1, preview: false) {
          items {
            ${DESCRIPTION_GRAPHQL_FIELDS}
          }
        }
      }`,
    false
  );
  return extractDescriptionEntries(description)[0];
}
export async function getArticle(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        postCollection(where:{slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}

export async function getInformation(
  slug,
  isDraftMode = false
) {
  const information = await fetchGraphQL(
    `query {
        characteristicsPageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${INFORMATION_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractInformationEntries(information)[0];
}
export async function getCharacteristics() {
  const characteristics = await fetchGraphQL(
    `query {
        caracteristicaCollection(order: sys_firstPublishedAt_ASC, limit: 4, preview: false) {
          items {
            ${CHARACTERISTICS_GRAPHQL_FIELDS}
        }
      }

  }`,
    false
  );
  return characteristics?.data?.caracteristicaCollection?.items;
}