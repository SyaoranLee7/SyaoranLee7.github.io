'use strict'

/**
 *  desc 绘制矩形
 *  param
*   drawX： 绘制矩形X起点
*   drawY： 绘制矩形y坐标
*   width:  绘制矩形宽
*   height: 绘制矩形高
*   ctx：   画布的上下文环境
*   pixelRatio: 设备那个分辨率，例如iphone6是2，iphone13是3
*/
export function drawRect(drawX, drawY, width, height, baclgroundColor, ctx, pixelRatio){
    ctx.beginPath()
    ctx.rect(drawX, drawY/pixelRatio, width/pixelRatio, height/pixelRatio);
    ctx.setFillStyle(baclgroundColor);
    ctx.fill();
}

/**
 * 绘制文本
* size：  字号
* drawX： 绘制文本的x坐标
* drawY： 绘制文本的y坐标
* ctx：   画布的上下文环境
* pixelRatio: 设备那个分辨率，例如iphone6是2，iphone13是3
*/
export function drawText(size, color, align, content, drawX, drawY, ctx, pixelRatio){
    ctx.setFontSize(size/pixelRatio);
    ctx.setFillStyle(color);
    ctx.setTextAlign(align);
    ctx.fillText(content,drawX/pixelRatio,drawY/pixelRatio);
}

/**
 * desc 绘制图片
img：   需要绘制的图片
drawX： 绘制文本的x坐标
drawY： 绘制文本的y坐标
width： 图片宽
height: 图片高
ctx：   画布的上下文环境
pixelRatio: 设备那个分辨率，例如iphone6是2，iphone13是3
*/
export function drawImage(img, drawX, drawY, width, height, ctx, pixelRatio){
    ctx.drawImage(img, drawX/pixelRatio, drawY/pixelRatio, width/pixelRatio, height/pixelRatio)
}

/**
 * desc  文字换行
ctx：     画布的上下文环境
content： 需要绘制的文本内容
drawX：   绘制文本的x坐标
drawY：   绘制文本的y坐标
lineHeight：文本之间的行高
lineMaxWidth：每行文本的最大宽度
lineNum： 最多绘制的行数
*/
export function textPrewrap(ctx, content, drawX, drawY, lineHeight, lineMaxWidth, lineNum) {
    var drawTxt = ''; // 当前绘制的内容
    var drawLine = 1; // 第几行开始绘制
    var drawIndex = 0; // 当前绘制内容的索引
    // 判断内容是否可以一行绘制完毕
    if (ctx.measureText(content).width <= lineMaxWidth) {
        ctx.fillText(content.substring(drawIndex, i), drawX, drawY);
    } else {
            for (var i = 0; i < content.length; i++) {
            drawTxt += content[i];
            if (ctx.measureText(drawTxt).width >= lineMaxWidth) {
                if (drawLine >= lineNum) {
                    ctx.fillText(content.substring(drawIndex, i) + '..', drawX, drawY);
                    break;
                } else {
                    ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
                    drawIndex = i + 1;
                    drawLine += 1;
                    drawY += lineHeight;
                    drawTxt = '';
                }
            } else {
                // 内容绘制完毕，但是剩下的内容宽度不到lineMaxWidth
                if (i === content.length - 1) {
                    ctx.fillText(content.substring(drawIndex), drawX, drawY);
                }
            }
        }
    }
}