export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  website?: string;
  summary?: string;
}

export interface ResumeSection {
  id: string;
  type: string;
  title: string;
  content: unknown;
}

export interface Resume {
  id: string;
  personalInfo: PersonalInfo;
  sections: ResumeSection[];
  templateId?: string;
}
