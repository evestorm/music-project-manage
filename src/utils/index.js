import store from '@/store';

// 获取表格对象
export function getGrid() {
    return store.state.$grid;
}

