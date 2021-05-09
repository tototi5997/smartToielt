import axios from 'axios'
import {Modal} from 'antd'


export default class Axios {
  static ajax(option){
    let baseApi = ' https://www.fastmock.site/mock/e214c611f30281ca34785f02d6d515f5/smart_toielt';  //基础url
    return new Promise((resolve,rej) => {   //接收两个参数，res,rej
      axios({
        url:option.url,               //获取调用方法的那个路由
        baseURL:baseApi,
        method:'GET',
      }).then((response) => {
        if(response.status === 200){
          let res = response.data;
          if(res.code === 0){
            resolve(res);         //抛出res
          }else{
            Modal.info({
              title:'提示',
              message:res.msg
            })
          }
        }else{
          rej(response.data);
        }
      })
    }).catch((e) => {console.log(e)});          //防止报错
  }
}
