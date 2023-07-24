import React, { useState } from 'react';
import './AppMentors.css';

function AppMentors() {
  const [person, setPerson] = useState({
    name: '효은',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어 개발자'
      },
      {
        name: '사라',
        title: '시니어 개발자'
      }
    ]
  })
  return (
    <>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는:
      </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <ul key={index}>
            <li>
              {mentor.name} ({mentor.title})
            </li>
          </ul>
        ))}
      </ul>

      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
          setPerson(person => ({
            ...person,
            mentors: person.mentors.map(mentor => {
              if (mentor.name === prev) {
                return {
                  ...mentor,
                  name: current
                }
              }
              return mentor
            })
          }))
        }}
      >
        멘토 이름 바꾸기
      </button>

      <button
        onClick={() => {
          const prev = prompt(`누구의 타이틀을 바꾸고 싶은가요?`)
          const current = prompt(`타이틀을 무엇으로 바꾸고 싶은가요?`)
          setPerson(person => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return {
                  ...mentor,
                  title: current
                }
              }
              return mentor
            })
          }))

        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </>
  );
}

export default AppMentors;