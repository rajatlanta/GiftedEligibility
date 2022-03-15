export interface Department{
    departmentID : string,
    departmentName: string,
}

export interface Employee{
    employeeID : string,
    employeeName: string,
    departmentID: string,
    salary: string,
    phoneNumber: string
}

export interface School{
    year : number,
    schoolID: string,
    schoolName: string
}

export interface Grade{
    year : number,
    schoolID: string,
    grade: string
}

export interface Student{
    year : number,
    schoolID: string,
    grade: string,
    studentID: string,
    studentName: string
}

export interface StudentSearch{
    studentID : string,
    studentName : string,
    GTID : string,
    schoolName : string,
    status : string, 
    eligibilityDate : string,
    eligible : boolean
}

export interface Score{
    id:number, 
    assessmentID:number, 
    text:string
}

export interface Assessment1{
    id:number, 
    text:string
    ,AssessmentScores : AssessmentScores1[]
}

export interface AssessmentScores1
{
    assessmentScoreid: number;
    id: number;
    text: string;
}

export interface Assess
{
    id: number;
    text: string;
}

//Scores: any = [{id:1, assessmentID:1, text:'V'},

//{year:2022, schoolID:'0699', grade:'2', studentID:'1', studentName:'Ajay'}

