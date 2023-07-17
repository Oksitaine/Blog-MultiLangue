"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from 'next/navigation'

type ActuFlag = {
    lang: string,
    flag: string
}

const Flag : ActuFlag[] = [
    {
        lang: "fr",
        flag: "🇫🇷 FR"
    },
    {
        lang: "en",
        flag: "🇺🇸 EN"
    },
    {
        lang: "de",
        flag: "🇩🇪 DE"
    }
]

export default function LangSwitcher({ local }: { local: string }) {
    const router = useRouter()
    const pathname = usePathname()
    let currentpath : string

    if(pathname === "/" || pathname === ""){
        currentpath = ""
    } else {
        const segments = pathname.split("/")
        segments[1] = ""
        currentpath = segments.join("/")
    }

    const currentLang = Flag.find((ActuFlag : ActuFlag) => ActuFlag.lang === local)?.flag

    const Dropdown1 = {
        Flagicon : Flag.find((ActuFlag : ActuFlag) => ActuFlag.lang !== local)?.flag,
        Langlink : Flag.find((ActuFlag : ActuFlag) => ActuFlag.lang !== local)?.lang
    }

    const Dropdown2 = {
        Flagicon : Flag.find((ActuFlag : ActuFlag) => (ActuFlag.lang !== local) && (ActuFlag.lang !== Dropdown1.Langlink))?.flag,
        Langlink : Flag.find((ActuFlag : ActuFlag) => (ActuFlag.lang !== local) && (ActuFlag.lang !== Dropdown1.Langlink))?.lang
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>{currentLang}</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => router.push(`/${Dropdown1.Langlink}/${currentpath}`)}>{Dropdown1.Flagicon}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/${Dropdown2.Langlink}/${currentpath}`)}>{Dropdown2.Flagicon}</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}