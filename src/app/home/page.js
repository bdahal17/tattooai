import Image from 'next/image'
import Search from "../components/Search";
import Banner from "../components/Banner"
import Dashboard from "../components/Dashboard"
const Home = () => {
    return (
       <div>
           <Image
               src="/imagebg2.png"
               alt="main bg"
               fill={true}
           />
           <div className="z-1 text-black text-9xl relative bg-transparent/50 h-dvh flex flex-col">
                <Search/>
               <Banner/>
               <Dashboard/>
           </div>

       </div>
    )
}
export default Home;