import DestinationDetailsPage from "@/components/DestinationDetailsPage";

const Page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    cache: "no-store",
  });
  const destination = await res.json();

  return <DestinationDetailsPage destination={destination} />;
};

export default Page;
