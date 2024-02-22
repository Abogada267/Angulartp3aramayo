import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  descripcion:string = ''

  constructor(private router:Router, activatedRoute : ActivatedRoute) {
    activatedRoute.params.subscribe( params => {
      this.descripcion = params['descripcion']
      
    })    
  }
  refTimeOut :any = null

  ngOnInit(): void {
    this.refTimeOut = setTimeout(() => {
      this.router.navigateByUrl('/login')
    },2000)
  }

  ngOnDestroy() {
    clearTimeout(this.refTimeOut)
  }

}
