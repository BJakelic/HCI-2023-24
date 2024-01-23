"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { type } from "os";

interface StudentProps {
  id: number;
  name: string;
  lastName: string;
  imgSrc: string;
}

const studentsConstArray = [
  {
    id: 1,
    name: "Stipe",
    lastName: "Matić",
    imgSrc: "https://unsplash.com/photos/MTZTGvDsHFY/download?force=true&w=500",
  },
  {
    id: 2,
    name: "Ana",
    lastName: "Jurić",
    imgSrc: "https://unsplash.com/photos/rDEOVtE7vOs/download?force=true&w=500",
  },
];

const Student: FC<StudentProps> = ({ name, lastName, imgSrc }) => {
  return (
    <li className="flex relative w-max items-center bg-brand-blue-100 mt-2 pt-0.5 pb-0.5 pl-2 pr-2 rounded-xl">
      <div className="w-[50px] h-[50px] relative">
        <Image
          src={imgSrc}
          alt="profile image"
          fill={true}
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <section className="mr-2 mt-5 mb-5 flex-row justify-start flex items-center">
        <p className="text-lg text-white font-tahoma font-semibold pl-2">{name} {lastName}</p>
      </section>
    </li>
  );
};

type State = {
  firstName: string;
  lastName: string;
  students: StudentProps[];
  shouldHideStudents: boolean;
};

const StateDemo: FC = () => {
  const [state, setState] = useState<State>({
    firstName: "",
    lastName: "",
    students: studentsConstArray,
    shouldHideStudents: false,
  });

  const handleToggleClick = () => {
    setState((state) => ({
      ...state,
      shouldHideStudents: !state.shouldHideStudents,
    }));
  };

  const handleAddStudentClick = () => {
    if (state.firstName === "" || state.lastName === "") return;

    const newStudent = {
      id: state.students.length + 1,
      name: state.firstName,
      lastName: state.lastName,
      imgSrc: `https://source.unsplash.com/500x500?couple-selfie&sig=${
        state.students.length + 1
      }`,
    };

    setState((state) => ({
      ...state,
      students: [...state.students, newStudent],
    }));
  };

  const [filterValue, setFilterValue] = useState("");
  const [showShowClearButton, setShowClearButton] = useState(false);
  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setFilterValue(value);
    if (value !== "") {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  };
  const handleClearFilter = () => {
    setFilterValue("");
    setShowClearButton(false);
  };

  const students =
    filterValue == ""
      ? state.students
      : state.students.filter((student) => {
          return (
            student.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            student.lastName.toLowerCase().includes(filterValue.toLowerCase())
          );
        });

  return (
    <main className="py-8">
      <h1 className="text-center mt-5 mb-5 font-tahoma font-bold text-brand-special-100 text-4xl">
        Join our community!
      </h1>
      {state.shouldHideStudents ? (
        <p className="text-center">No active users at the moment... 😴</p>
      ) : (
        <ul className="flex flex-col items-center justify-around">
          {students.map((el) => (
            <Student key={el.id} {...el} />
          ))}
        </ul>
      )}
      <section className="flex flex-col w-64 justify-center items-center my-0 mx-auto border-gray-500">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-brand-special-100 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brand-blue-100 mt-4"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setState((state) => ({ ...state, firstName: e.target.value }))
          }
        />
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-brand-special-100 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brand-blue-100 mt-4"
          type="text"
          placeholder="Last name"
          onChange={(e) =>
            setState((state) => ({ ...state, lastName: e.target.value }))
          }
        />
        <button
          onClick={handleAddStudentClick}
          className="my-5 font-tahoma text-sm font-bold px-5 py-3 cursor-pointer rounded-xl text-brand-special-100 bg-brand-special-300 hover:bg-brand-orange-800 hover:text-white"
        >
          LOG IN
        </button>
      </section>
      <button
        onClick={handleToggleClick}
        className="block mx-auto font-tahoma text-sm font-bold px-5 py-3 cursor-pointer rounded-xl text-brand-special-100 bg-brand-blue-200 hover:text-white hover:bg-brand-blue-300"
      >
        TOGGLE
      </button>
      <input
        value={filterValue}
        onChange={handleFilterChange}
        className="mx-auto block my-4 appearance-none bg-gray-200 text-gray-700 border-2 border-brand-special-100 rounded-xl py-3 px-4 focus:outline-none focus:white focus:border-brand-blue-100 mt-4"
        type="text"
        placeholder="Filter input"
      />
      <button
        onClick={handleClearFilter}
        className={`mx-auto block rounded-md border-2 border-red-400 text-red-400 py-0.5 px-4 hover:bg-red-400 hover:text-white hover:border-white ${
          showShowClearButton ? "visible" : "invisible"
        }`}
      >
        CLEAR
      </button>
    </main>
  );
};

export default StateDemo;