$(function () {

  // 弹幕定时器
  var timers = [];

  function createScreenbullet(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = Math.floor((Math.random() + 1) * 24) + "px";
    var left = $(".screen_container").width() + "px";
    var top = Math.floor(Math.random() * 400) + "px";
    top = parseInt(top) > 352 ? "352px" : top;
    jqueryDom.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top
    });
    $(".screen_container").append(jqueryDom);
    return jqueryDom;
  }

  function addInterval(jqueryDom) {
    var left = jqueryDom.offset().left - $(".screen_container").offset().left;
    var timer = setInterval(function () {
        left--;
        jqueryDom.css("left", left + "px");
        if (jqueryDom.offset().left + jqueryDom.width() < $(".screen_container").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, random_timer);
    timers.push(timer);
  }

  var messages = [
    '鄧舒云：這個調查表太厲害了!!!!芋頭好美看起來好可口(咦) 恭喜恭喜妳們:) 很可愛的一對你們要一直相親相愛唷!!!:)',
    '陳研利：張旭，要好好照顧芋頭，祝你們新婚快樂！快來找我們度蜜月',
    '江政達 / 謝宜芳：早生貴子',
    '葉玫君：小芋頭，恭喜妳。要幸福喔',
    '邱委彣：早生貴子！希望12/23當天可以幸運抽中大金冷暖空調ㄧ台 3-4坪機型即可！',
    '王韋仁：老友結婚內心感動無限',
    '方豪傑：要永遠一直幸福哦～～～',
    '吳思穎：美人兒～踏入人生另一個階段，聰明的妳一定可以用智慧用心經營屬於妳的幸福',
    '欒君懿：好啦結婚快樂',
    '王珮珊：徐芋頭趕快生出一堆小芋頭吧XD',
    '鄭舒憶：',
    '陳冠豪：',
    '郭銘揚：幹，換機八旭哥了啦，我先+1啦，恭喜啦，我看狀況啦，日子接近再跟你確定~XD',
    '顏宏雋：有我有freestyle',
    '林海燕：',
    'Joshua Wu：',
    '陳思婷：不錯不錯 加油加油',
    '梁峻騰：張旭 有帥喔  by Liz',
    '羅右昇：波波',
    '帥哥賢："Yo Yo 美術館金城武在此祝福二位新婚愉快！"',
    '黃家瑩：恭喜老爺賀喜夫人～敬祝老爺夫人永浴愛河！',
    '陳仲陞：好帥啊，好美啊，恭喜狗屎旭娶到美嬌娘啊',
    '詹媛媛：',
    '2妹：一輩子幸福快樂',
    '陳楚文："恭喜402永遠的班長找到幸福美麗的歸宿！祝福你們 楚文&惠婷"',
    '陳貝拉：芋頭～love u～',
    '洪綉惠：啊哈哈哈~ 恭喜恭喜~~~ 我忙完了超爽! 接下來就換你們囉~~~ 有需要什麼幫忙請儘管開口囉:D',
    '莊捷翔：恭喜了 兄弟',
    '方正宇：恭喜張旭和美美的芋頭，要幸福一輩子喲❤！',
    '林哲瑋：鵝~~~~~~~~',
    '陳美婷：日子太好了，所以我沒辦法參加，嗚嗚嗚嗚嗚嗚，但禮會到的，一定要長長久久噢！',
    '葉佳翰：恭喜芋頭',
    '高珮瑜：恭喜你們，一定要幸福哦',
    '羅婷文：新娘想親送喜帖也可以喔，很近',
    '呂學宜：我要電視',
    '石正瑋："芋頭好漂亮 張旭難得人模人樣"',
    '吳家緯：旭哥要好好照顧另一半壓',
    '黃莉婷："親愛的芋頭兒~~~~~~恭喜妳也要步上幸福的殿堂!  期待當天美麗的新娘子!祝妳們永遠幸福快樂一輩子喔^^"',
    '王羿心：恭喜～婚紗好美啊！ㄧ定要幸福喔',
    'Holiday Lin："一定要幸福哦！ 那天Holiday 應該還在閉關～～ 能分享妳們的喜悅～我也感到幸福"',
    '梁伊婷：恭喜',
    '黃信超："芋頭老酥： freestyle是什麼啊 新婚快樂 哈哈"',
    'Ray：恭喜結婚囉.^^',
    '陳冠勳：科科 恭喜囉',
    '湯坤真：我覺得郎才女貌很可以，阿湯真的很嚴格',
    '羅芳財：恭喜恭喜',
    '闕源辰：恭禧啊，希望明年就有小孩的消息了',
    '彭莉雯：恭賀恭喜！',
    '葉詩晴：等好久啦 恭喜你們',
    '盧昱翔：恭喜呀',
    '筱郁：恭喜你們～',
    '張育瑞：恭喜恭喜~~~',
    '林聖淇：新婚愉快!!~',
    '魏群祐：恭喜老爺賀喜夫人',
    '賴政傑：卡羅姐，恭喜恭喜',
    '顏任苡：希望妳一輩子幸福快樂。',
    '余至軒：Yo 新婚愉快！',
    '林宏暘："旭旭做的網頁很有誠意喔！棒棒！ 恭喜恭喜"',
    '鄧玉欣：',
    '阿志：那時候人在大陸了   就不克前往了',
    '郭靜蕙：Congratulations!',
    '張雅俞："綺綺我先報名',
    '到時候有人帶就不去囉！康哥參加別攤去了！"',
    '程元貞："恭喜老爺 賀喜夫人 張旭好福氣 娶得芋頭美人歸 祝福永遠恩恩愛愛 早生貴子 讚讚讚"',
    '李念璇："恭喜喔！ 永遠幸福囉～"',
    '許雅萍：',
    '林妡曈：師父～要幸福喔～',
    '謝秉原：恭喜',
    '傅大竣：" 恭喜你們走到這一天喔！ 廢話不多說，請一定要用愛，走完這一輩子。 然後最後的大奬請給我！"',
    '陳柏諭：恭喜發財XD',
    '曾建穎："婚禮我覺得可以 我只怕張旭不行 蛋壓 新婚愉快"',
    '邱禾茜：恭喜噢！',
    '蔡易達：靠 你也會結婚 嚇死我惹',
    '滕南瑋：帥哥旭恭喜你！要好好對芋頭喔～',
    '黃聖心：恭喜發財~',
    '吳宏哲：兄弟 看到你幸福  就是我的幸福',
    '林蕙質：恭喜啦！',
    '王湘婷：祝福妳們新婚快樂喔～～～',
    '邱煒婷：恭喜Carol，幸福久久♥',
    '郭怡婷：',
    '葉殷志：超爽的～～～',
    '游志遠：郎才女貌，恭喜恭喜～～～ヽ(^。^)ノ',
    '劉心如：恭喜～當天想看新郎新娘表演',
    '楊雅菱Ivory：恭喜',
    'kent：',
    '吳玉舒：恭喜阿旭 賀喜阿旭',
    '司徒藼：',
    '宋威穎：雖然不能到，但還是祝你們幸福長久！有空要約一下啊！',
    '張峰榭：百年好合',
    '張存賢：結婚愉快啊！',
    '陳怡君：恭喜~~~',
    '林延興：我覺得不行',
    '陳韋志：',
    '顏琪芳：恭喜~恭喜~',
    '溫書桓：我覺得不行，感動到不行',
    '范月華：恭喜恭喜!',
    '林豋曄：請盡快跟上統哥的步伐^^',
    '侯雅珮（小麥）：難得有離我新竹住處這麼近的婚禮，但太可惜我剛好要去馬來西亞找溫尢，旭爺有空在新竹的話揪一下唄！祝福你們幸福呦！',
    '李宇軒："抱歉旭哥場跟高中同學場衝到了，大概無法出席了。 不過最喜歡旭哥燦爛的笑了，希望旭哥跟芋頭白頭偕老，永遠幸福!!!!"',
    '林韋伶：祝福你們～沒有車交通困難^_^這次先pass',
    '羅婉允：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈這題是哪招喇!!!!',
    '施乙豪：我覺得很可以',
    '李蘋：恭喜老爺賀喜夫人~',
    '林宏暘：恭喜旭旭賀喜旭旭，明年升格旭把拔',
    '江珮羽："天生一對～郎才女貌！ 祝福你們喔！"',
    '楊展丞（啟明）：',
    '李孟凝：恭喜你們，要幸福哦',
    '陳郁竹：',
    '盧姿君：一定要幸福',
    '賴冠良："你真的很鄉民 我喜歡"',
    '林冠吟：可愛的小夫妻祝你們事業88、幸福99，有什麼錯都是張旭的錯！',
    '吳克能：',
    '陳勁豪：',
    '林月詩：旭勇士～恭喜你要大婚了！可惜那天親戚也結婚無法去參加，好可惜，但是一定是少不了我滿滿的祝福，想當年我們可是差點瞎了眼的老戰友！哈哈哈！很替你開心，娶了個美嬌娘，要幸福哦！',
    '魏宏昇 Sean Wei：要開心喔',
    '游翔期：恭喜',
    '蔡文良、宋美雪：祝你們倆白頭偕老、永浴愛河、早生貴子',
    '黃俊鼎：祝俊男美女早生貴子',
    '陳俊成：旭哥恭喜！',
  ];

  for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    var jqueryDom = createScreenbullet(message);
    var random_timer = Math.floor(Math.random() * 3000);
    (function(random_timer){setTimeout(addInterval(jqueryDom), random_timer);})(random_timer);
  }

});
