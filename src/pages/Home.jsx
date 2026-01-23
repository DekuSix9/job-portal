import LeftNav from "../components/LeftNav";
import MainNav from "../components/MainNav";
import RightNav from "../components/RightNav";

const Home = () => {
    return (
        <div>

            <main className=" max-w-11/12 mx-auto grid grid-cols-12 gap-8">
                {/* left-side */}
                <aside className=" col-span-3">
                  <LeftNav/>
                </aside>
                {/* middle */}
                <section className=" col-span-6">
                 <MainNav/>
                </section>
                {/* right side */}
                <aside className=" col-span-3">
                     <RightNav/>
                </aside>

            </main>
            
        </div>
    );
};

export default Home;