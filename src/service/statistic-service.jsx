import Util from 'util/util';


class statistic{
    static getHomeCount(){
        return Util.request({
            url:'/manage/statistic/base_count.do',
           
        });
    }
}


export default statistic;