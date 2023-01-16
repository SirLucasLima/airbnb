import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import SearchData from "../data/SearchData.json"
import TagsData from "../data/TagsData.json"
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

export default function Search() {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');
  const range = `from ${formattedStartDate} to ${formattedEndDate}`;

  return(
    <div>
      <Header palceholder={`${location} | ${range} | ${noOfGuests}`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {TagsData?.map((item, index) => (
              <p
                className="button" 
                key={index}
              > 
                {item.title}
              </p>
            ))}
          </div>

          <div className="flex flex-col">
            {SearchData?.map((item, index) => (
              <InfoCard 
                key={index}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600]">
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  )

}
