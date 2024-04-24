
import { v4 as uuidv4 } from 'uuid';

export class OptionData {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class OptionTime {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class OptionTitle {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class OptionCategory {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class OptionSkill {
  id: number;
  name: string;
  disabled: boolean;
  constructor(id: number, name: string , disabled :boolean ) {
    this.id = id;
    this.name = name;
    this.disabled =  false;
  }
}

export class GetListJobs {
  id = 0;
  name = "";
  createdate = "";
  province = "";
  time = "";
  skills = "";
  title = "";
}

export class Token {
  success: boolean;
  error: string;
  errorCode: number;
  content: string;// Có thể thay đổi kiểu dữ liệu tùy thuộc vào nội dung của token

  constructor(success: boolean, error: string, errorCode: number, content: any) {
    this.success = success;
    this.error = error;
    this.errorCode = errorCode;
    this.content = content;
  }
}

export class CreateJob {
  id: number = 0;
  name: string = "";
  jobdescription: string = "";
  requirements: string = "";
  benefits: string = "";
  prioritize: string = "";
  experiencee: string = "";
  quantity: number = 0;
  rank: string  = "";
  gender: string ="";
  expirationDate: string = "";
  provinceId: number = 0;
  timeId: number = 0;
  minSalary: number = 0;
  maxSalary: number = 0;
  skillIds: number[] = [];
  titleId: number = 0;
}

export class DataSkill {
  id: number;
  name: string;
  logo : string;
  constructor(id: number, name: string , logo : string ) {
    this.id = id;
    this.name = name;
    this.logo=logo;

  }
}


