import Link from "next/link";
import getDictionary from "../../../lib/getDictionary";
import LangSwitcher from "./lang-switcher";
import ScrollBar from "../ui/scroll-bar";
import PaddinNavFot from "../layouts/padding-navfoter";

export default async function Navigation({local, isPost = false, color} : {local : string, isPost? : boolean, color? : "bg-indigo-500" | "bg-emerald-500"}){

    const dictionary = await getDictionary(local)

    return (
        <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md z-50">
            <PaddinNavFot>
                <div className="py-5 flex items-center justify-between">
                    <Link className="font-bold test-lg" href={`/${local}`} >{dictionary.navigation.links.explorer}</Link>
                    {/* Category Links */}
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-500">
                            <li>
                                <LangSwitcher local={local} />
                            </li>
                            <li>
                                <Link href={`/${local}/coding`}>{dictionary.navigation.links.coding}</Link>
                            </li>
                            <li>
                                <Link href={`/${local}/business`}>{dictionary.navigation.links.business}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddinNavFot>
            {
                isPost ? <ScrollBar color={color}/> : null
            }
        </div>
    )
}