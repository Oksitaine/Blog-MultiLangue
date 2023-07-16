import Link from "next/link";
import PaddinContainer from "../layouts/padding-container";
import getDictionary from "../../../lib/getDictionary";

export default async function Navigation({local} : {local : string}){

    const dictionary = await getDictionary(local)

    return (
        <div className="border-b sticky top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md z-50">
            <PaddinContainer>
                <div className="py-5 flex items-center justify-between">
                    <Link className="font-bold test-lg" href={`/${local}`} >{dictionary.navigation.links.explorer}</Link>
                    {/* Category Links */}
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-500">
                            <li>
                                <Link href={`/${local}/coding`}>{dictionary.navigation.links.coding}</Link>
                            </li>
                            <li>
                                <Link href={`/${local}/business`}>{dictionary.navigation.links.business}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddinContainer>
        </div>
    )
}