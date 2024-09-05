export function handleWinner (grid) { 
    let winArr = [];
    if (grid[0] === "X" && grid[1] === "X" && grid[2] === "X") {
        return winArr=[0,1,2]
    } else 
    if (grid[3] === "X" && grid[4] === "X" && grid[5] === "X") {
        return winArr=[3,4,5]
    } else
    if (grid[6] === "X" && grid[7] === "X" && grid[8] === "X") {
        return  winArr=[6,7,8]
    } else
    if (grid[0] === "X" && grid[3] === "X" && grid[6] === "X") {
        return winArr=[0,3,6]
    } else
    if (grid[1] === "X" && grid[4] === "X" && grid[7] === "X") {
        return  winArr=[1,4,7]
    } else
    if (grid[2] === "X" &&  grid[5] === "X" && grid[8] === "X") {
        return  winArr=[2,5,8]
    } else
    if (grid[0] === "X" && grid[4] === "X" && grid[8] === "X") {
        return  winArr=[0,4,8]
    } else
    if (grid[2] === "X" && grid[4] === "X" && grid[6] ==="X") {
        return  winArr=[2,4,6]
    } else 
    
    if (grid[0] === "0" && grid[1] === "0" && grid[2] === "0") {
        return winArr=[0,1,2]
    } else 
    if (grid[3] === "0" && grid[4] === "0" && grid[5] === "0") {
        return winArr=[3,4,5]
    } else
    if (grid[6] === "0" && grid[7] === "0" && grid[8] === "0") {
        return  winArr=[6,7,8]
    } else
    if (grid[0] === "0" && grid[3] === "0" && grid[6] === "0") {
        return winArr=[0,3,6]
    } else
    if (grid[1] === "0" && grid[4] === "0" && grid[7] === "0") {
        return  winArr=[1,4,7]
    } else
    if (grid[2] === "0" &&  grid[5] === "0" && grid[8] === "0") {
        return  winArr=[2,5,8]
    } else
    if (grid[0] === "0" && grid[4] === "0" && grid[8] === "0") {
        return  winArr=[0,4,8]
    } else
    if (grid[2] === "0" && grid[4] === "0" && grid[6] ==="0") {
        return  winArr=[2,4,6]
    } else 
    return winArr = []
}

// winArr din functia handleWinner returneaza cele 3 indexuri castigatoare si stabileste practic ca s-a definit un winner cand arrayul nu e gol
// La maparea butoanelor si la fiecare re-render, se trece prin indexul fiecarui buton
// Daca indexul butonului este in winArray, atunci e buton din winning combo si se coloreaza cu verde. 
// Daca indexul nu se afla in array, dar totusi este castigator playerul, ramane negru.