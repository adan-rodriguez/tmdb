import { Card } from "../components/Card";
import { useGetPeople } from "../hooks/useGetPeople";

export function PopularPeoplePage() {
  const { people } = useGetPeople();

  return (
    <div className="p-5">
      <h1>Popular People</h1>
      <div className="grid grid-cols-custom">
        {people.map((person) => (
          <Card key={person.id} {...person} linkCard="people" />
        ))}
      </div>
    </div>
  );
}
