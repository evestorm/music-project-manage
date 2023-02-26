import './common';


// 格式化表格数据
export function formatScheduleData(data) {
    return data.reduce((pre, cur) => {
        const { projectId, stageId, scheduleTime } = cur;
        let cellData = pre[`${projectId}_${stageId}_${dateToDateTime(scheduleTime)}`];
        
        cellData && cellData.length > 0 
        ? (pre[`${projectId}_${stageId}_${dateToDateTime(scheduleTime)}`].push(cur))
        : pre[`${projectId}_${stageId}_${dateToDateTime(scheduleTime)}`] = [cur];

        return pre;
    }, {});
}

// 格式化项目数据
export function formatProject(data) {
    return data.reduce((pre, cur) => {
        const { projectId } = cur;

        pre[projectId] = cur;

        return pre;
    }, {});
}

// 格式化阶段数据
export function formatStage(stage, project) {
    return stage.map(item => {
        item.project = project[`${item.projectId}`];

        return item;
    })
}

// 时间转时间戳
export function dateToDateTime(date) {
    return new Date(date).getTime();
}

// 节流方法
export function throttle(fn, delay){
    var t = null,
        begin = new Date().getTime(); // 记录开始时间戳
        // console.log('begin:' + begin);
    return function(){
        var _self = this,
            args = arguments,
            cur = new Date().getTime();
            // console.log('cur:' + cur);
        // 先清除定时器
        clearInterval(t);
        // console.log('cur - begin:' + (cur - begin));
        // 如果用户一直在触发事件 当触发事件的时间间隔大于延时时间时
        // 执行一次回调函数，并修改初始时间值
        if(cur - begin >= delay){
            // console.log('大于延迟时间');
            fn.apply(_self, args);
            begin = cur;
        }else{ // 如果用户在触发事件，事件间隔小于延迟时间，则延迟执行函数
            t = setTimeout(function(){
                // console.log('小于于延迟时间');
                fn.apply(_self, args);
            }, delay);
        }
    }
}