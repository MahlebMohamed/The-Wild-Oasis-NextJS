import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookeDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookeDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
