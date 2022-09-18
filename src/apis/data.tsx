import { db, storage } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  blogData,
  DataState,
  DataType,
  introData,
  profileData,
  projectData,
  skillData,
} from "../types/data";

const auth = getAuth();

export const setData = async (data: DataState, Type: DataType) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, Type), {
      ...data,
    });
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};

export const getData = async (Type: DataType) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    const docRef = doc(db, UUID, Type);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      alert("저장 데이터가 호출되었습니다.");
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      alert("저장된 데이터가 없습니다. 새로 작성해주세요.");
    }

  } else {
    alert("로그인을 해주세요.");
  }
};

// export const setIntroData = async (data: introData) => {
//   const UUID = auth.currentUser?.uid;
//   if (UUID) {
//     await setDoc(doc(db, UUID, "Intro"), {
//       ...data,
//     });
//     alert("임시 저장되었습니다.");
//   } else {
//     alert("로그인을 해주세요.");
//   }
// };

// export const setProfileData = async (data: profileData) => {
//   const UUID = auth.currentUser?.uid;
//   if (UUID) {
//     await setDoc(doc(db, UUID, "Profile"), {
//       ...data,
//     });
//     alert("임시 저장되었습니다.");
//   } else {
//     alert("로그인을 해주세요.");
//   }
// };

// export const setSkillData = async (data: skillData) => {
//   const UUID = auth.currentUser?.uid;
//   if (UUID) {
//     await setDoc(doc(db, UUID, "Skill"), {
//       ...data,
//     });
//     alert("임시 저장되었습니다.");
//   } else {
//     alert("로그인을 해주세요.");
//   }
// };

// export const setProjectData = async (data: projectData) => {
//   const UUID = auth.currentUser?.uid;
//   if (UUID) {
//     await setDoc(doc(db, UUID, "Project"), { ...data }); //?
//     alert("임시 저장되었습니다.");
//   } else {
//     alert("로그인을 해주세요.");
//   }
// };

// export const setBlogData = async (data: blogData) => {
//   const UUID = auth.currentUser?.uid;
//   if (UUID) {
//     await setDoc(doc(db, UUID, "Blog"), {
//       ...data,
//     });
//     alert("임시 저장되었습니다.");
//   } else {
//     alert("로그인을 해주세요.");
//   }
// };
