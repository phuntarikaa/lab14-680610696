interface Registrant {
  id: string; 
  fullName: string;
  gender: string; 
  plan: string; 
  total: number;
  extraItems?: string[];
}
export type { Registrant };

