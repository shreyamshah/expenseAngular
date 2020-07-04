import { ListDetailComponent } from './../list-detail/list-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/data/expense';
import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { OverlayRef, PositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'expense-card-view',
  templateUrl: './expense-card-view.component.html',
  styleUrls: ['./expense-card-view.component.scss']
})
export class ExpenseCardViewComponent implements OnInit, AfterViewInit {
  @Input("expense")
  item: Expense;

  @ViewChild('cardView') cardView: ElementRef;

  overlayRef: OverlayRef;
  overlayPos: PositionStrategy;
  formPortal: ComponentPortal<ListDetailComponent>;

  constructor(private router: Router, private route: ActivatedRoute, private overlay: Overlay) { }
  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global().centerHorizontally().centerVertically()
    });
    this.formPortal = new ComponentPortal(ListDetailComponent);
  }

  ngOnInit(): void {
    /*this.formPortal = new ComponentPortal(ListDetailComponent);
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
      .connectedTo(
        this.cardView,
        {originX: 'start', originY: 'bottom'},
        {overlayX: 'start', overlayY: 'bottom'}
      ),
      width:200,
    }
    );*/
  }
  onCardClick() {
    //this.router.navigate(['expense-detail'],{state:{'item':this.item}});
    console.info(this.overlayRef.hasAttached());
    if (!this.overlayRef.hasAttached()) {
      var ref = this.overlayRef.attach(this.formPortal)
      ref.instance.expense = this.item;
      ref.instance.closePanel.subscribe(()=>{
        this.overlayRef.detach();
      });
      
    }
  }
}
