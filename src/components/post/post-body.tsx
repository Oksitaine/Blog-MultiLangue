import parse, { Element } from 'html-react-parser'
import Image from 'next/image'

interface PostBodyProps {
    body: string
}

export default function PostBody({body} : PostBodyProps){

    const option = {
        replace: (domNode : any) => {
            if (domNode instanceof Element && domNode.attribs){
                if(domNode.name === 'img'){
                    const {src, alt} = domNode.attribs
                    return <Image 
                        className='object-cover object-center w-full my-3 rounded-md h-auto max-h-[300px] md:max-h-[500px]'
                        src={src} 
                        alt={alt}
                        width={1280}
                        height={620} 
                    />
                }
            }
        }
    }

    const getParsedHTML = (body : string) => {
        return parse(body, option)
    }

    return (
        <div className='rich-text'>
            {getParsedHTML(body)}
        </div>
    )
}