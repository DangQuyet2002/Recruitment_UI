
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

export class OptionSkill {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class GetListJobs {
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

