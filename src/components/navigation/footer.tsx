import Link from "next/link";
import siteConfig from "../../../config/site";
import PaddinContainer from "../layouts/padding-container";
import SocialLink from "../elements/social-link";
import { socialMedia } from "../../../DUMMY_DATA";
import { SocialMedia } from "../../../types/collextion";
import getDictionary from "../../../lib/getDictionary";

export default async function Footer({local} : {local : string}) {

    const dictionary = await getDictionary(local)

    return <div className="py-8 border-t mt-10">
        <PaddinContainer>
            <div>
                <h2 className="text-3xl font-bold">
                    {siteConfig.siteName}
                </h2>
                <p className="max-w-md mt-2 test-lg text-neutral-500">
                    {dictionary.footer.description}
                </p>
            </div>
            <div className="flex flex-wrap justify-between gap-4 mt-6" >
                <div>
                    <div className="font-medium text-lg">#IndieHacker</div>
                    <div>{dictionary.footer.sociallink}</div>
                    <div className="flex items-center gap-3 mt-2 text-neutral-600">
                        {socialMedia.map((social : SocialMedia) => {
                            return <SocialLink key={social.socialname} link={social.link} socialmedia={social.socialname} size={18} />
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-sm text-neutral-400">{dictionary.footer.currenltyAtText}</div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md" >
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        {siteConfig.currentAt}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
                <div className="text-sm text-neutral-400">
                    {dictionary.footer.rightsText} {new Date().getFullYear()}
                </div>
                <div className="text-sm" >
                    {dictionary.footer.creatorText} <Link href="https://twitter.com/Azdinmediri">@Azdinmediri</Link>
                </div>
            </div>
        </PaddinContainer>
    </div>
}