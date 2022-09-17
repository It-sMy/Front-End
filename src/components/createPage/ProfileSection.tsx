import React, { useEffect, useState } from 'react';

const ProfileSection = () => {

    const [profileSection,setProfileSection] = useState<any>({
        pictureURL:'',
        coreHistory:'',
        phoneNumber:'',
        eMail:''
    });

    const [ProfileImg, SetProfileImg] = React.useState("");
    const [userProfileImage, setUserProfileImage] = React.useState("");
    const userProfileImageRef = React.useRef("");

    const writeName_ref = React.useRef(null);
    const writeCoreHistory_ref = React.useRef(null);
    const phoneNumber_ref = React.useRef(null);
    const eMail_ref = React.useRef(null);

    // const PreviewProfileImg = (e:any) => {
    //     const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
    //         if (e.target.files[0]?.size > 3 * 1024 * 1024) {
    //         return;
    //     } else if (!e.target?.files[0]?.name.match(correctForm)) {
    //         alert("이미지 파일만 가능합니다.");
    //         return;
    //     }

    //     SetProfileImg(URL.createObjectURL(e.target.files[0]));
    //     setUserProfileImage(e.target.files[0]);
    //     console.log(" 이미지확인", URL.createObjectURL(e.target.files[0]));
    // };

    // const ImageUpload = () => {
    //     userProfileImageRef.current.click();
    // };

    const {name, coreHistory, phoneNumber, eMail} = profileSection;

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

  return (
    <div>
      <input type='text' placeholder='이름' ref={writeName_ref}
      name='name' value={name} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='핵심 경험' ref={writeCoreHistory_ref}
      name='coreHistory' value={coreHistory} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='P.H' ref={phoneNumber_ref}
      name='phoneNumber' value={phoneNumber} onChange={ChangeInputProfile}/>

      <input type='text' placeholder='E-Mail' ref={eMail_ref}
      name='eMail' value={eMail} onChange={ChangeInputProfile}/>
      
      <button>입력</button>
    </div>
  )
}

export default ProfileSection;
