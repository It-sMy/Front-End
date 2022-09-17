export type DataState = {
  intro?: introData;
  profile?: profileData;
  skill?: skillData;
  project?: projectData;
  blog?: blogData;
};

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

type stackDetail = {
  stackName: string;
  stackEXP?: "tried" | "experiencer" | "expert" | "master";
};

type blogDetail = {
  blogName: string;
  blogReason: string;
  blogURL: string;
};

type projectDetail = {
  projectName: string;
  projectPeriod: string;
  projectStack: string[];
  projectGithubURL: string;
  projectDescribe: string;
  projectFunctions: string[];
  projectWhatIDid: string[];
};
