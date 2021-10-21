const vscode = require('vscode');
// const path = require('path');
// const fs = require('fs');

const funList = {
  changeViewMode: ['更改地图模式'],
  createVectorLayer: ['生成矢量绘画图层']
}

/**
 * 鼠标悬停提示，显示当前方法详情
//  * @param {*} document
//  * @param {*} position
//  * @param {*} token
 */
function provideHover (document, position, token) {
  const curText = document.getText(document.getWordRangeAtPosition(position))
  if (funList[curText]) {
    return {
      contents: funList[curText]
    }
  }
  // return {
  //   contents: ['Hover Content', '222', document.getText(document.getWordRangeAtPosition(position))]
  // }
}

module.exports = function (context) {
  // 注册鼠标悬停提示
  context.subscriptions.push(vscode.languages.registerHoverProvider(['javascript', 'typescript', 'vue'], {
    provideHover
  }))
}