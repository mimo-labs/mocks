type Verb = {
  id: number;
  name: string;
  organization: Organization;
};

export type Mock = {
  id: number;
  title: string;
  path: string;
  verb: Verb;
  status_code: number;
  is_active: boolean;
  is_complete: boolean;
};

export type Endpoint = {
  endpoint: string;
  mocks: Mock[];
};

export interface Organization {
  id: number;
  uuid: string;
  name: string;
}

export interface OrganizationDetailed extends Organization {
  profile: {
    public_name: "Choterio";
    description: null;
    avatar: "default.png";
    technologies: [];
    website: null;
    twitter: null;
    facebook: null;
    linkedin: null;
    instagram: null;
  };
}

export type Project = {
  id: number;
  name: string;
  organization: Organization;
};
