window.onload = function() {  
    // 从URL的查询字符串中获取file参数的值  
    var urlParams = new URLSearchParams(window.location.search);  
    var fileParam = urlParams.get('file');  
    console.log(fileParam);  
  
    // 构造完整的文件URL（假设warn.html与当前页面在同一目录下）  
    var fileUrl = 'docs/' + fileParam;  
  
    // 使用fetch API发送请求获取HTML文件内容  
  
    // 如果没有指定file参数，显示默认文字  
    if (!fileParam) {  
        document.getElementById('docs').innerHTML = '<p>请从目录选择一个文档。</p>';  
    }  
    else{
        fetch(fileUrl)  
            .then(response => response.text()) // 将响应解析为文本  
            .then(htmlContent => {  
                // 将获取的HTML内容插入到容器中  
                document.getElementById('docs').innerHTML = htmlContent;  
    
                // 尝试获取并设置选中元素的样式  
                var selected = document.getElementById(fileParam);  
                if (selected !== null) {  
                    selected.style.color = "#45f445";  
                } else {  
                    console.error('Element with id: ' + fileParam + ' not found');  
                }  
                // 获取按下按钮的内容
                var buttoncontent = document.getElementById(fileParam).innerHTML;
                // 更改标题内容
                document.title = buttoncontent + " - 橙子冰棒的参考文档";
            })  
            .catch(error => {  
                console.error('Error fetching the HTML file:', error);  
                // 如果文件加载失败，显示错误消息  
                document.getElementById('docs').innerHTML = '<p>无法加载指定文件。</p>';  
            });  
    }
};