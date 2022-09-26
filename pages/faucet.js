import Wallet from '../components/Wallet'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Faucet = () => {
    return (
        <div className="font-Main">
          <Head>
            <title>Gasless Transactions</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className="flex">
            <Sidebar/>
            <div className='flex flex-col w-full mx-8 mt-8'>
              <div className='flex items-center justify-between w-full text-4xl font-bold text-white it'>
                <h1>Gasless Transactions</h1>
                <Wallet/>
              </div>
              <div className='flex flex-col items-center justify-center mt-16 text-[#222222] h-4/5'>
                <Link href='/create'>
                  <a className='flex flex-col items-center content-center justify-center'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"></path></svg>
                    <h1 className='text-[#8a8a8a] mt-4'>Create your own API Key to start using gasless transactions!</h1>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
    )
}

export default Faucet
