export interface IPerson {
  _id?: string,
  name: string,
  position?: string,
  department?: string,
  image?: any,
}

export interface IDepartment {
  name: string,
  director?: string,
}