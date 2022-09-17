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
  introData,
  profileData,
  projectData,
  skillData,
} from "../types/data";

const auth = getAuth();

export const setIntroData = async (data: introData) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, "Intro"), {
      name: data.name,
      stack: data.stack,
    });
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};

export const setProfileData = async (data: profileData) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, "Profile"), {
      pictureURL: data.pictureURL,
      experienceList: data.experienceList,
      phoneNumber: data.phoneNumber,
      eMail: data.eMail,
    });
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};

export const setSkillData = async (data: skillData) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, "Profile"), {
      techStackList: data.techStackList,
      etcStack: data.etcStack,
    });
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};

export const setProjectData = async (data: projectData) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, "Profile"), {});
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};

export const setBlogData = async (data: blogData) => {
  const UUID = auth.currentUser?.uid;
  if (UUID) {
    await setDoc(doc(db, UUID, "Profile"), {
      firstBlog: data.firstBlog,
      secondBlog: data.secondBlog,
    });
    alert("임시 저장되었습니다.");
  } else {
    alert("로그인을 해주세요.");
  }
};
