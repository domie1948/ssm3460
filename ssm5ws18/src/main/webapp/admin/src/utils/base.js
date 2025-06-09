const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm5ws18/",
            name: "ssm5ws18",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm5ws18/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农业信息化服务平台"
        } 
    }
}
export default base
