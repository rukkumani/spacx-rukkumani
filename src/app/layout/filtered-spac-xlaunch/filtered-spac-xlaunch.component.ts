import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filtered-spac-xlaunch',
  templateUrl: './filtered-spac-xlaunch.component.html',
  styleUrls: ['./filtered-spac-xlaunch.component.css']
})
export class FilteredSpacXlaunchComponent implements OnInit,OnChanges {
@Input() childFilteredData
filteredData
  constructor() { }

  ngOnInit() {
  }

ngOnChanges(changes:SimpleChanges){
this.childFilteredData = changes.childFilteredData.currentValue
if(this.childFilteredData&&this.childFilteredData.length){
  this.filteredData= this.childFilteredData.map(obj=>{

    return{ mission_name:obj.mission_name,
      flight_number:obj.flight_number,
      mission_id: obj.mission_id,
      launch_year:obj.launch_year, 
      launch_success:obj.launch_success, 
      land_success:obj.rocket.first_stage.cores[0].land_success?obj.rocket.first_stage.cores[0].land_success:false,
      links:obj.links.mission_patch_small?obj.links.mission_patch_small:obj.links.mission_patch
    }
  })
}
}

}
