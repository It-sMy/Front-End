import React, { useEffect, useRef, useState } from 'react';
import { changeSectionProps } from './IntroSection';
import { setData } from '../../apis/data';
import { profileData } from '../../types/data';

const ProfileSection = ({setThisState}:changeSectionProps) => {

    const [profileSection,setProfileSection] = useState<profileData>({
        pictureURL:'',
        experienceList:[],
        phoneNumber:'',
        eMail:''
    });

    const [ProfileImg, setProfileImg] = useState("");
    const [userProfileImage, setUserProfileImage] = useState("");
    const userProfileImageRef = useRef<HTMLInputElement>(null);

    const writeName_ref = useRef(null);
    const writeCoreHistory_ref = useRef(null);
    const phoneNumber_ref = useRef(null);
    const eMail_ref = useRef(null);

    const PreviewProfileImg = (e:any) => {
        const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
            if (e.target.files[0]?.size > 3 * 1024 * 1024) {
            return;
        } else if (!e.target?.files[0]?.name.match(correctForm)) {
            alert("이미지 파일만 가능합니다.");
            return;
        }

        setProfileSection({...profileSection,pictureURL:(URL.createObjectURL(e.target.files[0]))});
        setProfileImg(URL.createObjectURL(e.target.files[0]));
        setUserProfileImage(e.target.files[0]);
        console.log(" 이미지확인", URL.createObjectURL(e.target.files[0]));
    };

    console.log('프로필이미지',ProfileImg)
    console.log('유저프로필',userProfileImage)
    console.log('유저프로필ref',userProfileImageRef)

    const {pictureURL, experienceList, phoneNumber, eMail} = profileSection;

    const ChangeInputProfile = (e:any) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        const dataTitleAndContent = {
            ...profileSection, // 기존의 inputValue 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        }

        setProfileSection(dataTitleAndContent)
        // dispatch(selectWrite({ [name]: value }))

        console.log(profileSection)
        console.log(name)
    }

    useEffect(() => {
        console.log(profileSection, '마지막 e 안찍힘 방지')
    }, [profileSection])

    const clickProfileSendBtn = async() => {
        await setData(profileSection,'Profile')
        setThisState("Skill");
    }

  return (
    <div>
        <input type='file' ref={userProfileImageRef}
        accept='image/*' onChange={PreviewProfileImg}/>

        <img src={ProfileImg}/>
          
        <input type='text' placeholder='이름' ref={writeName_ref}
        name='pictureURL' value={pictureURL} onChange={ChangeInputProfile}/>

        <input type='text' placeholder='핵심 경험' ref={writeCoreHistory_ref}
        name='experienceList' value={experienceList} onChange={ChangeInputProfile}/>

        <input type='text' placeholder='P.H' ref={phoneNumber_ref}
        name='phoneNumber' value={phoneNumber} onChange={ChangeInputProfile}/>

        <input type='text' placeholder='E-Mail' ref={eMail_ref}
        name='eMail' value={eMail} onChange={ChangeInputProfile}/>
        
        <button onClick={clickProfileSendBtn}>입력</button>
    </div>
  )
}

export default ProfileSection;
