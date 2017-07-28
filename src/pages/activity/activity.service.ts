import { Injectable } from "@angular/core";

@Injectable()
export class ActivityService{
    isLogined:boolean = false;
    activitys: Array < any > = [{
      'id': 1,
     'name':'陈奕迅演唱会',
     'place':'GZ',
     'project':'https://www.damai.cn/',
     'desc':'singer,港台',
     'time': '01-07-2017', // Date
     'number': 10000,
     'organizer': '华星影视'
    },
    {
     'id': 2,
     'name':'邓紫棋演唱会',
     'place':'SZ',
     'project':'http://gem.com',
     decs: 'singer,港台',
     'time': '10-07-2017', // 10 10 5 20 20 20 原始数据加分：修改了函数变量命名
     'number': 5000,
     'organizer': '天王影视'
    },
    {
     'id': 19,
     'name':'林子祥演唱会',
     'place':'GZ',
     'project':'https://www.damai.cn/',
     desc:'singer,港台',
     'time': '12-07-2017', // 10 10 5 20 20 15
     'number': 20000,
     'organizer': '华立影视'
    },
    {
     'id': 3,
     'name':'小野丽莎演唱会',
     'place':'GZ',
     'project':'http://www.baidu.com',
     'time': '13-07-2017', // 5 10 5 15 20 20 未修改README.md
     'number': 5000,
     'organizer': '星王'
    },
    {
     'id': 4,
     'name':'杨千嬅演唱会',
     'place':'GZ',
     'project':'http://www.baidu.com',
     'time': '15-07-2017', // 5 5 5 15 15 15 未修改readme，版本提交非项目根目录
     'number': 20000,
     'organizer': '华立影视'
    },
    {
     'id': 5,
     'name':'linkin park',
     'place':'GZ',
     'project':'http://www.baidu.com',
     desc:'singer,欧美',
     'time': '25-07-2017', // 10 10 5 15 15 20
     'number': 100000,
     'organizer': '上海影视'
    },
    {
     'id': 6,
     'name':'Adele',
     'place':'GZ',
     'project':'http://www.baidu.com',
     desc: 'singer,欧美',
     'time': '25-07-2017', // 10 10 10 15 20 10
     'number': 10000,
     'organizer': '上海影视'
    },
    {
     'id': 7,
     'name':'王菲演唱会',
     'place':'GZ',
     'project':'http://www.baidu.com',
     'time': '29-07-2017', // 5 10 5 5 10 5 未修改readme
     'number': 200000,
     'organizer': '港媒'
    }
    ,
    {
     'id': 8,
     'name':'黎明演唱会',
     'place':'GZ',
     'project':'http://www.baidu.com',
     desc: 'singer,港台',
     'time': '30-07-2017', // 10 10 5 20 20 20
     'number': 10000,
     'organizer': '广州传媒'
    }
  ];

    constructor(){

    }
    delete(obj){
        let id = obj.id
        this.activitys.forEach((item,index,array)=>{
        if(item.id == id){
            array.splice(index,1)
        }
        })
    }
    search(type,value){
        this.activitys.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.activitys.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }
    getActivitys(){
        return this.activitys;
    }

}

