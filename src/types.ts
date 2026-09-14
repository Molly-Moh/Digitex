export type PageView = 'home' | 'privacy' | 'contact';

export interface ServiceRate {
  id: string;
  name: string;
  rate: string;
  unit?: string;
  description: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface Collaborator {
  id: string;
  name: string;
  type: string;
  initials: string;
  accentColor: string;
  bgGrad: string;
}

export interface EnquiryForm {
  fullName: string;
  email: string;
  startupName: string;
  phone?: string;
  service: string;
  message: string;
}
