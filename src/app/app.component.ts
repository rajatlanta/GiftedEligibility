import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade, School, Student } from '../model/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GiftedEligibility';
  yearSelected:number;
  schoolSelected:string;
  gradeSelected:string;

  //Years: any;
  Years: any = [{year:2022},{year:2021},{year:2020}]

  Schools: any = [
                  {year:2022, schoolID: '0699', schoolName: 'Brandywine Elementary School'},
                  {year:2022, schoolID: '0700', schoolName: 'Desana Middle School'},
                  {year:2022, schoolID: '0702', schoolName: 'Denmark High School'}, 

                  {year:2021, schoolID: '0106', schoolName: 'Shiloh Point Elementary'},
                  {year:2021, schoolID: '0407', schoolName: 'Piney Grove Middle School'},
                  {year:2021, schoolID: '0190', schoolName: 'South Forsyth High School'},

                  {year:2020, schoolID: '0198', schoolName: 'Vickery Elementary School'},
                  {year:2020, schoolID: '0199', schoolName: 'Vickery Middle School'},
                  {year:2020, schoolID: '0107', schoolName: 'West Forsyth High School'}
                ]
                
  schoolFilteredList: any = [];
  gradeFilteredList: any = [];
  studentFilteredList: any = [];


  Grades: any = [{year:2022, schoolID:'0699', grade:'2'},
                 {year:2022, schoolID:'0699', grade:'3'},
                 {year:2022, schoolID:'0700', grade:'7'},
                 {year:2022, schoolID:'0702', grade:'9'},
                 {year:2022, schoolID:'0106', grade:'4'},
                 {year:2022, schoolID:'0407', grade:'6'},
                 {year:2022, schoolID:'0190', grade:'11'},
                 {year:2022, schoolID:'0198', grade:'4'},
                 {year:2022, schoolID:'0199', grade:'6'},
                 {year:2022, schoolID:'0107', grade:'12'},
                ]

  Students: any = [{year:2022, schoolID:'0699', grade:'2', studentID:'1', studentName:'Ajay'},
                  {year:2022, schoolID:'0699', grade:'3', studentID:'2', studentName:'Anil'},
                  {year:2022, schoolID:'0700', grade:'7', studentID:'3', studentName:'Madhuri'},
                  {year:2022, schoolID:'0700', grade:'7', studentID:'4', studentName:'Amogh'},
                  {year:2022, schoolID:'0702', grade:'9', studentID:'5', studentName:'AnuSree'},
                  {year:2022, schoolID:'0106', grade:'4', studentID:'6', studentName:'Raj'},
                  {year:2022, schoolID:'0407', grade:'6', studentID:'7', studentName:'Saanvi'},
                  {year:2022, schoolID:'0190', grade:'11', studentID:'8', studentName:'Myra'},
                  {year:2022, schoolID:'0198', grade:'4', studentID:'9', studentName:'Mithila'},
                  {year:2022, schoolID:'0199', grade:'6', studentID:'10', studentName:'Sridhar'},
                  {year:2022, schoolID:'0107', grade:'12', studentID:'11', studentName:'Lehana'},]

                 /* StudentSearch{
                    studentID : string,
                    studentName : string,
                    GTID : string,
                    schoolName : string,
                    status : string, 
                    eligibilityDate : string,
                    eligible : boolean
                } */

  StudentSearch: any = [
                        {studentID:'4133', studentName:'Adams Majest', GTID:'111', schoolName:'Appling County Elementary School', status:'In-Progress', eligibilityDate:'01/01/2022', eligbile:false},
                        {studentID:'4159', studentName:'Altman Mason', GTID:'222', schoolName:'Appling County Elementary School', status:'', eligibilityDate:'', eligbile:false},
                        {studentID:'2689', studentName:'Anderson Natilee', GTID:'333', schoolName:'Appling County Elementary School', status:'', eligibilityDate:'', eligbile:false},
                        {studentID:'1068', studentName:'Andres Garcia Sindy', GTID:'444', schoolName:'Appling County Elementary School', status:'', eligibilityDate:'', eligbile:false},
                        {studentID:'3670', studentName:'Avera Brynlee', GTID:'555', schoolName:'Appling County Elementary School', status:'', eligibilityDate:'', eligbile:false},
                        {studentID:'3309', studentName:'Baker Marcus', GTID:'666', schoolName:'Appling County Elementary School', status:'', eligibilityDate:'', eligbile:false},
                       ]                

  alldepartments:any;
 /* alldepartments =
  [
    {departmentId:'1', departmentName:'HR'},
    {departmentId:'2', departmentName:'Finance'},
    {departmentId:'3', departmentName:'IT'}
  ] */

  constructor(private router : Router)
  {

  }

  ngOnInit(): void
  {
      console.log(this.Years[0]);
      console.log('Schools:' + this.Schools);

      let storeId = 1;
      
      this.router.navigate(['/eligibility']);
      
      
      
      

  }

  changedYear(year)
  {
    console.log('Year Changed')
    console.log(year.target.value);

    this.schoolFilteredList = this.Schools.filter((school: School) => school.year === parseInt(year.target.value));
      console.log('FilteredSchools:' + this.schoolFilteredList[0].schoolName);
  }

  changedSchool(school)
  {
    console.log('School Changed')
    this.gradeFilteredList = this.Grades.filter((grade: Grade) => grade.year === 2022 && grade.schoolID == school.target.value);
    console.log('FilteredGrades:' + this.gradeFilteredList);
   
    console.log('YearSelected in changedSchool:' + this.yearSelected);
    console.log(school.target.value);
    

  }

  AddEligibility(gtID: string, studentName: string)
  {
    console.log('In StudentDetail event');
    console.log("GTID:" + gtID);
    console.log("StudentName:" + studentName);
    this.router.navigate(['/eligibilityDetails']);
  }

  ViewEligibility(gtID: string, studentName: string)
  {
    console.log('In StudentDetail event');
    console.log("GTID:" + gtID);
    console.log("StudentName:" + studentName);
  }

  EditEligibility(gtID: string, studentName: string)
  {
    console.log('In StudentDetail event');
    console.log("GTID:" + gtID);
    console.log("StudentName:" + studentName);
  }

  DeleteEligibility(gtID: string, studentName: string)
  {
    console.log('In StudentDetail event');
    console.log("GTID:" + gtID);
    console.log("StudentName:" + studentName);
  }

  changedGrade(grade)
  {
    console.log('Grade Changed')
    this.studentFilteredList = this.Students.filter((student: Student) => student.year === 2022 && student.schoolID == this.schoolSelected && student.grade == grade.target.value);
      console.log('FilteredStudents:' + this.studentFilteredList[0].studentName);
      //console.log('Year Selected' + this.yearSelected);

    //console.log('YearSelected in changedGrade:' + this.yearSelected);
    //console.log('SchoolSelected in changedGrade:' + this.schoolSelected);

   /* yearSelected:number;
    schoolSelected:string;
    gradeSelected:string; */
  }

}
