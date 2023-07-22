import { ReactNode } from "react"

const PaddinContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className='pt-10 min-h-[calc(100vh-300px)]'>
      <div className="px-8 w-full max-w-7xl mx-auto" >
        {children}
      </div>
    </div>
  )
}

export default PaddinContainer