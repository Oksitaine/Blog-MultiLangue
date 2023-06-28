export interface SiteConfig {
    siteName : string,
    description : string,
    currentAt : string,
    socialLinks : {
        twitter : string,
        github : string,
        linkedin : string
    }
}

const siteConfig: SiteConfig = {
    siteName: "EL MEDIRI Azdin",
    description: 
        "AI, mathematics, web... everything is in this blog",
    currentAt: "France",
    socialLinks : {
        twitter : "https://twitter.com/Azdinmediri",
        github : "https://github.com/WGlint",
        linkedin : "https://www.linkedin.com/in/azdin-el-mediri-447109262/"
    }
}

export default siteConfig