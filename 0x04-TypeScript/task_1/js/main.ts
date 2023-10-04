export interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperiance?: number,
	location: string,
	[key: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}

export interface StudentConstructor {
	new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClassInterface{
	firstName: string,
	lastName: string,
	workOnHomework(): string,
	displayName(): string,
}

export class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(){
		return 'Currently working';
	};
	displayName(){
		return this.firstName;
	};
}

export function createStudent(construct: StudentConstructor, firstName: string, lastName: string) : StudentClass {
	return new construct(firstName, lastName);
}
