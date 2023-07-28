import React, { useReducer } from 'react';
import './AppMentors.css';
import personReducer from './reducer/person-reducer'

function AppMentors() {
  const initialPerson = {
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
  }

  const [person, dispatch] = useReducer(personReducer, initialPerson)

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요??`)
    dispatch({ type: 'updated', prev, current })
  }

  const handleAddMentor = () => {
    const name = prompt(`추가하고 싶은 사람의 이름이 뭔가요?`)
    const title = prompt(`추가하고 싶은 사람의 타이틀이 뭔가요?`)
    dispatch({ type: 'added', name, title })
  }
  const handleDeleteMentor = () => {
    const target = prompt(`삭제하고 싶은 멘토의 이름이 뭔가요?`)
    dispatch({ type: 'deleted', target })
  }

  return (
    <>
      <h1>
        {person.name}은/는 {person.title}
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

      <button onClick={handleUpdate}>
        멘토 바꾸기
      </button>
      <button onClick={handleAddMentor}>
        멘토 추가하기
      </button>
      <button onClick={handleDeleteMentor}>
        멘토 삭제하기
      </button>
    </>
  );
}

export default AppMentors;