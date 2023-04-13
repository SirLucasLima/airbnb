import {SearchResults} from "../data/SearchResults"
import {TagsData} from "../data/TagsData"
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

export default function Search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          {TagsData?.map((item, index) => (
            <p className="button" key={index}>
              {item.title}
            </p>
          ))}
        </div>

          <div className="flex flex-col">
              {SearchResults.map(
                  ({ img, description, lat, location, long, price, star, title, total,
                  }) => (
                      <InfoCard
                          key={img}
                          img={img}
                          description={description}
                          lat={lat}
                          location={location}
                          long={long}
                          price={price}
                          star={star}
                          title={title}
                          total={total}
                      />
                  )
              )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={SearchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}