import React, { useEffect, useState } from 'react';
import { changeSectionProps } from './IntroSection';
import { setProjectData } from '../../apis/data';
import { projectData } from '../../types/data';

const ProjectSection = ({setThisState}:changeSectionProps) => {

    const [project,setProject] = useState<any>({
        projectName:'',
        projectPeriod:'',
        projectStack:[],
        projectGithubURL: '',
        projectDescribe: '',
        projectFunctions: [],
        projectWhatDid:[]
    });

    const [projectSection,setProjectSection] = useState<projectData>();

    const writeTitle_ref = React.useRef(null);
    const writeProjectPeriod_ref = React.useRef(null);
    const writeProjectStack_ref = React.useRef(null);
    const writeGithubLink_ref = React.useRef(null);
    const writeProjectExplanation_ref = React.useRef(null);
    const writeProjectMainSkill_ref = React.useRef(null);
    const writeMyPart_ref = React.useRef(null);

    const { projectName, projectPeriod, projectStack, projectGithubURL,
        projectDescribe, projectFunctions, projectWhatDid } = project;

    const ChangeInputProfile = (e:any) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        const dataTitleAndContent = {
            ...projectSection, // 기존의 inputValue 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        }

        setProject(dataTitleAndContent)
        setProjectSection([{...project}])
        // dispatch(selectWrite({ [name]: value }))

        console.log(projectSection)
        console.log(project)
        console.log(name)
    }

    useEffect(() => {
        console.log(projectSection, '마지막 e 안찍힘 방지')
    }, [projectSection])

    const clickProjectSendBtn = async() => {
        // await setProjectData(projectSection)
        setThisState('Project');
    }

  return (
    <div>
      <input type='text' placeholder='프로젝트 제목' ref={writeTitle_ref}
      name='projectName' value={projectName} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='프로젝트 기간' ref={writeProjectPeriod_ref}
      name='projectPeriod' value={projectPeriod} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='프로젝트 스택' ref={writeProjectStack_ref}
      name='projectStack' value={projectStack} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='깃헙링크' ref={writeGithubLink_ref}
      name='projectGithubURL' value={projectGithubURL} onChange={ChangeInputProfile}/>
      
      <input type='text' placeholder='프로젝트 설명' ref={writeProjectExplanation_ref}
      name='projectDescribe' value={projectDescribe} onChange={ChangeInputProfile}/>
      
      <input type='text' placeholder='프로젝트 주요 기능' ref={writeProjectMainSkill_ref}
      name='projectFunctions' value={projectFunctions} onChange={ChangeInputProfile}/>
      
      <input type='text' placeholder='나의 역할' ref={writeMyPart_ref}
      name='projectWhatDid' value={projectWhatDid} onChange={ChangeInputProfile}/>
      
      <button onClick={clickProjectSendBtn}>입력</button>
    </div>
  )
}

export default ProjectSection;
