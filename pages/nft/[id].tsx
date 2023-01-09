import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { disconnect } from 'process';


function NFTDropPage() {
      // Auth
      const connectWithMetaMask = useMetamask()
      const address = useAddress()
      const disConnect = useDisconnect()

    console.log(address)










  return (









    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10 '>

        <div className=' lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
        
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
        <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>

        
            <img className='w-44 rounded-xl object-cover lg:h-66 lg:w-52' src="https://links.papareact.com/8sg" alt=""></img>
        </div> 

        <div className='text-center p-5 space-y-2'>

        <h1 className='text-4xl font-bold text-white'>

        PapaFam Apes

        </h1>
        <h2 className='text-xl text-gray-300'>
         A collection of Papafam Apes who live and breathe react. 

        </h2>

        </div>



        </div>




        </div>
        
         <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        
          {/*  Header  */}

            <header className='flex items-center justify-between'>
            <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>

              The{' '}
              <span className='font-extrabold underline decoration-pink-600/50'>
               PAPAFAM  

              </span>{' '}
              
              
               NFT Market Place
            </h1>


              <button onClick={()=> (address ? disConnect() : connectWithMetaMask())  } className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                
                {address ? 'Sign Out' : 'Sign in'}
                
                </button>
            </header>

              <hr className='my-2 border'/>

              {address &&  (
                <p className='text-center text-sm text-rose-400'>You are logged in with wallet {address.substring(0,5)}...{address.substring(address.length-5)}</p>
              )}



            <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center 
            lg:space-y-0 lg:justify-center'>

              <img className='w-80 object-cover pb-10 lg:h-40 ' src='https://links.papareact.com/bdy' alt=''></img>

            <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'> The PapaFam Ape Coding Club | NFT Drop</h1>
            <p className='pt-4 text-xl text-green-500'> 13/ 21 NFT's claimed.</p>

            </div>



               {/*  Mint Button  */}

          <button className='h-16 bg-red-600 
           text-white rounded-full w-full font-bold'>

          Mint NFT (0.01 ETH)

          </button>

       
        </div>
        
        
        
        
        
        
        </div>
  )
}

export default NFTDropPage