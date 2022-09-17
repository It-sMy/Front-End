import React, { useEffect, useState } from 'react';

const SkillSection = () => {

    const [skillSection,setSkillSection] = useState<any>({
        s3:'',
        react:'',
        redux:'',
        timeScript:'',
        axios:'',
    });

    const s3_ref = React.useRef(null);
    const react_ref = React.useRef(null);
    const redux_ref = React.useRef(null);
    const timeScript_ref = React.useRef(null);
    const axios_ref = React.useRef(null);

    const {s3, react, redux, timeScript, axios} = skillSection;

    const ChangeInputSkill = (e:any) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        const dataTitleAndContent = {
            ...skillSection, // 기존의 inputValue 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        }

        setSkillSection(dataTitleAndContent)
        // dispatch(selectWrite({ [name]: value }))

        console.log(skillSection)
        console.log(name)
    }

    useEffect(() => {
        console.log(skillSection, '마지막 e 안찍힘 방지')
    }, [skillSection])

  return (
    <div>
      <input type='text' placeholder='s3' ref={s3_ref}
      name='s3' value={s3} onChange={ChangeInputSkill}/>

      <input type='text' placeholder='리액트' ref={react_ref}
      name='react' value={react} onChange={ChangeInputSkill}/>

      <input type='text' placeholder='redux' ref={redux_ref}
      name='redux' value={redux} onChange={ChangeInputSkill}/>

      <input type='text' placeholder='timeScript' ref={timeScript_ref}
      name='timeScript' value={timeScript} onChange={ChangeInputSkill}/>
      
      <input type='text' placeholder='axios' ref={axios_ref}
      name='axios' value={axios} onChange={ChangeInputSkill}/>
      
      <button>입력</button>
    </div>
  )
}

export default SkillSection;
