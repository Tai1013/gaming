export default ({ $axios }) => {
    // 請求攔截
    $axios.onRequest(req => {
        // doing something...
    })
    // 響應攔截
    $axios.onResponse(res => {
        // doing something...
    })
    // 錯誤攔截
    // $axios.onError(err => {
    //     // doing something...
    // })
}