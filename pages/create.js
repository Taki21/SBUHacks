import Wallet from '../components/Wallet'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useWeb3React } from "@web3-react/core";
import CryptoJS from 'crypto-js'
import { useState, useEffect } from 'react'
import axios from 'axios'
import circularJSON from 'circular-json'

const Create = () => {

    const [pk, setPk] = useState('')
    const [enc, setEnc] = useState('')
    const [priv, setPriv] = useState('')
    const [dec, setDec] = useState('')

    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    useEffect(() => {
        
        //setEnc(CryptoJS.AES.encrypt(pk, "123456"))
        //setDec(CryptoJS.AES.decrypt(enc, "123456"))
        //let x = CryptoJS.Rabbit.encrypt(c, k)
        
        
    }, [])    

    async function createAPIKey() {
        let c = CryptoJS.SHA3(CryptoJS.lib.WordArray.random(64), {outputLength: 256}).toString()
        let k = CryptoJS.SHA3(CryptoJS.lib.WordArray.random(64), {outputLength: 384}).toString()
        setPriv(k)
        setPk(c.toString());
        let x = CryptoJS.AES.encrypt(c, k)
        setEnc(x)
        let y = CryptoJS.AES.decrypt(x, k)
        setDec(y.toString(CryptoJS.enc.Utf8))
        if(!active) return;
        
        await axios.post(`/api/create?owner=${account}&k=${x.toString()}`)
    }

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
                <div className='flex flex-col bg-[#080808] p-16 rounded-2xl text-white text-center'>
                    <h1 className='mb-8 text-3xl font-bold'>Generate your API Key</h1>
                    <h1 className='font-bold'>You must save this private key and keep it safe. Treat it like a password.</h1>
                    {"YOUR PRIVATE KEY: " + priv}<br/>
                    <button onClick={createAPIKey} className="bg-[#ffffff] mt-8 py-4 px-8 rounded-lg text-black">Create API Key</button>
                </div>
              </div>
            </div>
          </main>
        </div>
    )
}

export default Create
