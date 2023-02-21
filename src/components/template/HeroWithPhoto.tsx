

import { twclsx } from '@/libs/twclsx'
export interface HeroProps {
  title: string
  description: string
  image: string
  imageAlt: string
  children?: React.ReactNode
}

const HeroWithPhoto: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <section className={twclsx('pb-10')}>
      {/* <div
        className={twclsx(
          'flex flex-col-reverse',
          'gap-4 mb-4 md:gap-0',
          'md:flex-row md:items-center md:justify-between'
        )}
      >
        <h1 className={twclsx('text-4xl md:text-5xl')}>{props.title}</h1>
        <figure className={twclsx('relative', 'w-20 h-20 md:w-24 md:h-24')}>
          
        </figure> 
      </div> */}
      {/* <p className={twclsx('text-justify')}>{props.description}</p> */}
      {/* <div className={twclsx('grid grid-cols-1 gap-4 flex-auto my-4 justify-items-center', 'md:grid-cols-6')}>
      <div className='justify-items-center'>
      <img className="h-26 mx-auto rounded-lg" src={props.image} alt={props.imageAlt} />
      
      </div>
      <p className={twclsx('col-span-5 text-justify')}>{props.description}
      
      </p>
      
      </div> */}
      <br></br>
            <div className="flex flex-col items-center -mt-20 pt-20">
                <img src={props.image} alt={props.imageAlt} title={props.imageAlt}  className="w-40 border-4 border-white rounded-full" />
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">Krunal Shah</p>
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>
                <p className="text-black-700">Senior Software Engineer at Clarion</p>
                <p className="text-sm text-black-500">Ahmedabad, India</p><br></br>
                <p className="text-black-500">{props.description}</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    {/* <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <span>Connect</span>
                    </button> */}
                    <a href='/static/Krunal_Shah_8YearDotNetDeveloper.pdf' download="Krunal_Shah_CV_FullStack_Developer" target='_blank' title='Krunal_Shah_8YearDotNetDeveloper.pdf'>
                    <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" clipRule="evenodd"></path>
                        </svg>
                        <span>Download CV</span>
                    </button>
                    </a>
                </div>
            </div>


      {props.children}
    </section>
  )
}

export default HeroWithPhoto
