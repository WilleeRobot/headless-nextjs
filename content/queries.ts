import { HeroQuery, LogoWallQuery } from "@/types"
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
