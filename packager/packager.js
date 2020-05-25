const JSPackager = require("parcel-bundler/src/packagers/JSPackager");

class GlobalThisPackager extends JSPackager {
  async start() {
    // globalThisオブジェクトを定義して、ScriptUIに対応させる。
    await this.dest.write("var globalThis=this;");
    return await super.start();
  }
}

module.exports = GlobalThisPackager;
