export type DataState =
  | introData
  | profileData
  | skillData
  | projectData
  | blogData;

export type DataType = "Intro" | "Profile" | "Skill" | "Project" | "Blog";

export type introData = {
  name?: string;
  stack?: string;
};
export type profileData = {
  pictureURL?: string;
  experienceList?: string[];
  phoneNumber?: string;
  eMail?: string;
};
export type skillData = {
  techStackList?: stackDetail[];
  etcStack?: stackDetail[];
};
export type projectData = projectDetail[];

export type blogData = {
  firstBlog?: blogDetail;
  secondBlog?: blogDetail;
};

export type stackDetail = {
  stackName: string;
  stackURL: string;
  stackEXP?: "Tried" | "Experiencer" | "Expert" | "Master";
};

export type blogDetail = {
  blogName: string;
  blogReason: string;
  blogURL: string;
};

export type projectDetail = {
  projectName: string;
  projectPeriod: string;
  projectStack: string[];
  projectGithubURL: string;
  projectDescribe: string;
  projectFunctions: string[];
  projectWhatIDid: string[];
};
