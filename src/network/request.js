import axios from 'axios'//导入

export function request(config){
    const instance=axios.create({baseURL:'http://123.207.32.32:8000',timeout:5000})//创建实例

    instance.interceptors.request.use(config=>config,err=>{})//请求拦截器
    
    instance.interceptors.response.use(res=>res.data,err=>{})//响应拦截器

    return instance(config)//发生网络请求
}