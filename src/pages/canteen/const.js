

export const statusList = [
    ['iconjibenxinxi', '基本信息', '' , '#94C6FF'],
    ['iconjiankangzheng', '健康证', '' , '#98CFC6'],
    ['iconjiandujiancha', '监督检查', '' , '#72BEE4'],
    ['iconkanzhibo', '看直播', '' , '#F1C58E'],
    ['icondianpingpinglun', '点评评论', '' , '#8CA3E7'],
    ['iconshitangpingmiantu', '食堂平面图', '' , '#EBCDBF'],
    ['iconshebei', '设备', '' , '#A3D9EC'],
    ['iconrenwu1', '任务', '' , '#E6BDB5'],
    ['icontousudianhua', '投诉电话', '' , '#E6BFD5'],
 
].map(el => (
    {
        iconName: el[0],
        label: el[1],
        path: el[2],
        color: el[3],
    }
))

export const dailyList = [
    ['iconcaidangongshi', '菜单公示', '','#98CFC6'],
    ['iconpeicangongshi', '陪餐公示', '','#94C6FF'],
    ['iconanquanzhishi', '安全知识', '','#EBCDBF'],
].map(el => (
    {
        iconName: el[0],
        label: el[1],
        path: el[2]
    }
))