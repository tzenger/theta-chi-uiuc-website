import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Member } from '../../../services/member/member.model';
import { MemberService } from '../../../services/member/member.service';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.scss']
})
export class ViewMemberComponent implements OnInit {
  @Input() member: Member;
  @ViewChild('collapseDiv', { static: false }) collapseDiv: ElementRef;

  editMember: Member = new Member();

  editing: boolean = false;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    Object.assign(this.editMember, this.member);
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  isCollapseDivExpanded(): boolean {
    const div: HTMLElement = this.collapseDiv.nativeElement;
    return div.classList.contains('show');
  }

  toggleCollapseDiv() {
    const div: HTMLElement = this.collapseDiv.nativeElement;
    if (this.isCollapseDivExpanded()) {
      div.classList.remove('show');
    } else {
      div.classList.add('show');
    }
  }

  editBtnClick(event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    if (!this.isCollapseDivExpanded()) {
      this.toggleCollapseDiv();
    }
    this.toggleEditing();
  }

  saveChanges() {
    this.toggleEditing();
    console.log(JSON.stringify(this.editMember));
    Object.assign(this.member, this.editMember);
    this.memberService.update(this.member);
  }

  calcAge(birthdayStr: string) {
    const yearInMs = 3.15576e+10;
    return Math.floor((Date.now() - new Date(birthdayStr).getTime()) / yearInMs);
  }
}
