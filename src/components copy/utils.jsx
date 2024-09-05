export function handleWinner (grid) { 
    if (grid[0] === "X" && grid[0] === grid[1] && grid[0] === grid[2]) {
        return true
    } else 
    if (grid[0] === "X" && grid[0] === grid[3] && grid[0] === grid[6]) {
        return true
    } else
    if (grid[1] === "X" && grid[1] === grid[4] && grid[1] === grid[7]) {
        return true
    } else
    if (grid[2] === "X" && grid[2] === grid[5] && grid[2] === grid[8]) {
        return true
    } else
    if (grid[3] === "X" && grid[3] === grid[4] && grid[3] === grid[5]) {
        return true
    } else
    if (grid[6] === "X" &&  grid[6] === grid[7] && grid[6] === grid[8]) {
        return true
    } else
    if (grid[4] === "X" && grid[0] === grid[4] && grid[4] === grid[8]) {
        return true
    } else
    if (grid[2] === "X" && grid[2] === grid[4] && grid[2] === grid[6]) {
        return true
    } else 
    
    if (grid[0] === "0" && grid[0] === grid[1] && grid[0] === grid[2]) {
        return true
    } else 
    if (grid[0] === "0" && grid[0] === grid[3] && grid[0] === grid[6]) {
        return true
    } else
    if (grid[1] === "0" && grid[1] === grid[4] && grid[1] === grid[7]) {
        return true
    } else
    if (grid[2] === "0" && grid[2] === grid[5] && grid[2] === grid[8]) {
        return true
    } else
    if (grid[3] === "0" && grid[3] === grid[4] && grid[3] === grid[5]) {
        return true
    } else
    if (grid[6] === "0" &&  grid[6] === grid[7] && grid[6] === grid[8]) {
        return true
    } else
    if (grid[4] === "0" && grid[0] === grid[4] && grid[4] === grid[8]) {
        return true
    } else
    if (grid[2] === "0" && grid[2] === grid[4] && grid[2] === grid[6]) {
        return true
    } else return false
}

// make handle winner return the winning aquares, not just a boolean
// eg. const [winBtn, setWinBtn] = useState([]);
// setWinBtn[1,2,3]
// {index === winBtn[0] || index === winBtn[1] || index === winBtn[2] {
//      style={color:"green"}
// }}