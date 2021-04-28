import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Some of the design works from YAAW',
      desc: '',
      livedemo: 'https://drive.google.com/drive/folders/15nbX4RCYZUpcIsNJz-31BCDnDDIc5EVO?usp=sharing',
      imgUrl: 'assets/images/number 2.png',
      tech: 'Figma'
    },

    {
      id: 2,
      title: 'Mobile Applications',
      desc: '',
      livedemo: 'https://github.com/clewanga/SchoolApp',
      imgUrl: 'assets/images/p4.jpg',
      tech: 'Android Studio - Java'
    },


    {
      id: 3,
      title: 'Mobile application',
      desc: '',
      livedemo: 'https://github.com/clewanga/flutter_babybump_application',
      imgUrl: 'assets/images/p5.jpg',
      tech: 'Flutter'
    }, 

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
