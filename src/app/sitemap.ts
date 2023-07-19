import { MetadataRoute } from "next"
import i83n from "../../i83n.config"
import directus from "../../lib/directus"

const alllang = i83n.locales 

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL as string

  // All landing page link
  const LandingLink = alllang.map((lang : string) : { url : string, lastModified : string | Date }[] => {
    return [
      {
        url : `${base}/${lang}`,
        lastModified : new Date()
      }
    ]
  })

  // All post page link
  const posts = await directus.items("post").readByQuery({
    fields: ["slug"]
  })

  const PostLink = posts?.data?.map((post : any) : { url : string, lastModified : string | Date }[] => {
    return [
      {
        url : `${base}/en/post/${post.slug}`,
        lastModified : new Date()
      },
      {
        url : `${base}/fr/post/${post.slug}`,
        lastModified : new Date()
      },
      {
        url : `${base}/de/post/${post.slug}`,
        lastModified : new Date()
      }
    ]
  })

  //All category page link
  const category = await directus.items("category").readByQuery({
    fields: ["slug"]
  })

  const CategoriesLink = category?.data?.map((categories : any) : { url : string, lastModified : string | Date }[] => {
    return [
      {
        url : `${base}/en/${categories.slug}`,
        lastModified : new Date()
      },
      {
        url : `${base}/fr/${categories.slug}`,
        lastModified : new Date()
      },
      {
        url : `${base}/de/${categories.slug}`,
        lastModified : new Date()
      }
    ]
  })

  const AllLink = LandingLink?.concat(PostLink ?? []).concat(CategoriesLink ?? []).flat()

  return [
    ...AllLink
  ]
}