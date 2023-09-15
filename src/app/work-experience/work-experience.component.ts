import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workInfo: Array<any> = [];

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workExperienceService.getWorkExperience().subscribe((data: any) => {
      this.workInfo = data;
    });
  }
}
