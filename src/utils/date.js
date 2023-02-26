import moment from 'moment';

// 获取日期数组
export const buildDate = (dateNum, timeStamp) => {
    let arr = [];
    for(let i = 1; i <= dateNum; i++) {
        // 根据index获取日期 前4天 后 25天
        const nowDate = timeStamp 
                      ? moment(timeStamp).add(i, 'days').format('YYYY/MM/DD')
                      : moment().add(i - 1 - 4, 'days').format('YYYY/MM/DD');
        // // 根据日期获取周
        // const nowWeek = getWeek(new Date(nowDate).getDay()); 
        // arr.push({
        //     week: nowWeek,
        //     date: nowDate,
        //     time: new Date(nowDate).getTime()
        // })
        arr.push(new Date(nowDate).getTime())
    }

    return arr;
}

// 传入时间对象转换时间
export const formatDate = (timeStamp) => {
    return moment(timeStamp).format('YYYY/MM/DD')
}

// 根据当前时间戳获取今天是周几
export const getWeek = (timeStamp) => { // 参数时间戳
    switch (new Date(timeStamp).getDay()) {
        case 1:
            return '周一';
        case 2:
            return '周二';
        case 3:
            return '周三';
        case 4:
            return '周四';
        case 5:
            return '周五';
        case 6:
            return '周六';
        case 0:
            return '周日';
        default:
            break;
    }      
}