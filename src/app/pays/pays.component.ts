import { Component, OnInit } from '@angular/core';
import { Pays } from '../pays';
import { PaysService } from '../pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

   pays!: Pays[];
  constructor(private paysService: PaysService) { }

  ngOnInit(): void {
    this.paysService.getPays().subscribe((data: Pays[]) => {
      console.log(data);
      this.pays = data;
    });
  }

}
