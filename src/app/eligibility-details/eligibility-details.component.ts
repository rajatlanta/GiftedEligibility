import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Assess, Assessment1, Score } from 'src/model/common';

@Component({
  selector: 'app-eligibility-details',
  templateUrl: './eligibility-details.component.html',
  styleUrls: ['./eligibility-details.component.css']
})
export class EligibilityDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  IsDisabled: boolean;
  assessmentIDSelected:number

  @Output() childEvent = new EventEmitter();
  @Input() GTID;
  @Input() StudentName;
  scoresFilteredList: any = [];

  assessment1: Assessment1[] = [];

  selassessment: Assessment1[] = [];

  assessmentScoreid: number;
    id: number;
    text: string;

  Assessments: Assess[] = [
    {id:1, text: 'Cognitive Abilities Test(CogAT) - Forms 6 and 7'},
    {id:2, text: 'In View'},
    {id:3, text: 'Kaufman Brief Intelligence Test(K-BIT-2)'},
    {id:4, text: 'Wechsler Intelligence Scale for Children V(WISC V)'},
  ]

  OriginalAssessments: Assess[] = [
    {id:1, text: 'Cognitive Abilities Test(CogAT) - Forms 6 and 7'},
    {id:2, text: 'In View'},
    {id:3, text: 'Kaufman Brief Intelligence Test(K-BIT-2)'},
    {id:4, text: 'Wechsler Intelligence Scale for Children V(WISC V)'},
  ]

  SelectedAssessments:  Assessment1[] = [];

  Scores: any = [
    {id:1, assessmentID:1, text:'V'},
    {id:2, assessmentID:1, text:'Q'},
    {id:3, assessmentID:1, text:'NV'},
    {id:4, assessmentID:1, text:'C'},
    {id:5, assessmentID:1, text:'PC'},
    {id:6, assessmentID:2, text:'C'},
    {id:7, assessmentID:3, text:'V'},
    {id:8, assessmentID:3, text:'NV'},
    {id:9, assessmentID:3, text:'C'},
    {id:10, assessmentID:4, text:'VC'},
    {id:11, assessmentID:4, text:'PR'},
    {id:12, assessmentID:4, text:'FS'},
  ]

  ngOnInit(): void {
    this.IsDisabled = true;
    //console.log('MyName:' + sessionStorage.getItem('MyName'));

    this.assessment1 = 
    [
      {id:1, text: 'Cognitive Abilities Test(CogAT) - Forms 6 and 7', AssessmentScores:[{assessmentScoreid:1, id:1, text:'V'}, {assessmentScoreid:1, id:1, text:'Q'},{assessmentScoreid:1, id:1, text:'NV'}, {assessmentScoreid:1, id:1, text:'C'}]},

      {id:2, text: 'In View', AssessmentScores:[{assessmentScoreid:1, id:1, text:'C'}]},

      {id:3, text: 'Kaufman Brief Intelligence Test(K-BIT-2)'
      , AssessmentScores:[{assessmentScoreid:1, id:1, text:'V'}, {assessmentScoreid:1, id:1, text:'NV'}, {assessmentScoreid:1, id:1, text:'C'}]}, 
    
      {id:4, text: 'Wechsler Intelligence Scale for Children V(WISC V)'
      , AssessmentScores:[{assessmentScoreid:2, id:1, text:'VC'}, {assessmentScoreid:2, id:2, text:'PR'}, {assessmentScoreid:2, id:3, text:'FS'}] 
    
    }
      
    ];
    console.log(this.assessment1[0].AssessmentScores);

  }

  changedAssessment(assessment)
  {
    console.log(assessment.target.value);
    console.log('Assessment Changed')

    this.scoresFilteredList = this.Scores.filter((score: Score) => score.assessmentID === parseInt(assessment.target.value));
      console.log('FilteredScores:' + this.scoresFilteredList);

    console.log('assessment.target.value:' + assessment.target.value);
    console.log('assessment.target.text:' + assessment.target.options[assessment.target.options.selectedIndex].text);
    //this.Assessments.splice(assessment.target.value);

    //this.Assessments = this.Assessments.filter(item => item.id !== assessment.target.value);
    this.removeDocument(assessment.target.value)
    


    console.log('Assessments:' + this.Assessments);
    
    this.selassessment = this.assessment1.filter((score: Assessment1) => score.id === parseInt(assessment.target.value));

    //this.SelectedAssessments.push(assessment.target.options[assessment.target.options.selectedIndex].text);

    this.SelectedAssessments.push(this.selassessment[0]);

    console.log('selassessment1:' + assessment.target.options[assessment.target.options.selectedIndex].text);
    console.log('selassessment:' + this.selassessment.length);
    console.log('SelectedAssessments:' + this.SelectedAssessments);

    this.assessmentIDSelected = -1;

  }

  removeDocument(doc){
    this.Assessments.forEach( (item, index) => {
      console.log("Item.id:" + item.id);
      console.log("doc:" + doc);
      if(item.id === parseInt(doc)) 
      {
        console.log("item.id === doc");
        this.Assessments.splice(index,1);
      }
    });
 }

 delete(id: number)
 {
  this.removeSelectedAssessment(id);

  this.Assessments.push(this.OriginalAssessments.filter((score: Assess) => score.id === id)[0]);
  this.Assessments.sort();

  this.Assessments.sort((a, b) => (a.id < b.id ? -1 : 1));

  console.log('Test2:' + this.OriginalAssessments.filter((score: Assess) => score.id === id)[0].id);
  console.log('Test3:' + this.OriginalAssessments.filter((score: Assess) => score.id === id)[0].text);
  this.assessmentIDSelected = -1;
 }

 removeSelectedAssessment(doc){
  this.SelectedAssessments.forEach( (item, index) => {
    console.log("Item.id:" + item.id);
    console.log("doc:" + doc);
    if(item.id === parseInt(doc)) 
    {
      console.log("item.id === doc");
      this.SelectedAssessments.splice(index,1);
    }
  });
}

  SaveElgibilityDetails()
  {
    //this.router.navigate(['/eligibility']);
    this.childEvent.emit('this is a test');
  }

 

}
