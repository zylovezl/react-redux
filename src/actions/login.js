import fetch from 'isomorphic-fetch'

export const login_success = (user,psw) => ({
    type: 'login_success',
    date:1
})



/*
export const success = (date) => ({
    type: 'login_success',
    date
})

// 页面初次渲染时获取数据
export const login_success = (user , psw) => {
    return dispatch => {
        fetch('/success', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ 'user':user ,'psw':psw})
        }).then(res => {
            if(res.success) {
                dispatch(success(res.date))
                console.log("POST SUCCESS");
            }
        }, e => {
            alert("POST ERROR");
        })
    }
}
*/
