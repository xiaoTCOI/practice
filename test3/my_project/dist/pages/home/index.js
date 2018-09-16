"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  onReady: function () {
    setTimeout(function () {
      wx.switchTab({
        url: '/pages/home_page/index',
      })
    }, 1000)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6W119