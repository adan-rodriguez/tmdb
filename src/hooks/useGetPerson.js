import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../services/people";

export function useGetPerson() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [biography, setBiography] = useState("");
  const [birthday, setBirthday] = useState("");
  const [deathday, setDeathday] = useState("");
  const [known_for, setKnowFor] = useState("");
  const [place_of_birth, setPlaceOfBirth] = useState("");
  const { personId } = useParams();

  useEffect(() => {
    const obtainPerson = async () => {
      const person = await getPerson(personId);
      setName(person.name);
      setImage(person.image);
      setBiography(person.biography);
      setBirthday(person.birthday);
      setDeathday(person.deathday);
      setKnowFor(person.known_for);
      setPlaceOfBirth(person.place_of_birth);
    };
    obtainPerson();
  }, []);

  return {
    name,
    image,
    biography,
    birthday,
    deathday,
    known_for,
    place_of_birth,
  };
}
