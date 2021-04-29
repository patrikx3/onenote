module.exports = ({ byProperty }) => {
    return (a, b) => {
        if (byProperty !== undefined) {
            a = a[byProperty]
            b = b[byProperty]
        }
        const regexTemplate = /(\d+)|(\D+)/g;
        const ax = [], bx = [];

        a.replace(regexTemplate, function (_, $1, $2) {
            ax.push([$1 || Infinity, $2 || ""])
        });
        b.replace(regexTemplate, function (_, $1, $2) {
            bx.push([$1 || Infinity, $2 || ""])
        });

        while (ax.length && bx.length) {
            const an = ax.shift();
            const bn = bx.shift();
            const nn = (parseFloat(an[0]) - parseFloat(bn[0])) || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }

        return ax.length - bx.length;
    }
}
