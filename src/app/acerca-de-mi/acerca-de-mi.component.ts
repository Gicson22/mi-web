import { Component, OnInit } from '@angular/core';
import { Ibar } from '../../commons/intefaces/progres.interface';

@Component({
  selector: 'gicson-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css'],
})
export class AcercaDeMiComponent implements OnInit {
  public skills: Array<Ibar> = [
    { title: 'Html', bg: '#dc3545', percent: '70%' },
    { title: 'CSS', bg: '#ffc107', percent: '70%' },
    { title: 'JavaScript', bg: '#28a745', percent: '70%' },
    { title: 'Angular', bg: '#6c757d', percent: '60%' },
    { title: 'Git', bg: '#17a2b8', percent: '70%' },
    { title: 'GitHub', bg: '#007bff', percent: '70%' },
    { title: 'Bootstrap', bg: 'green', percent: '80%' },
    { title: 'Sql Server', bg: '#007ea7', percent: '60%' },
    { title: 'Python', bg: '#f85e00', percent: '60%' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
