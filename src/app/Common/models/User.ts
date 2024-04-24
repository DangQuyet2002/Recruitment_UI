
import { v4 as uuidv4 } from 'uuid';

export class GetTopNewJobs{
  id: number = 0;
  name: string = "";
  description: string = "";
  introduce: string = "";
  objectTarget: string = "";
  experience: string = "";
  provinceId: number = 0;
  province:  string = "";
  timeId: number = 0;
  minSalary: string = "";
  maxSalary: string = "";
  skillIds: number[] = [];
  titleId: number = 0;
  skills: string[] = [];
  time:string ="";
  urlAvatar : string = "";
  title: string ="";
  slug: string = "";
}


export class ProfileUser {
  id: string = "";
  title: string ="";
  fullName: string = "";
  phone: string  = "";
  address: string  = "";
  email: string  = "";
  dateOfBirth: string  = "";
  description: string  = "";
  urlAvatar: string  = "";
  gender: string = "";
  websiteURL: string  = "";

}

