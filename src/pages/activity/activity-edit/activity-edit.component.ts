import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ActivityService } from '../activity.service'

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent implements OnInit,OnDestroy {
  activityId:string="";
  activity:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getActivitySubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private activityServ:ActivityService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.activityServ.activitys.push(this.activity)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getActivitySubscribe = this.route.params.subscribe(params=>{
      this.getActivity(params['sid']).then(activity=>{
      console.log(activity)
      this.activityId = activity.id;
      this.activity = activity
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getActivitySubscribe.unsubscribe();
  }

  getActivity(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let activity = {name:""}
        this.isNew = true;
        resolve(activity)
      }
      let activity = this.activityServ.activitys.find(item=>item.id == id)
      if(activity){
        resolve(activity)
      }else{
        reject("activity not found")
      }
    })
    return p
}

}
