import { Component , Renderer2} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faChevronDown,faXmarksLines } from '@fortawesome/free-solid-svg-icons';
import { ModulesListAnchor } from './model-list-anchor';
import { ModulesListMenu } from './model-list-menu';
import { ModulesListProducts } from './model-list-products';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faChevronDown=faChevronDown
  faBars=faBars
  faXmarksLines=faXmarksLines
  ModulesListProducts: Array<any>;
  ModulesListMenu: Array<any>;
  ModulesListAnchor:Array<any>;
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger:any;

  constructor(private ren: Renderer2 ,private dialogRef: MatDialog) {
    this.ModulesListProducts = ModulesListProducts; 
    this.ModulesListAnchor = ModulesListAnchor;
    this.ModulesListMenu = ModulesListMenu;
    this.changeText = false;
  }
  ngOnInit(): void {
    this.openDialog();
  }
  hide(): void {
    const elem = document.getElementById('popup1');
    elem!.style.display = 'none';
  }
  openDialog(): void {
    this.dialogRef.open(PopUpComponent);
  }
  changeText: boolean;
  teste1(){
  }
  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger:any, button:any){
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  menu2enter() {
    this.isMatMenu2Open = true;
  }

  menu2Leave(trigger1:any, trigger2:any, button:any) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100)
  }

  buttonEnter(trigger:any) {
    setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu();
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger:any, button:any) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }
  
}

