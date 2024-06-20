
import { v4 as uuidv4 } from 'uuid';

export class Register {
  email = '';
  password = '';
  confirmPassword = '';
  fullName = '';
  age: number | undefined;
  phone: number | undefined;
  address = '';
}

export class Login {
  email = '';
  password = '';
  rememberMe = false;
}

export class GetAllUse {
  fullName = "";
  address = "";
  phone = "";
  email = "";
  createDate = "";
}

export class GetAllEmployer {
  fullName = "";
  address = "";
  contact = "";
  websiteURL = "";
  description = "";
}

export class RecruiterManagement {
  id : string = uuidv4();
  fullName = "";
  provinceName = "";
  registerDate = "";
  websiteURL = "";
  status = "";
}

export class RoleManagement {
  id : string = uuidv4();
  name = "";
  description = "";
}

export class CreateRoleModel {
  RoleName = "";
  RoleDescription = "";
}

export class UpdateRoleModel {
  id = "" ;
  name = "";
  description = "";
}

export class GetAllUseRole {
  userId : string = uuidv4();
  Email = "";
  Avatar = "";
  RoleNames = "";
}

export class ManageUserRoles {
  roleId ="";
  roleName = "";
  isSelected : boolean =  false;
}

export class ListCategory {
  id: number;
  name = "";
  description = "";

  constructor(id: number) {
    this.id = id;
  }
}

export class CreateCategory {
  name = "";
  description = "";
}

export class ListProvince {
  id: number;
  name = "";

  constructor(id: number) {
    this.id = id;
  }
}

export class CreateProvince {
  name = "";
}

export class ListSkill {
  id: number;
  name = "";
  logo = "";

  constructor(id: number) {
    this.id = id;
  }
}

export class CreateSkill {
  name = "";
  logo: File;

  constructor() {
    this.logo = new File([], '');
  }
}

export class ListTitle {
  id: number;
  name = "";

  constructor(id: number) {
    this.id = id;
  }
}

export class CreateTitle {
  name = "";
}

export class ListTemplate {
  id: number;
  name = "";
  description = "";
  url ="";
  urlImage = "";

  constructor(id: number) {
    this.id = id;
  }
}

export class CreateTemplate {
  name = "";
  description ="";
  url: File;
  urlImage: File;

  constructor() {
    this.url = new File([], '');
    this.urlImage = new File([], '');
  }
}
