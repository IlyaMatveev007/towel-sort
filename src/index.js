module.exports = function towelSort (matrix) {
    if (matrix === undefined){
        return [];
    }
    var ans = [];
    var way = true;
    for (var i = 0; i < matrix.length; i++){
        if (way){
            for (var j = 0; j < matrix[i].length; j++){
                ans.push(matrix[i][j]);
            };
            way = !way;
        }
        else{
            for(var j = matrix[i].length - 1; j > -1; j--){
                ans.push(matrix[i][j]);
            }
            way = !way;
        };
    };
    return ans;
}
