
import { v4 as uuidv4 } from 'uuid';

export class GetTopNewJobs{
  id: number = 0;
  name: string = "";
  description: string = "";
  introduce: string = "";
  objectTarget: string = "";
  experience: string = "";
  provinceId: number = 0;
  timeId: number = 0;
  minSalary: number = 0;
  maxSalary: number = 0;
  skillIds: number[] = [];
  titleId: number = 0;
}
