import React, { useState } from 'react';
import './AppMentor.css';

function AppMentor() {
  const [person, setPerson] = useState({
    name: '효은',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어 개발자'
    }
  })
  return (
    <>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>

      {/*내가 처리한 것*/}
      <button
        onClick={() => {
          const updatedName = prompt(`what's your mentor's name?`)
          const updatedObj = {
            ...person,
            mentor: {
              ...person.mentor,
              name: updatedName
            }
          }
          setPerson(updatedObj)
        }}
      >
        멘토 이름 바꾸기
      </button>

      {/*강의에서 처리한 것*/}
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`)
          setPerson((person) => ({
            ...person,
            mentor: {
              ...person.mentor,
              title
            }
          }))
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </>
  );
}

export default AppMentor;