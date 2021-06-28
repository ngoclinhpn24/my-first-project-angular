import { Directive, ElementRef } from '@angular/core';

// chỉ thị
@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  // ElementRef: lấy ptu kiểu ElementFef
  constructor(Element: ElementRef) {
  //  console.log(Element);
    Element.nativeElement.innerText = "Use changeText Directive. ";
    
   }

}
