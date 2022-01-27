import React from 'react';
import Headeritem from './Headeritem';
import Image from 'next/image';
import { HomeIcon, LightningBoltIcon,BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon   } from '@heroicons/react/outline'

function Header() {
  return ( <header className='flex flex-col sm-flex:row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <h5 className='text-yellow-300 opacity-120  font-extrabold flex flex-nowrap'>ANESHWAR YADU</h5>
       <Headeritem title="HOME" Icon={HomeIcon}/>
       <Headeritem title="TRENDING" Icon={LightningBoltIcon}/>
       <Headeritem title="VERIFIED" Icon={BadgeCheckIcon}/>
       <Headeritem title="COLLECTIONS" Icon={CollectionIcon}/>
       <Headeritem title="SEARCH" Icon={SearchIcon}/>
       <Headeritem title="ACCOUNT" Icon={UserIcon}/>
       <Image className="object-contain hover:cursor-pointer opacity-90 hover:opacity-100 "
      src="https://links.papareact.com/ua6"
      width={100}
      height={80} />
          
 </div>
       </header>
     
     


 
  )
}

export default Header;