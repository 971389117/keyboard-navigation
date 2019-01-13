
//1.初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']


//2.生成键盘
//遍历 keys,生成 kbd 标签
generateKeyboard(keys,hash);


//3.监听用户动作

document.addEventListener('keypress',listenToUser)


//下面是工具函数
function listenToUser(e){
    //获得按下的按键
    var key = e['key']
    var website = hash[key]
    window.open('http://'+website,'_blank')
}

function generateKeyboard(keys,hash){
    for(var index=0; index<keys['length'];index++){
        var div = tag('div')
        div.className = 'row'

        main.appendChild(div)

        var row = keys[index]

        for(var index2 = 0;index2<row['length'];index2++){
            var span = createSpan(row[index2])

            var button = createButton()
            var img = createImage(row[index2])
            var kbd = tag('kbd')
            kbd.className = 'key'
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)
        }
    }
}
function tag(tagName){
    return document.createElement(tagName)
}
function createImage(id) {
    var img=tag('img')
    var domain=hash[id]
    if(domain){
        img.src='http://'+domain+'/favicon.ico'
    }else{
        img.src='http:/i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror=function(xxx){
        xxx.target.src='http://i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}
function createSpan(textContent) {
    var span = tag('span')
    span.textContent=textContent
    span.className='text'
    return span
}
function createButton(id){
    var button = tag('button')
    button.textContent='编辑'
    button.id=id
    return button
}

function init(){
    var keys={
        '0':{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1':{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2':{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        length:3
    }

    var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 'y': 'youtube.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
			}

    //取出localStorage中的 zzz 对应的 hash
    var hashInLocalStorage = getFromLocalStorage('zzz')

    if(hashInLocalStorage){
        hash=hashInLocalStorage
    }

    return {
        'keys':keys,
        'hash':hash
    }
}
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name||'null'))
}
