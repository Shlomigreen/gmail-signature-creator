export interface SignatureData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  websiteUrl: string;
  websiteLabel: string;
  websiteDisplay?: 'icon' | 'bottom';
  logoHyperlink: boolean;
  logoUrl: string;
  template: 'compact' | 'balanced' | 'corporate' | 'modern';
  websiteAlignment?: 'center' | 'left' | 'right';
  showLinkedin: boolean;
  linkedin: string;
  showTwitter: boolean;
  twitter: string;
}

export interface SignatureTemplate {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<{ data: SignatureData }>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedSignature {
  id: string;
  userId: string;
  name: string;
  data: SignatureData;
  createdAt: Date;
  updatedAt: Date;
} 