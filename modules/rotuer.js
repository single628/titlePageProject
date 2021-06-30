function Router() {
  this.currentHash = '/';
  this.routes = {};
}

// 注册路径，每个路径对应一个回调函数。 
Router.prototype.route = function (path, callback) {
  this.routes[path] = callback || function () {
      alert('未定义回调函数！');
  }
}

// 更新页面函数
Router.prototype.refresh = function () {
  this.currentHash = location.hash.slice(1) || '/';
  this.routes[this.currentHash]();
}

// 初始化
Router.prototype.init = function () {
  var self = this;
  window.addEventListener('load', function () {
      self.refresh();
  }, false);  

  window.addEventListener('hashchange', function () {
      self.refresh();
  });
}
export  {Router};