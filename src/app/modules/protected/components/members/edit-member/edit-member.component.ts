import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  
  

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(qpm => {
    //   if (!qpm.has('m')) {
    //     return;
    //   }
    // })
  }

}
