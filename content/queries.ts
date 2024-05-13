import "server-only"
import {
  CustomerPostQuery,
  HeaderNavQuery,
  HeroQuery,
  LogoWallQuery,
} from "@/types"
import { contentGraphQLFetcher } from "./fetch"

export const getContentForLogoWall = async () => {
  const query = `#graphql
    query AssetCollection($where: AssetFilter) {
      assetCollection(where: $where) {
        items {
          width
          url
          title
          height
        }
      }
    }
  `

  const data = await contentGraphQLFetcher<LogoWallQuery>({
    query,
    variables: {
      where: {
        title_contains: "client",
      },
    },
  })

  if (!data) {
    throw new Error("Failed to fetch API")
  }

  return data
}

export const getHeroContent = async () => {
  const query = `#graphql
        query HeroCollection {
            heroCollection {
                items {
                title
                subtitle
                preTitle
                callToActionsCollection {
                    items {
                    link
                    label
                    }
                }
                }
            }
        }
    `

  const data = await contentGraphQLFetcher<HeroQuery>({ query })

  if (!data) {
    throw new Error("Failed to fetch API")
  }

  return data
}

export const getContentForHeaderNav = async () => {
  const query = `#graphql
    query NavigationCollection($where: NavigationFilter) {
      navigationCollection(where: $where) {
        items {
          label
          linksCollection {
            items {
              label
              link
            }
          }
        }
      }
    }
  `

  const data = await contentGraphQLFetcher<HeaderNavQuery>({
    query,
    variables: {
      where: {
        label: "Header",
      },
    },
  })

  if (!data) {
    throw new Error("Failed to fetch API")
  }

  return data
}

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
   query Query($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          logo {
            url
            width
            height
            title
          }
          name
        }
        body {
          json
        }
      }
    }
  }
  `

  const data = await contentGraphQLFetcher<CustomerPostQuery>({
    query,
    variables: {
      where: {
        slug,
      },
    },
  })

  if (!data) {
    throw new Error("Failed to fetch API")
  }

  return data
}

export const getSlugsForPosts = async () => {
  const query = `#graphql
      {
        customerPostCollection {
        items {
            slug        
        }
        }
      }
    `
  const data = await contentGraphQLFetcher<{
    customerPostCollection: {
      items: { slug: string }[]
    }
  }>({ query })

  if (!data) {
    throw new Error("Failed to fetch API")
  }

  return data
}
