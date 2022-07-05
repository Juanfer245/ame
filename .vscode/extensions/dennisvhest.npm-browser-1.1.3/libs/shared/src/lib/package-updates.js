import { SemVer } from 'semver';
var PackageUpdatesItem = /** @class */ (function () {
    function PackageUpdatesItem(item) {
        if (item.current)
            this.current = new SemVer(item.current);
        this.wanted = new SemVer(item.wanted);
        this.latest = new SemVer(item.latest);
        this.location = item.location;
    }
    Object.defineProperty(PackageUpdatesItem.prototype, "hasUpdateInRange", {
        get: function () {
            if (!this.current)
                return false;
            return this.current.compare(this.wanted) === -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PackageUpdatesItem.prototype, "hasUpdate", {
        get: function () {
            if (!this.current)
                return false;
            return this.current.compare(this.latest) === -1;
        },
        enumerable: true,
        configurable: true
    });
    return PackageUpdatesItem;
}());
export { PackageUpdatesItem };
//# sourceMappingURL=package-updates.js.map