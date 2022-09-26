import Link from "next/link";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";

function Sidebar() {

    const router = useRouter();
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function disconnect() {
        try {
            deactivate()
            localStorage.setItem('walletConnected', false)
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <div className="flex flex-col items-center justify-between w-1/6 min-h-screen py-2">
            <div className="flex self-start m-4">
                <img src="/logo.png" className="w-12" />
                <h1 className="self-center pl-4 pr-2 text-3xl font-black text-white font-Main">MeTX</h1>
            </div>
            
            <div className="flex flex-col self-start w-full px-4 text-black mb-[28rem] font-Main">
                <Link href="/">
                    <a className={router.pathname == '/' ? 'flex bg-gradient-to-r from-[#ffffff] to-[#dcdcdc] pl-2 py-2 rounded-lg w-full' : 'text-white flex pl-2 py-2'}><svg className="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M8.003,15c0-1.103,0.897-2,2-2h4c1.103,0,2,0.897,2,2v5h3.001l-0.001-8.586l-7-7l-7,7V20h3V15z"></path><path fill="none" d="M10.003 15H14.003V20H10.003z"></path><path d="M5.003,22h4h6h4c1.103,0,2-0.897,2-2v-9c0-0.265-0.105-0.52-0.293-0.707l-8-8c-0.391-0.391-1.023-0.391-1.414,0l-8,8 C3.108,10.48,3.003,10.735,3.003,11v9C3.003,21.103,3.9,22,5.003,22z M10.003,20v-5h4v5H10.003z M5.003,11.414l7-7l7,7L19.004,20 h-3.001v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5h-3V11.414z"></path></svg>Home</a>
                </Link>
                <Link href="/create" className="my-8">
                    <a className={router.pathname == '/create' ? 'flex bg-gradient-to-r from-[#ffffff] to-[#dcdcdc] pl-2 py-2 rounded-lg w-full my-8' : 'text-white flex my-8 pl-2 py-2'}><svg className="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></svg> Create</a>
                </Link>
                <Link href="https://github.com/Taki21/XDC-Hackathon/blob/main/GUIDE.md">
                    <a className="flex py-2 pl-2 text-white"><svg className="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>GitHub</a>
                </Link>
                <Link href="/faucet">
                    <a className={router.pathname == '/faucet' ? 'flex bg-gradient-to-r from-[#ffffff] to-[#dcdcdc] pl-2 py-2 rounded-lg w-full my-8' : 'text-white flex my-8 pl-2 py-2'}><svg className="mr-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM13 11h2.5L11 17.5V13H8.5L13 6.5V11z"></path></g></svg> Faucet</a>
                </Link>
            </div>

            <div className="flex self-start p-4">
                <button onClick={disconnect} className="text-black rounded-lg w-24 py-2 bg-[#ffffff] hover:bg-[#d0d0d0] transition-all justify-center">Logout</button>
            </div>
        </div>
    );
}

export default Sidebar