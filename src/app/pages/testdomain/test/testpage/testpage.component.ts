/**
 * Created by: MetaMagic
 * Date: 14/05/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'testpage',
  templateUrl: 'testpage.component.html'
})
export class TestpageComponent implements OnInit{
  testpageModel:TestpageModel;
 
  constructor(private http: HttpClient) {
    this.testpageModel=new TestpageModel();
       }
      ngOnInit(){
  }
 

   
}
export class TestpageModel{
 }
