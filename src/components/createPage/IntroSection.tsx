import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { setIntroData } from '../../apis/data';
import { introData } from '../../types/data';

export type changeSectionProps = {setThisState:any}

const IntroSection = ({setThisState}:changeSectionProps) => {

  const [inputIntroSection,setInputIntroSection] = useState<introData>({
    name: '',
    stack:''
  });

  const writeStack_ref = React.useRef(null);
  const writeName_ref = React.useRef(null);

  const {stack, name} = inputIntroSection;

  const ChangeInputIntro = (e:any) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    const dataTitleAndContent = {
        ...inputIntroSection, // 기존의 inputValue 객체를 복사한 뒤
        [name]: value // name 키를 가진 값을 value 로 설정
    }

    setInputIntroSection(dataTitleAndContent)
    // dispatch(selectWrite({ [name]: value }))

    console.log(inputIntroSection)
    console.log(name)
  }

  useEffect(() => {
    console.log(inputIntroSection, "유즈effect")
  }, [inputIntroSection])

  const clickIntroSendBtn = async() => {
    await setIntroData(inputIntroSection)
    setThisState('Profile');
  }

  return (
    <div>
      <input type='text' placeholder='스택' ref={writeStack_ref}
      name='stack' value={stack} onChange={ChangeInputIntro}/>

      <input type='text' placeholder='이름' ref={writeName_ref}
      name='name' value={name} onChange={ChangeInputIntro}/>

      <button onClick={clickIntroSendBtn}>입력</button>
    </div>
  )
}

export default IntroSection;