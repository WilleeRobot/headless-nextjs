export type HeroQuery = {
  heroCollection: {
    items: {
      title: string
      subtitle: string
      preTitle: string
      callToActionsCollection: {
        items: {
          link: string
          label: string
        }[]
      }
    }[]
  }
}

export type LogoWallQuery = {
  assetCollection: {
    items: {
      width: number
      url: string
      title: string
      height: number
    }[]
  }
}

export type HeaderNavQuery = {
  navigationCollection: {
    items: {
      label: string
      linksCollection: {
        items: {
          label: string
          link: string
        }[]
      }
    }[]
  }
}

export type CustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string
      slug: string
      customer: {
        logo: {
          url: string
          width: string
          height: number
          title: number
        }
        name: string
      }
      body: {
        json: JSON
      }
    }[]
  }
}
