import Footer from "../components/Footer";
import Header from "../components/Header";
import Tags from "../data/Tags.json"
import CardsData from "../data/CardsData.json"


export default function Search() {
  return(
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {Tags?.map((item, index) => (
              <p
                className="button" 
                key={index}
              > 
                {item.title}
              </p>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )

}
