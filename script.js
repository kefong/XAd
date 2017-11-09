// 定期执行函数
var ads = ['.flashrecommend', '#com-quick-QRcode', '#layerd', 'iframe'];
function execute(){
    ads.forEach(function(element) {
        $(element).hide();
        $(element).remove();        
    }, this);

    // 每100毫秒执行一次
    setTimeout(execute, 100);
}

// 执行
execute();