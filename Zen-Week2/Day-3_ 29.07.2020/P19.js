console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    var P1 = Math.abs(x1-x2);
    var P2 = Math.abs(y1-y2);
    return (Math.sqrt((P1 * P1) + (P2 * P2)));
}
