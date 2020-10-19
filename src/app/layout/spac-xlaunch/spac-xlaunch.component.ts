import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-spac-xlaunch',
  templateUrl: './spac-xlaunch.component.html',
  styleUrls: ['./spac-xlaunch.component.css']
})
export class SpacXlaunchComponent implements OnInit {
  public launchData: Array<any>;
  public launchedYear: Array<any>
  public childFilteredData: Array<any>
  public launch_year = null
  public launch_success = null
  public land_success = null
  selectedIndex: number
  launch: string
  landing: string
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.getSpacXLaunchData()
  }

  getSpacXLaunchData() {
    this.httpService.getspaceXlaunch({limit:100}).subscribe(response => {
      if (response && Object.keys(response).length && response.status == 200) {
        this.launchData = response.body
        if (this.launchData && Array.isArray(this.launchData) && this.launchData.length) {
          const launchedYears = this.launchData.map(obj => obj.launch_year)
          this.launchedYear = [...new Set(launchedYears)]
          this.childFilteredData = this.launchData
        }

      }
    }, err => {
      console.log(err)
    })
  }

  getFilteredKeyValue(key, value, index) {
    if (key == 'launch_year') {
      if (value == this.launch_year) {
        this.selectedIndex = null
        this.launch_year = null
      } else {
        this.selectedIndex = index
        this.launch_year = value
      }
    } else if (key == 'launch_success') {
      if (value == this.launch_success) {
        this.launch = null
        this.launch_success = null
      } else {
        this.launch = index
        this.launch_success = value
      }
    } else if (key == 'land_success') {
      if (value == this.land_success) {
        this.landing = null
        this.land_success = null
      } else {
        this.landing = index
        this.land_success = value
      }

    }
    this.getFilteredData()
  }

  getFilteredData() {
    const obj = { limit: 100 }
    if (this.launch_success) {

      obj['launch_success'] = this.launch_success
    }
    if (this.land_success) {
      obj['land_success'] = this.land_success

    }
    if (this.launch_year) {
      obj['launch_year'] = this.launch_year

    }
    this.httpService.getspaceXlaunch(obj).subscribe(response => {
      if (response && Object.keys(response).length && response.status == 200) {

        if (response.body && Array.isArray(response.body) && response.body.length) {
          this.childFilteredData = response.body
        }

      }
    }, err => {
      console.log(err)
    })
  }

}
